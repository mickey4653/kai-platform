import React, { useEffect } from 'react';

import {
  ArrowDownwardOutlined,
  InfoOutlined,
  Settings,
} from '@mui/icons-material';
import {
  Button,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import CenterChatContentNoMessages from '@/templates/Chat/CenterChatContentNoMessages';
import ChatSpinner from '@/templates/Chat/ChatSpinner';
import Message from '@/templates/Chat/Message';
import QuickActionButton from '@/templates/Chat/QuickActionButton';

import styles from '@/templates/Chat/styles';

import NavigationIcon from '@/assets/svg/Navigation.svg';

import { MESSAGE_ROLE } from '@/constants/bots';

export const RenderSendIcon = ({
  handleSendMessage,
  typing,
  error,
  input,
  streaming,
}) => (
  <InputAdornment position="end">
    <IconButton
      onClick={handleSendMessage}
      {...styles.bottomChatContent.iconButtonProps(
        typing || error || !input || streaming
      )}
    >
      <NavigationIcon />
    </IconButton>
  </InputAdornment>
);

export const RenderMoreChat = ({ more, dispatch, openInfoChat }) => {
  if (!more) return null;
  return (
    <Grid {...styles.moreChat.moreChatProps}>
      <Grid {...styles.moreChat.contentMoreChatProps}>
        <Settings {...styles.moreChat.iconProps} />
        <Typography {...styles.moreChat.titleProps}>Settings</Typography>
      </Grid>
      <Grid
        {...styles.moreChat.contentMoreChatProps}
        onClick={() => dispatch(openInfoChat())}
      >
        <InfoOutlined {...styles.moreChat.iconProps} />
        <Typography {...styles.moreChat.titleProps}>Information</Typography>
      </Grid>
    </Grid>
  );
};

export const RenderCenterChatContent = ({
  chatMessages,
  handleOnScroll,
  messagesContainerRef,
  dispatch,
  setMore,
  handleQuickReply,
  streaming,
  fullyScrolled,
  typing,
  openSettingsChat,
  infoChatOpened,
}) => {
  if (
    !openSettingsChat &&
    !infoChatOpened &&
    chatMessages?.length !== 0 &&
    !!chatMessages
  )
    return (
      <Grid
        onClick={() => dispatch(setMore({ role: 'shutdown' }))}
        {...styles.centerChat.centerChatGridProps}
      >
        <Grid
          ref={messagesContainerRef}
          onScroll={handleOnScroll}
          {...styles.centerChat.messagesGridProps}
        >
          {chatMessages?.map(
            (message, index) =>
              message?.role !== MESSAGE_ROLE.SYSTEM && (
                <Message
                  ref={messagesContainerRef}
                  {...message}
                  messagesLength={chatMessages?.length}
                  messageNo={index + 1}
                  onQuickReply={handleQuickReply}
                  streaming={streaming}
                  fullyScrolled={fullyScrolled}
                  key={index}
                />
              )
          )}
          {typing && <ChatSpinner />}
        </Grid>
      </Grid>
    );

  return null;
};

export const RenderCenterChatContentNoMessages = ({
  chatMessages,
  infoChatOpened,
}) => {
  if ((chatMessages?.length === 0 || !chatMessages) && !infoChatOpened)
    return <CenterChatContentNoMessages />;
  return null;
};

export const RenderNewMessageIndicator = ({
  showNewMessageIndicator,
  handleScrollToBottom,
}) => (
  <Fade in={showNewMessageIndicator}>
    <Button
      startIcon={<ArrowDownwardOutlined />}
      onClick={handleScrollToBottom}
      {...styles.newMessageButtonProps}
    />
  </Fade>
);

export const RenderQuickAction = () => (
  <InputAdornment position="start">
    <Grid {...styles.bottomChatContent.bottomChatContentGridProps}>
      <QuickActionButton defaultText="Actions" />
    </Grid>
  </InputAdornment>
);

export const RenderBottomChatContent = ({
  openSettingsChat,
  infoChatOpened,
  input,
  error,
  dispatch,
  keyDownHandler,
  handleSendMessage,
  typing,
  streaming,
  setInput,
}) => {
  useEffect(() => {
    // console.log('Input state changed:', input); // Log input state change
  }, [input]);
  if (!openSettingsChat && !infoChatOpened)
    return (
      <Grid {...styles.bottomChatContent.bottomChatContentGridProps}>
        <Grid {...styles.bottomChatContent.chatInputGridProps(!!error)}>
          <TextField
            value={input}
            onChange={(e) => dispatch(setInput(e.currentTarget.value))}
            onKeyUp={keyDownHandler}
            error={!!error}
            helperText={error}
            disabled={!!error}
            focused={false}
            {...styles.bottomChatContent.chatInputProps(
              RenderQuickAction,
              () =>
                RenderSendIcon({
                  handleSendMessage,
                  typing,
                  error,
                  input,
                  streaming,
                }),
              !!error,
              input
            )}
          />
        </Grid>
      </Grid>
    );

  return null;
};
