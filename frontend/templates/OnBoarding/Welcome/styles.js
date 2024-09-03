const styles = {
  welcomeScreenGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'Center',
    alignItems: 'center',
    margin: '100px 0px',
  },

  welcomeScreenTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
    color: (theme) => theme.palette.Common.White['100p'],
  },
  welcomeScreenSubtitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    color: (theme) => theme.palette.Common.White['100p'],
  },
  welcomeKaiTextProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
    // sx: {},
    // span: { color: (theme) => theme.palette.Background.purple },
  },

  welcomeScreenButtonProps: {
    sx: {
      width: '22%',
      backgroundColor: '#7B61FF',
      color: '#fff',
      padding: '0.75rem 2rem',
      borderRadius: '20px',
      marginTop: '1rem',
      ':hover': {
        backgroundColor: '#6A50E6',
        color: '#fff',
      },
      fontFamily: 'Satoshi Bold',
      fontSize: '16px',
      textTransform: 'capitalize',
    },
  },

  // stepProps:{},
  progressBarGridProps: {
    container: true,
    item: true,
    justifyContent: 'center',
    marginTop: 10,

    width: '100%',
    height: '10px',
    marginBottom: '1rem',
  },
  stepperProps: {
    '& .MuiStepConnector-root': {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
      '& .MuiStepConnector-line': {
        borderColor: '#616161',
        borderWidth: '5px',
      },
    },
    '& .MuiStepIcon-root': {
      color: '#333333',
      width: '24px', // Adjust width as needed
      height: '24px', // Adjust height as needed
      borderRadius: '50%', // Make sure the step icon has rounded shape
      border: '1px solid #7B61FF', // Add border to visualize the step icon
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiStepIcon-text': {
        display: 'none', // Hides the numbers/text inside the step icon
      },
    },
    '& .MuiStepLabel-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& .MuiStepLabel-label': {
      display: 'none', // Ensure the label text is hidden
    },
    '& .MuiStepper-root': {
      background: 'transparent',
      width: '100%',
      marginBottom: '1rem',
    },
  },

  dropDownGridProps: {
    border: '1px solid #D7D7D7',
  },
  dropDownIconProps: {},
};

export default styles;
