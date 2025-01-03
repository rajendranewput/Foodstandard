import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    box: {
      alignItems: 'center',
      background: colors.white,
      color: colors.black,
      display: 'flex',
      fontFamily: variables.$agendaSemiBold,
      padding: '2px 10px 0',
      textAlign: 'center',
      maxWidth: '1200px',
      width: '100%',
      height: '200px',
      border: `5px solid ${colors.greyBg}`,
      borderLeft: '0',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      '@media (max-width: 767px)': {
        height: '100%',
        borderLeft: `5px solid ${colors.greyBg}`,
        borderTop: '0',
      }
    },
    borderLeft: {
      borderLeft: `5px solid ${colors.greyBg}`
    },
    border: {
      border: '3px solid transparent',
      padding: '3px',
    },
    hoverBorder: {
      borderColor: colors.black,
    },
    heading: {
      fontSize: '16px',
      fontFamily: variables.$agendaSemiBold
    },
    charts: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      '@media (max-width: 767px)': {
        flexWrap: 'wrap',
      }
    },
    chartsHover: {
      alignItems: 'baseline',
    },
    cor: {
      display: 'flex',
      flexDirection: 'row',
      width: '83%',
      '@media (max-width: 767px)': {
        flexDirection: 'column',
        width: '100%',
      }
    },
    containerBlack: {
      width: '16.75%',
      marginRight: '.25%',
      '@media (max-width: 767px)': {
        width: '100%'
      }
    },
    mobileChart: {
      '@media (max-width: 767px)': {
        flexBasis: 'content',
        width: '50%',
        padding: '3% 7%',
      }
    },
    hoverHeading: {
      color: colors.black,
      fontSize: '15px',
      fontFamily: variables.$agendaSemiBold,
      lineHeight: '18px',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    corHoverDesc: {
      color: colors.black,
      fontSize: '15px',
      fontFamily: variables.$agendaItalic,
      lineHeight: '15px',
      textAlign: 'center',
      padding: '10px 12px 0'
    },
    emailIcon: {
      fontSize: '20px',
      position: 'relative',
      left: '49%',
      cursor: 'pointer',
    }
  };
};
  
export default useStyle;