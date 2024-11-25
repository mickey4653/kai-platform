const styles = {
  actionButtonGridProps: {
    container: true,
    item: true,
    justifyContent: 'center',
  },

  actionButtonProps: {
    variant: 'outlined',
    sx: (theme) => ({
      borderRadius: '5px',
      height: 'auto',
      border: `2px solid ${theme.palette.Background.purple3}`,
      background: theme.palette.Common.White['100p'],
      color: theme.palette.Background.purple3,
      textTransform: 'none',
      ':hover': {
        backgroundColor: theme.palette.Background.gradient.basicPurple,
        borderColor: theme.palette.Background.purple3,
        color: theme.palette.Common.White['100p'],
      },
    }),
  },

  iconButtonProps: {
    sx: {
      padding: '8px',
    },
  },
  buttonTextProps: {
    sx: {
      padding: '8px',
    },
  },
  menuListProps: {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      padding: 1,
      margin: '15px',
    },
  },
  popperProps: {
    sx: (theme) => ({}),
  },
  paperProps: {
    sx: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
    },
  },
  menuItemProps: (disabled) => ({
    sx: (theme) => ({
      borderRadius: '18px',
      margin: '0 5px',

      borderColor: theme.palette.Background.purple3,
      background: theme.palette.Background.purple3,
      color: theme.palette.Common.White['100p'],
      textTransform: 'none',
      ':hover': {
        backgroundColor: disabled ? 'none' : '#B791FF',
        borderColor: disabled
          ? theme.palette.Background.purple3
          : theme.palette.Background.purple,
        color: disabled
          ? theme.palette.Common.White['60p']
          : theme.palette.Common.White['100p'],
      },
      padding: '5px 20px',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',

      fontSize: { laptop: '13px', desktop: '12px', desktopMedium: '14px' },
      pl: { laptop: 1, desktop: 1, desktopMedium: 1 },
      pr: { laptop: 1, desktop: 1, desktopMedium: 1 },
    }),
  }),
};

export default styles;
