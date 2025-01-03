import {colors} from "theme/colors";
import {variables} from "theme/variables";
const useStyle = () => {
  return {
    navBtn: {
      fontFamily: variables.$agendaSemiBoldUltraCondensed,
      fontSize: "36px",
      whiteSpace: "break-spaces",
      textAlign: "center",
      margin: "0px",
      lineHeight: "0.90",
      paddingBottom: "0px",
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        fontSize: "15px",
      },
    },

    dropDown: {
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        marginTop: "10px",
      },
    },
    contentSize: {
      fontSize: "65px",
      "@media only screen and(min-width: 767px) and (max-width: 1024px)": {
        fontSize: "30px",
      },
    },
    iconHeight: {
      height: "50px",
    },
    dWidth: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: 240,
      },
    },
    fSize: {
      fontSize: "12px",
    },
    arrowCircle: {
      height: "35px",
      fontSize: "40px",
      width: "40px",
      marginTop: "10px",
      cursor: "pointer",
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        height: "15px",
        fontSize: "15px",
        width:"20px"
      },
    },

    pDrawer: {
      mr: 2,
      width: "10%",
      justifyContent: "normal",
    },
    dToggle: {
      textAlign: "center",
      fontFamily: variables.$agendaSemiBoldUltraCondensed,
      fontSize: "36px",
    },
    toolbar: {
      "@media only screen and (max-width: 465px)": {
        height: "70px",
        width: "400px",
      },
    },
    ltem: {
      "& .MuiTypography-root": {
        fontFamily: variables.$agendaSemiBoldUltraCondensed,
        fontSize: "26px",
      },
    },
    navBox: {
      backgroundColor: colors.white,
      border: `1px solid ${colors.lightGray}`,
      borderRadius: "4px",
    },
    textHead: {
      fontFamily: variables.$agendaSemiBoldUltraCondensed,
      fontSize: "35px",
    },
    iconGrid: {
      fontSize: "29px",
      color: colors.black,
      cursor: "pointer",
      "@media only screen and (max-width: 425px)": {
        position: "fixed",
        right: "6%",
        fontSize: "15px",
      },
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        fontSize: "15px",
      },
    },
    textContent: {
      lineHeight: "revert",
    },
    navItems: {
      width: "48%",
      justifyContent: "space-around",
      marginTop: "30px",
      "& .MuiButton-root:hover": {
        backgroundColor: "transparent",
      },
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        width: "46%",
      },
    },
    model: {
      "& > .MuiBackdrop-root": {
        backgroundColor: colors.transparent,
      },
    },
    mBox: {
      position: "absolute",
      top: "1%",
      right: "1%",
      width: 260,
      backgroundColor: colors.lightGray,
      padding: "10px 10px 10px 30px",
      borderRadius: "20px",
      outline: "none",
      "@media only screen and (max-width: 1024px)": {
        right: "5%",
      },
    },
    innerBox: {
      display: "flex",
      justifyContent: "flex-end",
    },
    iconBtn: {
      padding: "0px",
      color: colors.black,
    },
    list: {
      paddingTop: "0px",
    },
    lItem: {
      padding: 0,
      listStyleType: "disc",
      display: "list-item",
    },
    lText: {
      padding: "0px 0px",
      "& .MuiTypography-root": {
        fontFamily: variables.$agendaRegular,
        color: colors.black,
      },
    },
    lineItems: {
      display: "flex",
      justifyContent: "center",
    },
    fillLines: {
      height: "12px",
      width: "3px",
      margin: "0px 0px 0px 3px",
      "@media only screen and (min-width: 768px) and  (max-width: 1024px)": {
        height: "12px",
        width: "1.5px",
        margin: "0px 0px 5px 1px",
      },
    },
    toolBox: {
      display: "flex",
    },
    appetit: {
      fontFamily: variables.$agendaSemiBoldUltraCondensed,
      fontSize: "65px",
      lineHeight: "50px",
      marginRight: "10px",
      marginTop: "5px",
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        fontSize: "30px",
        lineHeight: "30px",
        whiteSpace: "nowrap",
      },
    },
    appBar: {
      background: colors.greyBg,
    },
    mainBox: {
      maxWidth: "700px",
      margin: "30px 0px 0px 50px",
      color: colors.black,
      flexGrow: 1,
      "@media only screen and (max-width: 426px)": {
        display: "contents",
        margin: "30px 0px 0px 70px",
      },
      "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
        margin: "30px 0px 0px 0px",
      },
    },
    menuIcon: {
      color: colors.black,
      fontSize: "35px",
    },
    pdfBtn: {
      "&.MuiButton-root:hover": {
        backgroundColor: colors.transparent,
      },
      "& .MuiTouchRipple-root": {
        display: "none",
      },
      "@media only screen and (max-width: 767px)": {
        display: "none",
      }
    },
  };
};
export default useStyle;
