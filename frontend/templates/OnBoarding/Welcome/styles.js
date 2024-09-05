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
};

export default styles;
