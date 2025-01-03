import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    main: {
      position: 'relative'
    },
    box: {
      background: colors.white,
      border: `5px solid ${colors.greyBg}`,
      borderLeft: '0',
      color: colors.black,
      fontFamily: variables.$agendaSemiBold,
      flexDirection: 'column',
      height: '200px',
      justifyContent: 'space-between',
      maxWidth: '300px',
      padding: '16px 10px 5px',
      '@media (max-width: 767px)': {
        borderLeft: `5px solid ${colors.greyBg}`,
        borderTop: '0',
        height: '200px',
        maxWidth: '100%'
      }
    },
    hoverBox: {
      color: colors.black,
      fontFamily: variables.$agendaItalic,
      fontSize: '10px',
      justifyContent: 'center',
      lineHeight: '13px',
      maxWidth: '100%',
      minHeight: '140px',
      padding: '5px',
      '@media (max-width: 767px)': {
        paddingBottom: '10px 30px'
      }
    },
    borderTop: {
      '@media (max-width: 767px)': {
        borderTop: `5px solid ${colors.greyBg}`,
        maxWidth: '100%',
      }
    },
    boxPadding: {
      padding: '12px 0 0',
    },
    footerBorder: {
      borderTop: `3px dashed ${colors.greyBg}`,
      padding: '4px 0 20px',
      width: '100%',
    },
    chartBox: {
      justifyContent: 'center', 
      '@media (max-width: 767px)': {
        maxWidth: '100%',
        width: '100%'
      }
    },
    heading: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '14px',
      lineHeight: '15px'
    },
    value: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '34px',
      lineHeight: '38px'
    },
    footerValue: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '24px',
      lineHeight: '25px'
    },
    subHeading: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '10px',
      lineHeight: '11px',
      paddingBottom: '20px'
    },
    descText: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    valPadding: {
      paddingBottom: '35px'
    },
    borderRight: {
      borderRight: 0,
      '@media (max-width: 767px)': {
        width: '100%',
        minWidth: '100%',
        borderBottom: 0,
        borderRight: `5px solid ${colors.greyBg}`
      }
    },
    wholeFood: {
      padding: '5px 15px',
    },
    wholeFoodVal: {
      fontSize: '25px',
      fontFamily: variables.$agendaSemiBold,
    }
  };
};
export default useStyle;