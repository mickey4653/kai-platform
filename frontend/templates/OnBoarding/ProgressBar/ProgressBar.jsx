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
                  borderColor: index === activeStep ? '#6b63ff' : '#fff',
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
          <Grid {...styles.collapseGridProps}>
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Grid
                  onClick={() => onStepClick(index)}
                  {...styles.stepsGridProps}
                  sx={{
                    backgroundColor:
                      index === activeStep ? '#181A20' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#33334d',
                    },

                    //   border: index === activeStep ? "2px solid #6b63ff": "2px solid #6b63ff",
                  }}
                >
                  <Grid
                    {...styles.stepProps}
                    sx={{
                      backgroundColor:
                        index === activeStep ? '#444' : '#6b63ff',
                      borderColor: index !== activeStep ? '#fff' : '#6b63ff',
                    }}
                  >
                    {index < activeStep && (
                      <span {...styles.tickProps}>&#x2714;</span>
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
