import React from 'react';

import { ThemeProvider } from '@mui/material';

const ThemeWrapper = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
