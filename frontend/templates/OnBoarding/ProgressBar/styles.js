const styles = {
  progressBarGridContainer: {
    container: true,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarGrid: {
    container: true,
    alignItems: 'center',
    justifyContent: 'center',
    sx: {
      flexDirection: 'column',
      backgroundColor: '#27293d',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      width: 'fit-content',
      position: 'relative',
      top: 80,
      border: '2px solid #8653FF',
    },
  },
  progressBarProps: {
    sx: {
      width: '125px',
      height: '8px',
      borderRadius: '10px',
      //   backgroundColor: index <= activeStep ? '#6b63ff' : '#444',
    },
  },

  progressBarCircleProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    border: '2px solid #6b63ff',
    // backgroundColor: index < activeStep ? '#6b63ff' : '#444',
    marginLeft: '6px',
    marginRight: '6px',
    color: '#fff', // Set text color to white for better visibility
  },

  collapseGridProps: {
    container: true,
    backgroundColor: '#27293d',
    padding: '10px',
    borderRadius: '8px',
    marginTop: '10px',
    width: '550px',
  },
  stepsGridProps: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    color: '#fff',
    cursor: 'pointer',
    // backgroundColor: index === activeStep ? '#33334d' : 'transparent',
    '&:hover': {
      backgroundColor: '#181A20',
    },
  },

  stepProps: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid #333',
    // backgroundColor: index === activeStep ? '#444' : '#555',
    // borderColor: index === activeStep ? '#6b63ff' : '#555',
    marginRight: '8px',
  },
};

export default styles;
