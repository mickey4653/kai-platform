import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import styles from "./styles";

const WelcomeScreen = () => {
  return (
    <Grid {...styles.welcomeScreenGridProps}>
      <Typography {...styles.welcomeScreenTitleProps}>
        Welcome to <span {...styles.welcomeKaiTextProps}>Kai</span> 👋
      </Typography>
      <Typography {...styles.welcomeScreenSubtitleProps}>
        Let's Get Started
      </Typography>
      <Button {...styles.welcomeScreenButtonProps}>Start Here!</Button>
    </Grid>
  );
};

export default WelcomeScreen;
