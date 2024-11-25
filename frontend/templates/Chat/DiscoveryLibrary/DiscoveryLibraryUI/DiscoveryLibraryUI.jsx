import React, { useEffect, useState } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import useChat from '@/hooks/useChat'; // Import the chat hook
import {
  RenderBottomChatContent,
  RenderCenterChatContent,
  RenderCenterChatContentNoMessages,
  RenderMoreChat,
  RenderNewMessageIndicator,
  RenderQuickAction,
  RenderSendIcon,
} from '@/hooks/useChatRenderComponents';
import useUser from '@/hooks/useUser'; // Import the user hook

import DiscoveryIcon from '@/assets/svg/add-block2.svg';
import imageCover1 from '@/assets/svg/imageCover1.svg';
import imageCover2 from '@/assets/svg/imageCover2.svg';
import imageCover3 from '@/assets/svg/imageCover3.svg';
import imageCover4 from '@/assets/svg/imageCover4.svg';
import AvatarImage from '@/assets/svg/ReadyPlayerMeAvatar.svg';
import StarGroupIcon from '@/assets/svg/starGroupIcon.svg';
import UnionIcon from '@/assets/svg/Union.svg';

import styles from './styles';

// Import the components
const imageUrls = [
  imageCover1,
  imageCover2,
  imageCover3,
  imageCover4,
  // Add more image URLs as needed
];
// console.log(imageCover1, imageCover2, imageCover3, imageCover4);
// const placeholderImage = 'https://media.istockphoto.com/id/1862938026/photo/artificial-intelligence-digital-concept.jpg?s=1024x1024&w=is&k=20&c=tv7Lr4WIncKuiDVcrcykbTUpKij48EF4wwJ92gtu-h0=';

const getRandomImage = () => {
  const RandomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  return <RandomImage {...styles.backImageProps} />;
};

const DiscoveryLibraryUI = () => {
  const [customPrompts, setCustomPrompts] = useState([]);
  const user = useUser();
  const {
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
  } = useChat(); // Use the custom hook

  const reduxDispatch = useDispatch(); // Use Redux dispatch

  useEffect(() => {
    // Define your custom prompts here
    const categorizePrompts = () => [
      {
        title: 'Math Tutor',
        description:
          'From now on, I want you to act as a math tutor. I will be asking you questions related to various mathematical concepts, including algebra, geometry, calculus, and statistics. Please provide detailed explanations, step-by-step solutions, and relevant examples for each topic we discuss.',
      },
      {
        title: 'Biology Tutor',
        description:
          'Please act as my biology tutor. I will ask you about topics such as cell biology, genetics, evolution, ecology, and human anatomy. Provide comprehensive explanations, diagrams, and examples to help me understand these biological concepts.',
      },
      {
        title: 'Programming Tutor',
        description:
          'I want you to be my programming tutor. I will ask you about various programming languages, coding concepts, algorithms, and debugging techniques. Provide clear explanations, code examples, and step-by-step guidance for writing and understanding code.',
      },
      {
        title: 'Music Tutor',
        description:
          'Act as a music tutor for our conversation. I will ask you about music theory, instruments, composition, and performance techniques. Provide detailed explanations, sheet music examples, and exercises to help me understand and improve my musical abilities.',
      },
      // { title: 'Programming Tutor', description: 'I want you to be my programming tutor. I will ask you about various programming languages, coding concepts, algorithms, and debugging techniques. Provide clear explanations, code examples, and step-by-step guidance for writing and understanding code.' },

      // Add more prompts as needed
    ];
    const fetchPrompts = async () => {
      const prompts = categorizePrompts(); // This could be an API call or local data
      setCustomPrompts(prompts);
      handleScrollToBottom();
    };

    fetchPrompts();
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handlePromptClick = (description) => {
    // console.log('Prompt clicked:', description);
    dispatch(setInput(description));
    handleSendMessage(description);
  };

  useEffect(() => {
    // console.log('Input state changed:', input);
  }, [input]);
  return (
    <Grid container {...styles.discoveryContainerGrid}>
      <Grid container {...styles.discoveryGridProps}>
        <Grid container {...styles.discoveryPanelProps}>
          <IconButton>
            <DiscoveryIcon {...styles.discoveryIconProps} />
          </IconButton>
          <Typography {...styles.discoveryPanelTextProps}>Discovery</Typography>
        </Grid>

        <Grid item {...styles.unionIconGridProps}>
          <IconButton>
            <UnionIcon />
          </IconButton>
          <Typography {...styles.unionIconTextProps}>
            Welcome Back, {user?.fullName || 'User'}!
          </Typography>
        </Grid>

        <Grid container {...styles.avatarGridProps}>
          <Grid item {...styles.avatarImageGridProps}>
            <AvatarImage {...styles.avatarImageProps} />
          </Grid>
          <Grid item {...styles.starGroupIconGridProps}>
            <StarGroupIcon {...styles.starGroupIconProps} />
          </Grid>
          <Grid item {...styles.avatarTextBoxProps}>
            <Typography {...styles.avatarHeaderTextProps}>
              AI Custom Course Creator
            </Typography>
            <Typography {...styles.avatarSubTextProps}>
              Have Kai help you build your class from scratch!
            </Typography>
          </Grid>
        </Grid>

        <Grid {...styles.cardGridProps}>
          {customPrompts?.map((prompt, index) => (
            <Grid
              item
              key={index}
              onClick={() => handlePromptClick(prompt.description)}
            >
              <Card {...styles.cardProps}>
                <CardActionArea>
                  <CardContent>
                    {getRandomImage()}
                    <Typography {...styles.cardTitleProps}>
                      {prompt.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid {...styles.CenterChatContentGridProps}>
        <RenderCenterChatContent
          chatMessages={chatMessages}
          handleOnScroll={handleOnScroll}
          messagesContainerRef={messagesContainerRef}
          dispatch={reduxDispatch}
          setMore={setMore}
          handleQuickReply={handleQuickReply}
          streaming={streaming}
          fullyScrolled={fullyScrolled}
          typing={typing}
          openSettingsChat={openSettingsChat}
          infoChatOpened={infoChatOpened} // Add this line
        />
        {showNewMessageIndicator && (
          <RenderNewMessageIndicator
            handleScrollToBottom={handleScrollToBottom}
          />
        )}
      </Grid>

      {/* RenderCenterChatContentNoMessages */}

      <Grid {...styles.chatBoxProps}>
        <RenderBottomChatContent
          openSettingsChat={openSettingsChat}
          infoChatOpened={infoChatOpened}
          input={input}
          error={error}
          dispatch={dispatch}
          keyDownHandler={keyDownHandler}
          handleSendMessage={handleSendMessage}
          typing={typing} // Pass typing here
          streaming={streaming} // Pass streaming here
          setInput={setInput} // Pass setInput here
        />
      </Grid>
    </Grid>
  );
};

export default DiscoveryLibraryUI;
