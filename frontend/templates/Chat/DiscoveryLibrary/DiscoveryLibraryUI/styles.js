const styles = {
  discoveryContainerGrid: {
    container: true,
    item: true,
    mobileSmall: true,
    // rowGap: { laptop: 5, desktop: 4 },
    // width:'auto',
    // justifyContent: "space-between",
  },

  discoveryGridProps: {
    container: true,
    item: true,
    mobileSmall: true,
    rowGap: { laptop: 2, desktop: 4 },
    // px: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
    flexDirection: 'column',
    //    sx: {
    //   background: 'rgba(24, 26, 32, 0.05)',
    transform: {
      laptop: 'scale(0.5)',
      desktop: 'scale(0.7)',
      desktopMedium: 'scale(1.0)',
    },
    // },
    width: { desktopMedium: '37%', desktop: '37.5%', laptop: '50%' },

    // height: { desktopMedium: '34.5%', desktop: '34.5%', laptop: '34.5%' , mobile: '36.5%' },

    // height: '100%',
    // ml: { laptop: -5, desktop: -4, desktopMedium: -28 },
    // mt: { laptop: -10.5, desktop: -6, desktopMedium: -5  },
    sx: (theme) => ({
      borderRadius: '15px',
      borderColor: '#B791FF',
    }),
  },
  discoveryPanelProps: {
    sx: (theme) => ({
      px: 2,
      py: 2,
      background: theme.palette.Common.Black['100p'],
      borderRadius: '16px 16px 0 0',
      width: { desktop: '350px', mobile: '338px', mobileSmall: '330px' },
    }),
  },

  unionIconGridProps: {
    container: true,
    alignItems: 'center',
    sx: (theme) => ({
      width: { desktop: '350px', mobile: '338px', mobileSmall: '330px' },
      mt: { laptop: -1, desktop: -3 },
      px: 2,
      py: 2,
    }),
  },

  unionIconTextProps: {
    sx: {
      mb: 1,
      color: '#9E94A5',
    },
  },
  discoveryIconProps: {
    sx: {
      fontSize: '24px',
    },
  },
  discoveryPanelTextProps: {
    sx: (theme) => ({
      mt: 1,
      mb: 1,
      color: theme.palette.Common.White['100p'],
    }),
  },

  avatarGridProps: {
    container: true,
    item: true,
    // display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // position: 'relative',
    sx: (theme) => ({
      ml: 2,
      px: 2,
      py: 2,
      // mt:1,
      mt: { laptop: 1, desktop: -1 },
      background: theme.palette.Background.gradient.purple,
      borderRadius: '16px',
      width: { desktop: '320px', mobile: '308px', mobileSmall: '130px' },
      height: { desktop: '190px', mobile: '178px', mobileSmall: '170px' },
    }),
  },

  avatarTextGridProps: {
    // sx: (theme)=>({
    // }),
  },
  avatarHeaderTextProps: {
    // fontSize:{ laptop: '14px', desktop: '16px' },
    fontSize: '18px',
    fontWeight: 'bold',
  },

  avatarSubTextProps: {
    // fontSize:{ laptop: '8px', desktop: '9.5px' },
    fontSize: '11px',
  },
  avatarTextBoxProps: {
    item: true,
    alignItems: 'center',
    sx: (theme) => ({
      background: theme.palette.Background.gradient.grey,
      borderRadius: '5px',
      padding: '10px 15px 10px 25px',
      color: theme.palette.Common.White['100p'],
    }),
    right: { laptop: 240, desktop: 241 },
    top: { laptop: 40, desktop: 44 },
    position: 'relative',
    zIndex: 2,
    width: { laptop: '280px', desktop: '300px' },
    height: { laptop: '70px', desktop: '80px' },
  },

  avatarImageGridProps: {
    item: true,
    sx: {
      position: 'relative',
      // zIndex: 1,
      top: { laptop: -14, desktop: -17 },
      right: { laptop: 3, desktop: -3 },
      svg: {
        transform: { laptop: 'scale(1.2)', desktop: 'scale(1.30)' },
      },
    },
  },
  starGroupIconGridProps: {
    item: true,
    sx: {
      position: 'relative',
      top: { laptop: -40, desktop: -44 },
      left: { laptop: 50, desktop: 60 },
      // svg:{backgroundColor: '#B791FF',},
    },
  },

  avatarImageProps: {
    sx: {},
  },

  starGroupIconProps: {
    // ml:-15,
  },
  cardGridProps: {
    container: true,
    display: 'flex',
    alignItems: 'center',
    spacing: 1,
    // backgroundColor: '#B791FF',
    width: { desktop: '320px', mobile: '308px', mobileSmall: '130px' },
    height: { laptop: '280px', desktop: '290px' },
    overflow: 'scroll',
    sx: {
      position: 'relative',
      top: { laptop: -5, desktop: -20, desktopMedium: -20 },
      // laptop: -10.5, desktop: -4, desktopMedium: -3
      right: { laptop: -25, desktop: -25, desktopMedium: -20 },
      pb: 1,
    },
  },

  cardProps: {
    sx: {
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      },
      width: { laptop: '142px', desktop: '148px' },
      height: { laptop: '200px', desktop: '200px' },
    },
  },
  cardTitleProps: {
    sx: {
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
    },
  },
  cardDescriptionProps: {
    sx: (theme) => ({
      fontSize: '12px',
      color: theme.palette.Greyscale[400],
    }),
  },

  backImageProps: {
    width: '100%', // Adjust width as needed
    height: 'auto', // Adjust height as needed
  },

  chatBoxGridProps: {
    container: true,
    item: true,
    // display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chatBoxProps: {
    width: {
      laptop: '59%',
      desktop: '64%',
      desktopMedium: '70%',
      desktopLarge: '75%',
    },
    sx: {
      position: 'relative',
      top: { laptop: 80, desktop: 70, desktopMedium: 60 },
      left: { laptop: 340, desktop: 350, desktopMedium: 350 },
    },
  },

  CenterChatContentGridProps: {
    sx: {
      overflow: 'scroll',
      height: { laptop: '500px', desktop: '700px' },
      width: {
        laptop: '50%',
        desktop: '60%',
        desktopMedium: '65%',
        desktopLarge: '72%',
      },
      // position: "relative",
      // top: { laptop: 280, desktop: 0 },
      left: { laptop: 200, desktop: 200 },
    },
  },
};
export default styles;
