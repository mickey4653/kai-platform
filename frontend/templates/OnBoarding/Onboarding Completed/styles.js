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

  completeScreenMainGridProps: {
    backgroundColor: {
      '#4A426A': '100%',
      '#201E2B': '100%',
      '#000000': '100%',
    },
  },

  completeScreenTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
    color: (theme) => theme.palette.Common.White['100p'],
  },

  completeScreenSubtitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    color: (theme) => theme.palette.Common.White['100p'],
  },

  completedKaiTextProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
    // sx: {},
    // span: { color: (theme) => theme.palette.Background.purple },
    color: (theme) => theme.palette.Common.White['100p'],
  },

  completeScreenButtonProps: {
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
};

export default styles;
