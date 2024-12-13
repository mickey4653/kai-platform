const styles = {
    finalStepsGridProps: {
      container: true,
      direction: 'column',
      alignItems: 'center',
      sx: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        mt: 15,
        px: 2
      }
    },
  
    titleProps: {
      variant: "h4",
      sx: {
        fontSize: '24px',
        fontWeight: 500,
        color: '#fff',
        textAlign: 'center',
        mb: 1
      }
    },
  
    subtitleProps: {
      sx: {
        fontSize: '14px',
        color: '#fff',
        textAlign: 'center',
        mb: 6
      }
    },
  
    stepsListProps: {
      container: true,
      direction: "column",
      sx: {
        width: '100%',
        maxWidth: '320px'
      }
    },
  
    stepItemProps: {
      container: true,
      alignItems: "center",
      gap: 2,
      sx: {
        padding: '12px 16px',
        borderBottom: '1px solid #333',
        position: 'relative'
      }
    },
  
    checkCircleOuterProps: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
  
    checkCircleInnerProps: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    },
  
    checkmarkProps: {
      fontSize: '12px'
    },
  
    continueButtonProps: {
      variant: "contained",
      fullWidth: true,
      sx: {
        mt: 4,
        width: '22%',
        py: 1.5,
        borderRadius: '20px',
        backgroundColor: '#7B61FF',
        color: '#fff',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#6A50E6'
        },
        fontSize: '16px',
        fontFamily: 'Satoshi Bold'
      }
    }
  };
  
  export default styles;