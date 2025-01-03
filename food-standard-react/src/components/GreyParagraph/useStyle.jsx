import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    paragraphText: {
      fontFamily: variables.$agendaItalic,
      fontSize: '18px',
      padding: '20px 78px',
      '@media (max-width: 767px)': {
        padding: '20px 25px'
      }
    },
    backgroundGrey: {
      backgroundColor: colors.greyBg,
      paddingTop: '55px',
      '@media (max-width: 767px)': {
        flexDirection: 'column'
      }
    },
    paddingTop: {
      paddingTop: '0'
    }
  };
};
  
export default useStyle;