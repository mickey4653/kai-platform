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
      //   backgroundColor: "#27293d",
      backgroundColor: '#181A20',
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
    width: '125px',
    height: '8px',
    borderRadius: '10px',
  },

  progressBarCircleProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '23px',
    height: '23px',
    borderRadius: '50%',
    border: '2px solid #6b63ff',
    marginLeft: '6px',
    marginRight: '6px',
    color: '#fff', // Set text color to white for better visibility
  },

  collapseGridProps: {
    container: true,
    flexDirection: 'column',
    // backgroundColor: "#27293d",
    backgroundColor: 'transparent',
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
  },

  stepProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '23px',
    height: '23px',
    borderRadius: '50%',
    border: '2px solid #333',
    marginRight: '8px',
  },

  tickProps: {},
};

export default styles;
