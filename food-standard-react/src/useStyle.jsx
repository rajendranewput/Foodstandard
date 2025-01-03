import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    flex: {
      display: 'flex',
      flexDirection: 'row',
      '@media (max-width: 767px)': {
        flexDirection: 'column',
        maxWidth: 'unset',
        width: '100%',
      }
    },
    mobileHide: {
      '@media (max-width: 767px)': {
        display: 'none'
      }
    },
    mobileShow: {
      display: 'none',
      '@media (max-width: 767px)': {
        display: 'block'
      }
    },
    marginBtm: {
      marginBottom: '12px'
    },
    fullWidth: {
      width: '100%'
    },
    fullHeight: {
      height: '100%',
    },
    borderBox: {
      margin: '5px',
      border: `5px solid ${colors.greyBg}`,
      flexWrap: 'nowrap',
      marginTop: '15px',
      width: '100%',
      '@media (max-width: 767px)': {
        flexDirection: 'column',
      }
    },
    commonHeading: {
      fontSize: '14px',
      paddingTop: '10px'
    },
    plateHeading: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '18px',
      textAlign: 'center',
      paddingTop: '30px'
    },
    noReportedText: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '12px',
      textAlign: 'center',
      position: 'relative',
      bottom: '38px',
    }
  };
};
export default useStyle;