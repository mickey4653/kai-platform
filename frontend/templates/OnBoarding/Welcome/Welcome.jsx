import React, { useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';

import { useRouter } from 'next/router';

import ProgressBar from '@/templates/OnBoarding/ProgressBar/ProgressBAr';

import ROUTES from '@/constants/routes';

import styles from './styles';

const WelcomeScreen = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState(false); // State for expand/collapse

  const steps = [
    'Welcome',
    'Profile Setup',
    'System Configurations',
    'Final Steps',
  ];

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleStartButtonClick = () => {
    setActiveStep(1);
    setTimeout(() => {
      router.push(ROUTES.PROFILE);
    }, 300); // Adjust delay to match animation duration
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
    setExpanded(false); // Collapse after selecting a step
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <ProgressBar
          steps={steps}
          activeStep={activeStep}
          expanded={expanded}
          onToggleExpand={handleToggleExpand}
          onStepClick={handleStepClick}
        />
      </Grid>

      <Grid {...styles.welcomeScreenGridProps}>
        <Typography {...styles.welcomeScreenTitleProps}>
          Welcome to <span style={{ color: '#7B61FF' }}>Kai</span> 👋
        </Typography>
        <Typography {...styles.welcomeScreenSubtitleProps}>
          Let&apos;s Get Started
        </Typography>
        <Button
          {...styles.welcomeScreenButtonProps}
          onClick={handleStartButtonClick}
        >
          Start Here!
        </Button>
      </Grid>
    </>
  );
};

export default WelcomeScreen;
