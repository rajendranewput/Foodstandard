import {colors} from "theme/colors";
import {variables} from "theme/variables";
const useStyle = () => {
  return {
    containerDescription: {
      "&.MuiContainer-root": {
        maxWidth: "1920px",
        width: "100%",
        padding: "0px",
        margin: "0 auto",
      },
    },
    custom: {
      "@media only screen and (max-width: 767px)": {
        background: colors.grey,
      },
    },
    containerWrapper: {
      padding: "0px 25px",
      "&.MuiGrid-root": {
        marginTop: "10px",
        "&:first-of-type": {
          marginTop: 0,
        },
      },
    },
    blackBox: {
      alignItems: "center",
      background: colors.black,
      color: colors.white,
      display: "flex",
      height: "100%",
      padding: "20px",
      textAlign: "center",
      boxShadow: "none",
      borderRadius: "0px",
      fontSize: "25px",
      "& .MuiTypography-root": {
        "@media only screen and (max-width: 767px)": {
          fontSize: "25px",
        },
        "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
          fontSize: "10px",
        },
      },
      "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
        padding: "0px",
      },
    },
    greyBox: {
      background: colors.greyBg,
      color: colors.black,
      height: "100%",
      padding: "20px",
      fontFamily: variables.$agendaSemiBold,
      boxShadow: "none",
      borderRadius: "0px",

      "@media only screen and (min-width: 1800px)": {
        maxWidth: "1390px",
      },
    },
    paraBox: {
      fontFamily: variables.$agendaRegularCondensedItalic,
      fontSize: "27px",
      lineHeight: "38px",
      paddingTop: "70px",
      textAlign: "center",

      "@media only screen and (min-width: 760px) and (max-width: 1024px)": {
        fontSize: "13px",
        lineHeight: "15px",
      },
      br: {
        "@media only screen and (max-width: 767px)": {
          display: "none",
        },
      },
      width: "100%",

      "@media only screen and (max-width: 760px)": {
        fontSize: "22px",
        lineHeight: "20px",
        textAlign: "left",
        padding: "70px 10px 20px",
      },
    },
    gContainer: {
      "&.MuiGrid-root": {
        "&.MuiGrid-item": {
          paddingTop: "11px",
        },
      },
    },
    mContainer: {
      "&.MuiContainer-root": {
        maxWidth: "1920px",
        width: "100%",
        padding: "0px 45px",
        margin: "0 auto",
      },
      "@media only screen and (max-width: 767px)": {
        "&.MuiContainer-root": {
          width: "100%",
          padding: "10px",
        },
      },
    },
  };
};

export default useStyle;
