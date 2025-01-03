import {colors} from "theme/colors";
import {variables} from "theme/variables";
const useStyle = () => {
  return {
    mainContain: {
      padding: '15px 30px 0 30px',
    },
    gridSection: {
      marginLeft:'20px',
      marginTop: '20px',
      fontFamily:variables.$agendaRegular,
      fontSize:'14px',
    },
    iconGrid: {
      fontSize: '29px',
      color: colors.black,
      cursor: 'pointer',
      textAlign:'right'
    },
    iconHeight: {
      height: '50px',
    },
    switch: {
      width: 60,
      height: 34,
      padding: 0,
      margin:0,
     '&.MuiSwitch-root':{
      margin:0,
     },
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: '4px',   
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(25px)',
          color: colors.white,
          '& + .MuiSwitch-track': {
            backgroundColor:colors.lightBlue,
            opacity: 1,
            border: 0,
          },
        },
      },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 26,
        height: 26,
    },
    '& .MuiSwitch-track': {
        borderRadius: 34 / 2,
        backgroundColor: colors.lGrey,
        opacity: 1,
        transition:{
          duration: 500,
        },
       },
    },
    foodSap: {
      fontSize:'18px',
      margin:'15px 20px 5px 0px',
      fontFamily:variables.$agendaSemiBold
    },
    fContainer: {
      alignItems:'end',
      padding:'0 15px'
    },
    tCell: {
    width:'8px'
    },
    accordion: {
      width:'100%',
      boxShadow:'none'
    },
    iconPad: {
      padding:'0px'
    },
    cText: {
      width: '200px',
      padding: '0 0px 0px 10px'
    },
    sText: {
      width: '140px',
      overflow: 'hidden',
      textOverflow: 'ellipsis' ,
      padding: '0 0px 0px 10px'
    },
    iconTop: {
      marginTop: '40px'
    },

    rdio:{
      '&.Mui-checked': {
         color:'blue',
        },
      '&.MuiRadio-root:hover': {
        backgroundColor: colors.transparent,
      },
      '& .MuiSvgIcon-root':{
        height:'13px',
        width:'13px'
      },
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
    },
    tContainer:{
     'table>thead>tr>th': {
      borderBottom: `2px solid ${colors.dGrey}`,
      fontSize:'14px',
      fontFamily:variables.$agendaSemiBold,
      padding: '8px'
    },
    'table>tbody>tr>td': {
      fontSize:'14px',
      fontFamily:variables.$agendaSemiBold,
      padding: '7px 0px'
    },
    'table>tbody': {
      '& tr:last-child': {
          '& td':{
          borderBottom: 'none',
          }
        },
      }
    },
    aSummary: {
      flexDirection:'row-reverse',
      '&.MuiAccordionSummary-root.Mui-expanded': {
         minHeight: '0px',
         },
     '& .MuiAccordionSummary-content': {
        margin: '20px 0',
      },
    },

    boxContainer: {
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center',
      whiteSpace:'nowrap', 
      padding:'0px',
      overflow: 'hidden',
      textOverflow: 'ellipsis' 
    },
    sectorWidth: {
      width:'162px',
    },


    mainContainer: {
      display:'flex', 
      padding: '0px 12px', 
      borderRadius:'5px',
      height:'35px',
      width:'186px',
      justifyContent: 'center',
      margin:'20px 0px',
      background:colors.white,
    },

    fytext: {
      fontFamily:variables.$agendaSemiBold,
      display:'flex',
      fontSize:'14px',
      lineHeight:'28px',
      color: colors.fGrey,
    },
    fyComplete:{
      '& .MuiOutlinedInput-root':{
        height:'45px',
        width: 70,
        padding:'0',
        '& .MuiAutocomplete-endAdornment': {
          right: '1px',
        },
        '& .MuiAutocomplete-input': {
          padding: '0 10px',
        },  
      },
    }, 
    fyPeriodBox: {
      border: `1px solid ${colors.grey}`,
      padding:' 0 0 10px',
      margin: '20px',
    },
    pCategory:{
      '& .MuiOutlinedInput-root':{
        height:'48px',
        width: 190,
        whiteSpace:'nowrap',
        padding:'0',
        '& .MuiAutocomplete-input': {
          padding: '0 10px',
        },  
      }
    },
    outlined:{
      '& .MuiAutocomplete-input': {
          padding: '0 10px',
          border:'none',
          fontSize:'14px',
          fontFamily:variables.$agendaSemiBold,
        }, 
      '& .MuiFormLabel-root': {
          fontSize:'13px',
          fontFamily:variables.$agendaSemiBold,
          lineHeight:'normal'
        },
    
      '& .MuiOutlinedInput-notchedOutline': {
          outline:'none',
          border:`1px solid ${colors.grey}`,
        },
      '& + .MuiAutocomplete-popper .MuiAutocomplete-listbox .Mui-focused': {
           backgroundColor: colors.dBlue, 
        },
      
      '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
          fontFamily:variables.$agendaSemiBold,
          fontSize:'14px',
          justifyContent:'left',
          padding:'6px 4px 6px 8px'
        },
      },
    selectDate: {
      fontSize:'14px',
      fontFamily:variables.$agendaSemiBold,
      whiteSpace:'nowrap',
    },

    fSize:{
      fontSize:'16px',
    },
    mainBox: {
      position: 'relative',
      top: '15px',
    },
     endTop:{
      marginTop:'30px'
     },

    mTop: {
      marginTop:'25px'
    },
    startDate:{
      fontSize:'14px',
      fontFamily:variables.$agendaSemiBold,
      textAlign:'center',
    },
    error:{
      color: 'red',
    fontFamily: variables.$agendaSemiBold,
    fontSize: '12px', 
    textAlign:'center',
    lineHeight:1.2,
    padding:'0px 0px 0px 22px'
    },
    gridSelection: {
      position:'relative', 
      top:'25px', 
      left:'10px'
    },
    tField: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.grey,
        borderWidth:'1px' ,
      },
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.grey,
        borderWidth:'1px' ,
        
      },
    },
    tField2: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 0,
      },
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 0,
      },
    },
    iconBtn: {
      '& .MuiInputBase-root': {
        '&:hover': {
          borderColor:colors.grey
        }
      }
    },
    rReport: {
      backgroundColor:colors.lBlue,
      color:colors.white,
      '&:hover':{
        backgroundColor:colors.lBlue,
      }
    },
    cancel: {
      backgroundColor:colors.lightGrey,
      color:colors.black,
      '&:hover':{
        backgroundColor:colors.lightGrey,
      }
    },
    cReport: {
      width:'190px',
      marginTop:'60px',
      padding:'12px 0px',
      fontSize:'16px',
      fontFamily:variables.$agendaSemiBold,
    },
    goBtn: {
      backgroundColor:'#1f78b4', 
      padding :"8px 15px",
      '&:hover':{
        backgroundColor:'#1f78b4'
      }
    },
    commonBtn: {
      fontFamily:variables.$agendaSemiBold,
      fontSize:'18px',
      margin:'0 2px'
    },
    filterBtn:{
      padding :"8px",
      backgroundColor:colors.grey, 
      '&:hover':{
        backgroundColor:colors.grey
      }
    },
    sectorCategory: {
      '& .MuiOutlinedInput-root':{
        height:'48px',
        width: 160,
        whiteSpace:'nowrap',
        padding:'0',
        '& .MuiAutocomplete-input': {
           padding: '0 10px',
        },  
      },
      '& .MuiFormLabel-root': {
        top: '0px',
        fontSize:'13px',
        fontFamily:variables.$agendaSemiBold,
        lineHeight:'normal'
       }
    },
    cat: {
      '&.MuiFormControl-root':{
         width:'140px'
       }
    },
    mExpand: {
      fontSize:'40px',
      width:'40px',
      color:'black'
    },
    fWeight: {
      fontWeight:700
    },
    account: {
      textAlign: 'center',
      fontSize: '35px',
      fontFamily:variables.$agendaSemiBold,
      border: `1px solid ${colors.black}`,
      padding: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '200px',
      margin: '0 auto',
      color: colors.white,
      justifyContent: 'center',
      height: '50px',
      backgroundColor: colors.white,
      marginBottom: '40px',
      textTransform: 'capitalize',
      background: colors.accGreyBack,
      borderColor: colors.accGreyBack,
    },
    ulList: {
      '& li:last-child::after': {
        border: '0 none',
      },
      '& li:first-child::after': {
        borderRadius: '0',
      }
    },
    accountLine: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-48px',
        left: '50%',
        borderLeft: `1px solid ${colors.black}`,
        width: '0',
        height: '52px',
      },
    },
    campusLine: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-4px',
        left: '50%',
        borderLeft: `1px solid ${colors.black}`,
        height: '12px',
      }
    },
    display: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      '& ul': {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        width: '100%',
        flexWrap: 'wrap',
      },
    },
    campus: {
      display: 'block',
      fontSize: '18px',
      lineHeight: '20px',
      textTransform: 'capitalize',
      flexDirection: 'column',
      alignItems: 'baseline',
      justifyContent: 'center',
      textDecoration: 'none',
      fontFamily:variables.$agendaSemiBold,
    },
    cafe: {
      fontSize: '14px',
      marginBottom: '5px',
      lineHeight: '14px',
      textTransform: 'capitalize',
      fontFamily:variables.$agendaSemiBold,
    },
    cafeSection: {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-4px',
        left: '50%',
        borderTop: `1px solid ${colors.black}`,
        width: '100%',
      },
    },
    link: {
      textDecoration: 'none',
    },
    linkBox: {
      border: `1px solid ${colors.lightgray}`,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '200px',
      margin: '0 auto',
      color: 'black',
      justifyContent: 'center',
      height: '50px',
      backgroundColor: colors.white,
      textAlign: 'center',
    },
    textRotate: {
      transform: 'rotate(-90deg)',
      padding: '2px 4px',
      border: `1px solid ${colors.accGreyBack}`,
      borderRadius: '5px',
    },
    noWrap: {
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '100%',
      padding: '40px 5px',
      margin: '0 auto'
    },
    verticalList: {
      display: 'flex',
      flexDirection: 'column',
      height: '290px',
      paddingTop: '32px',
      justifyContent: 'space-between',
    },
    accBackground: {
      background: colors.accGreyBack,
      borderColor: colors.accGreyBack,
      color: colors.white
    },
    campusBackground: {
      background: colors.campusGreyBack,
      borderColor: colors.campusGreyBack,
      color: colors.white
    },
    cafeBackground: {
      background: colors.greyBg,
      borderColor: colors.greyBg,
    },
    missing: {
      background: colors.lightRed
    },
    cafeUl: {
      paddingLeft: '12px'
    }
  }
};

export default useStyle;
