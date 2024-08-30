const styles = {
  welcomeScreenGridProps: {
    container: true,
    item: true,
    width: "100%",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    margin: "100px 0px",
  },

  welcomeScreenTitleProps: {
    fontFamily: "Satoshi Bold",
    fontSize: "36px",
    color: (theme) => theme.palette.Common.White["100p"],
  },
  welcomeScreenSubtitleProps: {
    fontFamily: "Satoshi Bold",
    fontSize: "18px",
    color: (theme) => theme.palette.Common.White["100p"],
  },
  welcomeKaiTextProps: {
    fontFamily: "Satoshi Bold",
    fontSize: "36px",
    sx: {  },
    span: { color: (theme) => theme.palette.Background.purple }
  },
};

export default styles;
