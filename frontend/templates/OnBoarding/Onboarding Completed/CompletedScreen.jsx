import React from 'react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import ROUTES from '../../../constants/routes';

import styles from './styles';

const CompletedScreen = () => {
  const router = useRouter();

  const handleContinueButtonClick = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <Grid {...styles.completeScreenMainGridProps}>
      <Grid {...styles.completeScreenGrid1Props}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: 50,
            bgcolor: 'primary.main',
            border: 5,
            borderColor: '#D9D9D9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CheckRoundedIcon sx={{ color: 'white', fontSize: 60 }} />
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
    </Grid>
  );
};

export default CompletedScreen;
