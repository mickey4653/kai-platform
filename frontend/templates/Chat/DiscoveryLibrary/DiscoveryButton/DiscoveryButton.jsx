import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, useTheme } from '@mui/material';

import DiscoveryIcon from '@/assets/svg/add-block2.svg';

import styles from './styles';

const DiscoveryButton = (props) => {
  const { onClick } = props;
  return (
    <Grid {...styles.actionButtonGridProps}>
      <Button
        variant="outlined"
        startIcon={<DiscoveryIcon />}
        {...styles.actionButtonProps}
        onClick={onClick}
      >
        Discovery
      </Button>
    </Grid>
  );
};

export default DiscoveryButton;
