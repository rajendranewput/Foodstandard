import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    banner: {
      color: colors.white,
      background: colors.black,
      padding: '15px 75px 10px 75px;',
      fontSize: '36px',
      lineHeight: '36px',
      fontFamily: variables.$agendaRegUltraCondensed,
      width: '100%',
      zIndex: '9',
      '@media only screen and (max-width: 767px)': {
        padding: '15px 0px 10px 25px;',
      },
    },
  };
};

export default useStyle;
