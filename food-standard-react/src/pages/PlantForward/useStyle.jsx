import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    containerBlack: {
      marginRight: '.47%',
      width: '30%',
      '@media (max-width: 767px)': {
        width: '100%'
      }
    },
    emphasizeContainer: {
      width: '19%',
    },
    emphasizeChart: {
      width: '80.53%',
    },
    halfWidth: {
      width: '50%'
    },
    hoverBorder: {
      borderColor: colors.black,
    },
    cor: {
      width: '69.53%',
    },
    chartBox: {
      width: '50%',
      flexWrap: 'nowrap'
    },
    emphasizeSec: {
      width: '78%',
    },
    break: {
      top: '220px !important',
    },
    emphasize: {
      flexWrap: 'nowrap',
      border: '3px solid transparent',
      padding: '3px',
    },
    borderHoverBox: {
      height: '212px',
    },
    border: {
      border: '3px solid transparent',
      padding: '2px',
      width: '100%',
    },
    marginTop: {
      marginTop: '10px'
    },
    emphasizeHover: {
      borderColor: colors.black,
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
    sunBurstChart: {
      border: `5px solid ${colors.greyBg}`,
      width: '100%',
      justifyContent: 'center'
    },
    flexDirection: {
      flexDirection: 'column',
      width: '50%'
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
    proteinBox: { 
      width: '100%',
      justifyContent: 'center',
      border: `5px solid ${colors.greyBg}`,
      minHeight: '300px',
    },
    tableRow: {
      alignItems: 'center',
      borderBottom: `1px solid ${colors.greyBg}`,
      display: 'flex',
      fontFamily: variables.$agendaSemiBold,
      justifyContent: 'space-around',
      margin: '0 10px',
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
  };
};
  
export default useStyle;