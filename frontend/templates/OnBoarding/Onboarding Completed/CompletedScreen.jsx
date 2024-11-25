import React from 'react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import CheckMark from '@/assets/svg/CheckMark.svg';

import ROUTES from '../../../constants/routes';

import styles from './styles';

const CompletedScreen = () => {
  const router = useRouter();

  const handleContinueButtonClick = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <>
      <Grid {...styles.completeScreenGrid1Props}>
        <Box {...styles.completeScreenCheckMarkIconProps}>
          <CheckMark />
        </Box>
      </Grid>

      <Grid {...styles.completeScreenGrid2Props}>
        <Typography {...styles.completeScreenTitleProps}>
          Onboarding Complete!
        </Typography>
        <Typography {...styles.completeScreenSubtitleProps}>
          Congrats the onboarding is complete,
        </Typography>
        <Typography {...styles.completeScreenSubtitleProps}>
          Continue to go to homepage.
        </Typography>
        <Button
          variant="contained"
          {...styles.completeScreenButtonProps}
          onClick={handleContinueButtonClick}
        >
          Continue
        </Button>
      </Grid>
    </>
  );
};

export default CompletedScreen;
