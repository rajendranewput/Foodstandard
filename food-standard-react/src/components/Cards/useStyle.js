import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    mainContainer: {
      "&.MuiContainer-root": {
        padding: "0",
        "@media only screen and (min-width: 767px) and (max-width: 1310px)": {
          paddingLeft:'70px'
        },
      },
    },
    gContainer: {
      margin: "50px 0 0px 40px",
      "&.MuiGrid-root": {
          "& .MuiGrid-item": {
            paddingLeft:'12px',
            marginBottom:'10px'
        },
      },
    },
    selected: {
      backgroundColor: colors.greyBg,
    },

    cardMedia: {
      fontSize: "84px",
      lineHeight: "84px",
      color: "rgb(0, 0, 0)",
      textAlign: "center",
      "@media only screen and (max-width: 767px)": {
        fontSize: "80px",
        lineHeight: "80px",
      },
      "@media only screen and (min-width: 1800px)": {
        fontSize: "104px",
        lineHeight: "104px",
      },
    },
    cardContainer: {
      cursor: "pointer",
      border: `5px solid ${colors.greyBg}`,
      boxShadow: "none",
      borderRadius: "0",
      height:'100%',
      maxWidth: 240,
      padding: "10px",
    },
    cardLink: {
      cursor: "pointer",
      display: "block",
      fontFamily: variables.$agendaSemiBoldUltraCondensed,
      fontSize: "36px",
      lineHeight: "36px",
      textAlign: "center",
      textDecoration: "none",
      "@media only screen and (max-width: 767px)": {
        fontSize: "26px",
        lineHeight: "26px",
      },
      "@media only screen and (min-width: 768px) and (max-width: 1024px)": {
        fontSize: "13px",
        lineHeight: "15px",
      },
    },
    cardSelected: {
      fontSize: "44px",
      margin: "0 auto",
      padding: "20px 10px 0px",
      "@media only screen and (max-width: 1800px)": {
        width: "70%",
      },
      "@media only screen and (min-width: 768px) and (max-width: 1024px)": {
        fontSize: "18px",
        lineHeight: "20px",
      },
      
      "@media only screen and (max-width: 767px)": {
        fontSize: "24px",
        lineHeight: "22px",
        
      },
    },
    cardContent: {
      "&.MuiCardContent-root": {
        padding: "0px",
      },
    },
  };
};

export default useStyle;