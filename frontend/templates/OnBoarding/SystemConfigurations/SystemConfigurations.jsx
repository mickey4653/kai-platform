import React, { useState } from 'react';

import { Box, Button, Switch, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import ROUTES from '@/constants/routes';

import ProgressBar from '../ProgressBar';

import { darkTheme, lightTheme } from '../Theme';
import ThemeWrapper from '../ThemeWrapper';

import styles from './styles';

import updateNotificationPreference from '@/services/notificationPreferences';

const SystemConfigurationPage = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState(false); // State for expand/collapse
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [reminders, setReminders] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleEmailNotificationsChange = (event) => {
    setEmailNotifications(event.target.checked);
    console.log(emailNotifications);
  };

  const handlePushNotificationsChange = (event) => {
    setPushNotifications(event.target.checked);
  };

  const handleRemindersChange = (event) => {
    setReminders(event.target.checked);
  };

  const handleThemeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

  const options = [
    {
      optionContent: 'Enable Email Notifications',
      optionBoolean: emailNotifications,
      handleChange: handleEmailNotificationsChange,
    },
    {
      optionContent: 'Enable Push Notifications',
      optionBoolean: pushNotifications,
      handleChange: handlePushNotificationsChange,
    },
    {
      optionContent: 'Enable Reminders',
      optionBoolean: reminders,
      handleChange: handleRemindersChange,
    },
  ];

  const steps = [
    'Welcome',
    'Profile Setup',
    'System Configurations',
    'Final Steps',
  ];

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleFinishButtonClick = async (event) => {
    event.preventDefault();

    try {
      // console.log('Finish button clicked');
      await updateNotificationPreference({
        emailNotifications,
        pushNotifications,
        reminders,
        isDarkMode,
      });
      // Handle success
      console.log('Notification preference updated successfully');
    } catch (error) {
      // Handle error
      console.error('Error updating notification preference:', error);
    }

    setActiveStep(3);
    setTimeout(() => {
      // todo : replace the PROFILE with next page name
      router.push(ROUTES.PROFILE);
    }, 300); // Adjust delay to match animation duration
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
    setExpanded(false); // Collapse after selecting a step
  };

  return (
    <ThemeWrapper
      theme={isDarkMode ? darkTheme : lightTheme}
      toggleTheme={handleThemeChange}
    >
      {/* the main box of notification options */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        height="100vh"
        bgcolor="background.default"
        color="text.primary"
      >
        <Box margin={20}>
          <ProgressBar
            steps={steps}
            activeStep={2}
            expanded={expanded}
            onToggleExpand={handleToggleExpand}
            onStepClick={handleStepClick}
          />
        </Box>
        {/* the title */}
        <Typography variant="h4" gutterBottom>
          System Configurations
        </Typography>
        {/* the subtitle */}
        <Typography variant="body1" gutterBottom>
          We need some permissions to get you started
        </Typography>
        {/* first 4 options */}
        <Box width="100%" maxWidth={400} mt={4}>
          {options.map((option, index) => (
            <Box
              key={option.id || index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="body1">{option.optionContent}</Typography>
              <Switch
                checked={option.optionBoolean}
                onChange={option.handleChange}
                sx={{
                  '& .MuiSwitch-track': {
                    backgroundColor: option.optionBoolean
                      ? '#8653FF'
                      : 'lightgrey',
                  },
                  '& .MuiSwitch-thumb': {
                    backgroundColor: option.optionBoolean ? '#8653FF' : 'white',
                  },
                }}
              />
            </Box>
          ))}
          {/* the last option: theme */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="body1">Theme Selection</Typography>
            <Typography
              variant="body1"
              position="absolute"
              left={isDarkMode ? '80%' : '20%'}
              top="-20%"
              color={isDarkMode ? 'text.secondary' : 'text.primary'}
              sx={{ transition: 'left 0.2s' }}
            >
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
            <Switch
              checked={isDarkMode}
              onChange={handleThemeChange}
              sx={{
                width: '60px',
                '& .MuiSwitch-track': {
                  backgroundColor: isDarkMode ? '#8653FF' : 'lightgrey',
                  position: 'relative',
                  '&::after': {
                    content: isDarkMode ? 'Dark' : 'Light',
                    position: 'absolute',
                    right: isDarkMode ? '12px' : '50%',
                    left: isDarkMode ? 'unset' : '12px',
                    transform: isDarkMode
                      ? 'translateX(-1050px) translateY(-50%)'
                      : 'translateX(50px) translateY(-50%)',
                    color: isDarkMode ? 'white' : 'black',
                    fontSize: '10px',
                    top: '50%',
                    whiteSpace: 'nowrap',
                  },
                },

                '& .MuiSwitch-thumb': {
                  backgroundColor: isDarkMode ? '#8653FF' : 'white',
                  margin: '0px',
                },
              }}
            />
          </Box>

          <Button
            variant="contained"
            {...styles.SystemConfigurationsFinishButton}
            onClick={handleFinishButtonClick}
          >
            Finish
          </Button>
        </Box>
      </Box>
    </ThemeWrapper>
  );
};

export default SystemConfigurationPage;
