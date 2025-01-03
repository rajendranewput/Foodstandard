import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return{
   fyMenu:{
   '& .MuiPaper-root':{
      border:`2px solid ${colors.black}`,
      margin:'5px 0px 0px 30px',
      "@media only screen and (max-width: 425px)": {        
          margin:'0px 0px 0px 30px',
        },
        "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
          margin:'2px 0px 0px 22px',
        },
      ul:{
        padding:'0px',
        lineHeight:'0.2px',
        "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
          width:'25px'
          },
        li:{
        lineHeight:1.4,
          padding:'0px 10px',
          fontFamily:variables.$agendaMediumUltraCondensed, 
          fontSize:'27px',
          "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
            fontSize:'10px',
            padding:'0px 5px',
          },
        }
      }
    }
   },
   iconBtn:{
    padding:'8px 8px 8px 0px',
    "@media only screen and (min-width: 425px) and (max-width: 1024px)": {
        padding:'4px 8px 8px 0px',
      },
    "&.MuiButtonBase-root:hover": {
        bgcolor: colors.transparent,
      },
    svg:{
      fontSize:'14px',
      color:colors.black,
      "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
        fontSize:'10px',
      },
    }
   },
   dropText:{
    fontFamily:variables.$agendaMediumUltraCondensed,
    fontSize:'29px',
    "@media only screen and (min-width: 767px) and (max-width: 1024px)": {
      fontSize:'10px',
    }
   }, 
   mainContainer:{
    display:'flex', 
    padding: '0px 12px', 
    borderRadius:'14px',
      "@media only screen and (min-width: 767px) and (max-width: 1024)": {
        marginTop:'10px'
      }
      },
      selected:{
        border:`1px solid ${colors.greyLg}`,
        background:colors.white,
      },
      fyLeft:{
        marginLeft:'0px',
        "@media only screen and (max-width: 1920px)": {
          marginLeft:'5px',
        },
        "@media only screen and (max-width: 1024px)": {
          marginLeft:'2px',
        }
      },
      iBtn:{
        margin:'0px 10px 0px 0px'
      },
    fyRight:{
      marginRight:'10px'
    },
    cirleIcon:{
      marginLeft:'15px'
    },
    pLeft:{
      marginLeft:'10px'
    },
    leftArrow:{
      fontSize: '19px',
      fontFamily:variables.$agendaMediumUltraCondensed,
      padding:'0px 10px',
      lineHeight:'0px',
      color:colors.black,
      "@media only screen and (min-width: 767px) and (max-width: 1024px)":{
        fontSize: '10px',
      }
    }
  }
}
export default useStyle;