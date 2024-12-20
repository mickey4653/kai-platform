const styles = {
  completeScreenGrid1Props: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px 0px 25px',
  },

  completeScreenGrid2Props: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'Center',
    alignItems: 'center',
  },

  completeScreenTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '32px',
    color: (theme) => theme.palette.Common.White['100p'],
  },

  completeScreenSubtitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    color: (theme) => theme.palette.Common.White['100p'],
  },

  completeScreenCheckMarkIconProps: {
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    border: 5,
    borderColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  completeScreenButtonProps: {
    sx: {
      width: '22%',
      backgroundColor: '#8653FF',
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
};

export default styles;
