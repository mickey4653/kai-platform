import React from 'react';

import { Collapse, Divider, Grid, IconButton } from '@mui/material';

import DropDownIcon from '@/assets/svg/arrow-forward-simple.svg';

import styles from './styles';

const ProgressBar = (props) => {
  const { steps, activeStep, expanded, onToggleExpand, onStepClick } = props;
  return (
    <Grid {...styles.progressBarGridContainer}>
      {/* Progress Bar and Dropdown Icon */}
      <Grid {...styles.progressBarGrid}>
        {/* Progress Bar */}
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          {steps.map((_, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Grid
                  {...styles.progressBarProps}
                  sx={{
                    backgroundColor: index <= activeStep ? '#6b63ff' : '#444',
                  }}
                />
              )}
              <Grid
                {...styles.progressBarCircleProps}
                sx={{
                  backgroundColor: index < activeStep ? '#6b63ff' : '#444',
                }}
              >
                {index < activeStep && <span>&#x2714;</span>}
              </Grid>
            </React.Fragment>
          ))}

          {/* Dropdown Icon */}
          <Grid item>
            <IconButton onClick={onToggleExpand}>
              <DropDownIcon
                style={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </IconButton>
          </Grid>
        </Grid>

        {/* Expandable/Collapsible Section */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid direction="column" {...styles.collapseGridProps}>
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Grid
                  onClick={() => onStepClick(index)}
                  {...styles.stepsGridProps}
                  sx={{
                    backgroundColor:
                      index === activeStep ? '#33334d' : 'transparent',
                  }}
                >
                  <Grid
                    {...styles.stepProps}
                    sx={{
                      backgroundColor: index === activeStep ? '#444' : '#555',
                      borderColor: index === activeStep ? '#6b63ff' : '#555',
                    }}
                  >
                    {index < activeStep && (
                      <span style={{ color: '#6b63ff' }}>✔️</span>
                    )}
                  </Grid>
                  {step}
                </Grid>
                {index < steps.length - 1 && (
                  <Divider sx={{ backgroundColor: '#444' }} />
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
