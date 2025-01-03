import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    chartBtn: {
      border: `2px solid ${colors.black} !important`,
      borderRadius: '25px !important',
      color: colors.black,
      cursor: 'pointer',
      fontSize: '12px',
      fontFamily: variables.$agendaSemiBold,
      height: '35px',
      margin: '10px',
      padding: '4px 15px',
      textAlign: 'center'
    },
    container: {
      maxWidth: '100% !important',
    },
    btnList: {
      display: 'flex'
    },
    temp: {
      backgroundColor: colors.black,
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.black,
      }
    }
  };
};
export default useStyle;