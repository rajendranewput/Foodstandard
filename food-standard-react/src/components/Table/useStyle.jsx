import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    iconBox: {
      bottom: '6px',
      position: 'absolute',
      right: '8px',
      textAlign: 'right',
      width: '100%',
    },
    icons: {
      backgroundColor: colors.orangeIcon,
      borderRadius: '50%',
      color: colors.white,
      cursor: 'pointer',
      fontFamily: variables.$agendaSemiBold,
      fontSize: '11px',
      justifyContent: 'center',
      padding: '1px 4px',
      margin: '0 3px',
      textAlign: 'center'
    },
    
    infoIcon: {
      bottom: '0',
      color: 'grey',
      cursor: 'pointer',
      fontSize: '18px',
      margin: '10px',
      position: 'absolute',
      right: '0',
    },
    mobileHide: {
      '@media (max-width: 767px)': {
        display: 'none',
      }
    },
    mobileShow: {
      display: 'none',
      '@media (max-width: 767px)': {
        display: 'block',
      }
    },
    model:{
      "& > .MuiBackdrop-root" : {
          backgroundColor:colors.transparent
        }
  },
  modalBox:{
    background: colors.white,
    margin: '0 auto',
    width: '100%',
    maxWidth: '75%',
   
  },
  tbody:{
    "&:hover": {
      backgroundColor: '#f6f6f6',  
    },td:{
     padding: '8px', 
     height: '33px',
    }
  },
  tData:{
    td:{
    textAlign:'center',
    }
  },
  tRow:{
    th:{
      fontFamily:variables.$agendaSemiBold,
    color:colors.black,
    fontSize:'14px', 
     padding:'0 16px',
     textAlign:'center',
    }
  },
  tCommon:{
    th:{
      fontFamily:variables.$agendaSemiBold,
    color:colors.black,
    fontSize:'14px', 
     padding:'0 16px',
    }
  },
  tName:{
    fontFamily:variables.$agendaSemiBold,
    color:colors.black,
    fontSize:'14px', 
  },
  theader:{
    '& tr > th': {
      borderBottom:`1px solid ${colors.black}`,
      color: colors.black,
      fontWeight: '600',
    },
  },
  MuiTableRow: {
    '& tr:last-child': {
      '& td':{
      borderBottom: `1px solid ${colors.black}`,
      }
    },
  },
  tLink:{
    color: colors.skyBlue,
    "&:hover":{
        color: colors.skyBlue,
      textDecoration: 'underline',
    }
  },
  tTotal:{
    color: colors.skyBlue,
    textDecoration: 'none',
  },
  tCell:{
    textAlign:'center'
  },
  showEnteries:{
    fontFamily:variables.$agendaSemiBold,
    fontSize:'14px', 
   },
   previous:{
    fontFamily:variables.$agendaSemiBold,
      fontSize:'14px', 
      display: 'inline-block',
      minWidth: '1.5em',
      padding: '7px 15px',
      marginRight: '4px', 
   },
    previousHover:{
      color: colors.prevHover,
      "&:hover":{
      color: colors.white,
background: 'linear-gradient(to bottom, #585858 0%, #111 100%)',
    }
    },

   pdf:{
    display: 'flex', 
    flexDirection: 'column',  
    marginLeft: '10px' ,
  },
  modalBtn:{
    fontFamily:variables.$agendaSemiBold,
    color:colors.black,
    fontSize:'12px', 
    border:`1px solid ${colors.darkGrey}`,
          background:colors.greyShade,
    margin:'0px',
    minWidth:'52px',
    padding:'3px 0px',
    borderRadius: '2px' 
  },
  inputLabel:{
    fontFamily:variables.$agendaSemiBold,
    color:colors.black,
    fontSize:'14px', 
    marginRight:'5px'
  },

  appetit:{
    fontFamily:variables.$agendaMediumUltraCondensed,
    fontSize:'35px',
    color:colors.black,
    display:'flex',
    justifyContent:'center',
    lineHeight:0.5,
  },
  modalFy:{
    display:'flex',
    justifyContent:'center',
  },
  fyText:{
    fontFamily:variables.$agendaMediumUltraCondensed,
    fontSize:'28px'
  },
  modalText:{
    fontFamily:variables.$agendaMediumUltraCondensed,
    fontSize:'60px',
    color:colors.black,
    width:'95%',
    display:'flex',
    justifyContent:'center',
  },
  tContainer:{
    maxHeight: 240,
     padding: '0 30px'
  },
  sBox:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  sInput:{
    display: "flex", 
    alignItems: "center" 
  },
  inputBase:{
    border: `2px solid ${colors.greyLight}`,
    backgroundColor: colors.white,
    height: "22px",
    width: "154px",
  },
  entriesBox:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    marginTop: "10px",
  },
  cPage:{
    color: colors.prevHover,
    border: `1px solid ${colors.bColor}`,
    padding: "5px 15px",
    backgroundColor: "grey",
    marginRight:'4px'
  },
  dFlex:{
    display:'flex'
  },
  arrowDrop:{
    '&.MuiSvgIcon-root':{
      lineHeight:'0.5px', 
      position:'relative', 
      top:'8px'
    }
  }
  };
};
  
export default useStyle;