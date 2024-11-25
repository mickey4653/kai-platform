import React, { useState } from 'react';

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';

import MainAppLayout from '@/layouts/MainAppLayout';
import CompletedScreen from '@/templates/OnBoarding/Onboarding Completed';

const OnboardingCompleted = ({ onFinish }) => {
  return <CompletedScreen />;
};

export default OnboardingCompleted;
