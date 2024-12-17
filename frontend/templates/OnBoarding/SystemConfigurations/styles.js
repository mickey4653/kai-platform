const styles = {
  /*  
  <Grid {...styles.SystemConfigurationsTitle}></Grid>
  <Grid {...styles.SystemConfigurationsSubtitle}></Grid>
  <Grid {...styles.SystemConfigurationsSubtitle}></Grid>
  <Grid {...styles.SystemConfigurationsSettings}> </Grid>
  <Grid {...styles.SystemConfigurationsTheme}> </Grid>
  SystemConfigurationsFinishButton
  */
  welcomeScreenGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'Center',
    alignItems: 'center',
    margin: '100px 100px',
  },

  SystemConfigurationsTitle: {
    fontFamily: 'Satoshi Bold',
    fontWeight: '100',
    fontSize: '32px',
    color: (theme) => theme.palette.Common.White['100p'],
    textAlign: 'center',
  },

  SystemConfigurationsSubtitle: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    fontWeight: '100',
    color: (theme) => theme.palette.Common.White['100p'],
  },
  SystemConfigurationsSettings: {
    fontFamily: 'Satoshi Bold',
    fontSize: '20px',
    color: (theme) => theme.palette.Common.White['100p'],
  },
  welcomeKaiTextProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
    // sx: {},
    // span: { color: (theme) => theme.palette.Background.purple },
  },

  SystemConfigurationsFinishButton: {
    sx: {
      width: '100%',
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
