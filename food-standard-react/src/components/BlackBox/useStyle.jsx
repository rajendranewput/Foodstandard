import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    blackBox: {
      background: colors.black,
      color: colors.white,
      justifyContent: 'center',
      fontFamily: variables.$agendaSemiBold,
      fontSize: '18px',
      lineHeight: '20px',
      padding: '22px',
      '@media (max-width: 767px)': {
        fontSize: '25px',
        padding: '16px 10px'
      }
    },
    hoverBox: {
      background: colors.greyBg,
      color: colors.black,
      fontFamily: variables.$agendaItalic,
      fontSize: '12px',
      lineHeight: '15px',
      padding: '5px',
    },
    common: {
      maxWidth: '224px',
      minHeight: '200px',
      '@media (max-width: 767px)': {
        minHeight: '100px',
        maxWidth: '100%'
      }
    }
  };
}; 
export default useStyle;