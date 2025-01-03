import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    iconBox: {
      bottom: '6px',
      position: 'absolute',
      right: '8px',
      textAlign: 'right',
      width: '100%',
    },
    icons: {
      backgroundColor: colors.orangeIcon,
      borderRadius: '50%',
      color: colors.white,
      cursor: 'pointer',
      fontFamily: variables.$agendaSemiBold,
      fontSize: '11px',
      justifyContent: 'center',
      padding: '1px 4px',
      margin: '0 3px',
      textAlign: 'center'
    },
    infoIcon: {
      bottom: '0',
      color: 'grey',
      cursor: 'pointer',
      fontSize: '18px',
      margin: '10px',
      position: 'absolute',
      right: '0',
    },
  };
};
  
export default useStyle;