import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    plateImage: {
      fontSize: '500px',
      margin: '0',
      '@media (max-width: 767px)': {
        fontSize: '310px',
      }
    },
    wrapBox: {
      flexWrap: 'nowrap',
      '@media (max-width: 767px)': {
        flexDirection: 'column',
        width: '100%',
      }
    },
    list: {
      margin: '0 30px',
      padding: '0',
      '.MuiTypography-root': {
        fontFamily: variables.$agendaItalic,
        fontSize: '18px',
        lineHeight: '36px',
      }
    },
    listPadding: {
      padding: '22% 0 30px',
      '@media (max-width: 767px)': {
        padding: '20px 0 30px'
      }
    },
    plateDescPadding: {
      padding: '0 25px'
    },
    plateDesc: {
      fontFamily: variables.$agendaItalic,
      lineHeight: '25px',
      fontSize: '18px',
      textAlign: 'left'
    },
    recommendText: {
      fontSize: '14px',
      padding: '25px'
    },
    containerBlack: {
      marginRight: '.47%',
      width: '30%',
      '@media (max-width: 767px)': {
        width: '100%'
      }
    },
    wholeContainer: {
      width: '27.53%',
    },
    cor: {
      width: '69.53%',
    },
    border: {
      border: '3px solid transparent',
      padding: '2px',
      width: '100%',
    },
    chartBox: {
      width: '40%',
      flexWrap: 'nowrap'
    },
    borderHoverBox: {
      height: '212px',
    },
    hoverBorder: {
      borderColor: colors.black,
    },
    sunBurstChart: {
      border: `5px solid ${colors.greyBg}`,
      width: '100%',
      justifyContent: 'center'
    },
    flexDirection: {
      flexDirection: 'column',
      width: '60%'
    },
    heatlhyContainer: {
      width: '85%'
    },
    whiteStrip: {
      background: colors.white,
      minWidth: '10px',
      maxWidth: '10px',
      height: '206px',
      position: 'relative',
      left: '-10.2px',
      top: '-2px',
    },
    marginTop: {
      marginTop: '10px'
    },
    gredientBar: {
      backgroundImage: 'linear-gradient(to right,#fa6f67,#63bf87)',
      color: colors.white,
      fontSize: '14px',
      fontFamily: variables.$agendaSemiBold,
      height: '35px',
      margin: '0 auto 15px',
      padding: '9px 12px',
      width: '90%',
    },
    serve: {
      display: 'inline'
    },
    serveMore: {
      float: 'right'
    },
    serveLess: {
      float: 'left'
    },
    wholeFood: {
      width: '71%',
      padding: '2px',
      border: '3px solid transparent',
      flexWrap: 'nowrap',
      marginTop: '10px'
    },
    wholeBlack: {
      width: '27.75%'
    },
    avgBoxs: {
      flexWrap: 'nowrap',
      width: '95%',
    },
    avgBox: {
      width: '33.66%',
    },
    proteinBox: { 
      width: '100%',
      justifyContent: 'center',
      border: `5px solid ${colors.greyBg}`,
      margin: '8px 0 0 0',
      minHeight: '300px',
    },
    halfWidth: {
      width: '50%'
    },
    plate: {
      height: '260px',
      top: '182px',
      position: 'absolute',
      width: '260px',
      '@media (max-width: 767px)': {
        height: '150px',
        top: '330px',
        width: '150px'
      }
    },
    innerPlate: {
      width: '80%',
      height: '80%',
      top: '98%',
      left: '48%',
      position: 'absolute',
      '@media (max-width: 767px)': {
        top: '39%',
        left: '50%',
      },
      '@media (min-width: 1920px)': {
        top: '128%',
        left: '50%',
      }
    },
    plateItem: {
      border: `2px solid ${colors.black}`,
      position: 'absolute',
      background: 'rgb(225, 225, 225)',
      borderRadius: '50%',
      overflow: 'hidden',
      top: '-20px'
    },
    produce: {
      width: '180px',
      height: '180px',
      top: '4%',
      '@media (max-width: 767px)': {
        height: '105px',
        width: '105px'
      }
    },
    ProduceCenter: {
      top: '16px',
      left: '16px',
      width: '144px',
      height: '144px',
      background: 'rgb(255, 255, 255)',
      '@media (max-width: 767px)': {
        top: '12px',
        left: '12px',
        width: '77px',
        height: '77px',
      }
    },
    wholeGrain: {
      width: '105px',
      height: '105px',
      top: '7%',
      left: '70%',
      '@media (max-width: 767px)': {
        height: '60px',
        width: '60px'
      }
    },
    wholeCenter: {
      top: '10px',
      left: '10px',
      width: '81px',
      height: '81px',
      background: 'rgb(255, 255, 255)',
      '@media (max-width: 767px)': {
        top: '8px',
        left: '8px',
        width: '40px',
        height: '40px',
      }
    },
    dairy: {
      width: '105px',
      height: '105px',
      left: '83%',
      top: '55%',
      '@media (max-width: 767px)': {
        height: '60px',
        width: '60px'
      }
    },
    plantProtien: {
      width: '85px',
      height: '85px',
      left: '8%',
      top: '75%',
      '@media (max-width: 767px)': {
        height: '50px',
        width: '50px'
      }
    },
    plantCenter: {
      top: '8px',
      left: '8px',
      width: '65px',
      height: '65px',
      background: 'rgb(255, 255, 255)',
      '@media (max-width: 767px)': {
        top: '6px',
        left: '6px',
        width: '34px',
        height: '34px',
      }
    },
    animalProtien: {
      width: '75px',
      height: '75px',
      left: '48%',
      top: '73%',
      '@media (max-width: 767px)': {
        height: '45px',
        width: '45px'
      }
    },
    animalCenter: {
      top: '8px',
      left: '8px',
      width: '55px',
      height: '55px',
      background: 'rgb(255, 255, 255)',
      '@media (max-width: 767px)': {
        top: '6px',
        left: '6px',
        width: '29px',
        height: '29px',
      }
    },
    sugar: {
      width: '60px',
      height: '60px',
      left: '48%',
      top: '110%',
      '@media (max-width: 767px)': {
        height: '40px',
        width: '40px'
      }
    },
    sugarCenter: {
      top: '6px',
      left: '6px',
      width: '44px',
      height: '44px',
      background: 'rgb(255, 255, 255)',
      '@media (max-width: 767px)': {
        top: '5px',
        left: '5px',
        width: '26px',
        height: '26px',
      }
    },
    plantOil: {
      width: '60px',
      height: '60px',
      left: '78%',
      top: '103%',
      '@media (max-width: 767px)': {
        height: '40px',
        width: '40px'
      }
    },
    slice: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      
    },
    chartCenter: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgb(255, 255, 255)'
    },
    plateText: {
      display: 'flex',
      textAlign: 'center',
      color: colors.black,
      fontFamily: variables.$agendaSemiBold,
      alignItems: 'center',
      justifyContent: 'center',
      height: 'inherit',
      '@media (max-width: 767px)': {
        display: 'none'
      }
      
    },
    mobilePlateText: {
      display: 'none',
      '@media (max-width: 767px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '15px',
        fontSize: '15px'
      }
    },
    mobilePltIcon: {
      paddingTop: '8px !important',
    },
    produceMobile: {
      fontSize: '40px !important'
    },
    plateContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    wheatText: {
      fontSize: '8px',
    },
    wheatFont: {
      fontSize: '12px',
    },
    animalText: {
      fontSize: '6px',
    },
    animalFont: {
      fontSize: '10px',
    },
    sugarText: {
      fontSize: '5px',
    },
    sugarFont: {
      fontSize: '8px',
    },
    tableRow: {
      alignItems: 'center',
      borderBottom: `1px solid ${colors.greyBg}`,
      display: 'flex',
      fontFamily: variables.$agendaSemiBold,
      justifyContent: 'space-around',
      margin: '0 10px',
    },
    // all one two three.. removed after API implimentation
    one: {
      clip: 'rect(0px, 90px, 180px, 0px)',
      transform: 'rotate(90deg)',
      background: `linear-gradient(to right, ${colors.yellow} 60%, ${colors.plateGrey} 40%)`,
    },
    second: {
      background: `linear-gradient(112deg, ${colors.plateGrey} 70%, ${colors.yellow} 15%)`,
    },
    third: {
      background: `linear-gradient(112deg, ${colors.green} 100%, ${colors.yellow} 0%)`,
    },
    fourth: {
      background: `linear-gradient(112deg,${colors.plateGrey} 40%, ${colors.yellow} 60%)`,
    },
    fifth:{
      background: `linear-gradient(112deg, ${colors.plateGrey} 100%, ${colors.green} 0%)`,
    },
    dIcon:{
      color: colors.greyLg,
      float: 'right'
    }
  };
};
  
export default useStyle;