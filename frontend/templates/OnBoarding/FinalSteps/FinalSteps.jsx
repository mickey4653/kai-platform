import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar';
import styles from './styles';

const FinalSteps = () => {
  const [activeStep] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const steps = [
    'Welcome',
    'Profile Setup',
    'System Configurations',
    'Final Steps'
  ];

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container direction="column" sx={{ minHeight: '100vh' }}>
      <Grid sx={{ position: 'relative', zIndex: 2 }}>
        <ProgressBar
          steps={steps}
          activeStep={activeStep}
          expanded={expanded}
          onToggleExpand={handleToggleExpand}
          onStepClick={() => {}}
        />
      </Grid>

      <Grid {...styles.finalStepsGridProps}>
        <Typography {...styles.titleProps}>
          Final Steps
        </Typography>
        <Typography {...styles.subtitleProps}>
          We need some permissions to get you started
        </Typography>

        <Grid {...styles.stepsListProps}>
          {steps.map((step, index) => (
            <Grid key={step} {...styles.stepItemProps}>
              <div
                style={{
                  ...styles.checkCircleOuterProps,
                  border: index < activeStep 
                    ? '2px solid #fff'
                    : index === activeStep 
                      ? '2px solid #6b63ff'
                      : '2px solid #444'
                }}
              >
                <div
                  style={{
                    ...styles.checkCircleInnerProps,
                    backgroundColor: index < activeStep 
                      ? '#6b63ff'
                      : 'transparent'
                  }}
                >
                  {index < activeStep && (
                    <span style={styles.checkmarkProps}>&#x2714;</span>
                  )}
                </div>
              </div>
              <Typography sx={{ color: '#fff' }}>
                {step}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Button {...styles.continueButtonProps}>
          Continue
        </Button>
      </Grid>
    </Grid>
  );
};

export default FinalSteps;