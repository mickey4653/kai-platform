import { useEffect, useRef } from 'react';

import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import { MESSAGE_ROLE, MESSAGE_TYPES } from '@/constants/bots';

import {
  resetChat,
  setChatSession,
  setError,
  setFullyScrolled,
  setInput,
  setMessages,
  setMore,
  setSessionLoaded,
  setStreaming,
  setStreamingDone,
  setTyping,
} from '@/redux/slices/chatSlice';
import { firestore } from '@/redux/store';
import createChatSession from '@/services/chatbot/createChatSession';
import sendMessage from '@/services/chatbot/sendMessage';

const useChat = () => {
  const messagesContainerRef = useRef();
  const dispatch = useDispatch();
  const {
    more,
    input,
    typing,
    chat,
    sessionLoaded,
    openSettingsChat,
    infoChatOpened,
    fullyScrolled,
    streamingDone,
    streaming,
    error,
  } = useSelector((state) => state.chat);
  const { data: userData } = useSelector((state) => state.user);
  const sessionId = localStorage.getItem('sessionId');
  const currentSession = chat;
  const chatMessages = currentSession?.messages;
  const showNewMessageIndicator = !fullyScrolled && streamingDone;

  const startConversation = async (message) => {
    dispatch(setMessages({ role: MESSAGE_ROLE.AI }));
    dispatch(setTyping(true));

    const chatPayload = {
      user: {
        id: userData?.id,
        fullName: userData?.fullName,
        email: userData?.email,
      },
      type: 'chat',
      message,
    };
    const { status, data } = await createChatSession(chatPayload, dispatch);

    dispatch(setTyping(false));
    if (status === 'created') dispatch(setStreaming(true));
    dispatch(setChatSession(data));
    dispatch(setSessionLoaded(true));
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('sessionId');
      dispatch(resetChat());
    };
  }, []);

  useEffect(() => {
    let unsubscribe;

    if (sessionLoaded || currentSession) {
      messagesContainerRef.current?.scrollTo(
        0,
        messagesContainerRef.current?.scrollHeight,
        { behavior: 'smooth' }
      );

      const sessionRef = query(
        collection(firestore, 'chatSessions'),
        where('id', '==', sessionId)
      );
      unsubscribe = onSnapshot(sessionRef, async (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'modified') {
            const updatedData = change.doc.data();
            const updatedMessages = updatedData.messages;
            const lastMessage = updatedMessages[updatedMessages.length - 1];
            if (lastMessage?.role === MESSAGE_ROLE.AI) {
              dispatch(
                setMessages({ role: MESSAGE_ROLE.AI, response: lastMessage })
              );
              dispatch(setTyping(false));
            }
          }
        });
      });
    }

    return () => {
      if (sessionLoaded || currentSession) unsubscribe();
    };
  }, [currentSession, sessionLoaded]);

  const handleOnScroll = () => {
    const scrolled =
      Math.abs(
        messagesContainerRef.current.scrollHeight -
          messagesContainerRef.current.clientHeight -
          messagesContainerRef.current.scrollTop
      ) <= 1;
    if (fullyScrolled !== scrolled) dispatch(setFullyScrolled(scrolled));
  };

  const handleScrollToBottom = () => {
    messagesContainerRef.current?.scrollTo(
      0,
      messagesContainerRef.current?.scrollHeight,
      { behavior: 'smooth' }
    );
    dispatch(setStreamingDone(false));
  };

  const handleSendMessage = async (messages = null) => {
    const currentInput = messages || input;
    // console.log('Input before sending message:', currentInput);
    dispatch(setStreaming(true));
    if (!currentInput) {
      dispatch(setError('Please enter a message'));
      setTimeout(() => dispatch(setError(null)), 3000);
      return;
    }

    const message = {
      role: MESSAGE_ROLE.HUMAN,
      type: MESSAGE_TYPES.TEXT,
      payload: { text: currentInput },
    };
    if (!chatMessages) {
      await startConversation(message);
      return;
    }

    dispatch(setMessages({ role: MESSAGE_ROLE.HUMAN }));
    dispatch(setTyping(true));
    await sendMessage({ message, id: sessionId }, dispatch);
    dispatch(setInput('')); // Clear input after sending message
  };

  const handleQuickReply = async (option) => {
    dispatch(setInput(option));
    dispatch(setStreaming(true));
    handleSendMessage();
    const message = {
      role: MESSAGE_ROLE.HUMAN,
      type: MESSAGE_TYPES.QUICK_REPLY,
      payload: { text: option },
    };
    dispatch(setMessages({ role: MESSAGE_ROLE.HUMAN }));
    dispatch(setTyping(true));
    await sendMessage({ message, id: currentSession?.id }, dispatch);
  };

  const keyDownHandler = async (e) => {
    if (typing || !input || streaming) return;
    if (e.keyCode === 13) handleSendMessage();
  };

  return {
    messagesContainerRef,
    dispatch,
    input,
    setInput,
    setMore,
    typing,
    streaming,
    chatMessages,
    showNewMessageIndicator,
    error,
    openSettingsChat,
    infoChatOpened,
    handleOnScroll,
    handleScrollToBottom,
    handleSendMessage,
    handleQuickReply,
    keyDownHandler,
    fullyScrolled,
  };
};

export default useChat;
