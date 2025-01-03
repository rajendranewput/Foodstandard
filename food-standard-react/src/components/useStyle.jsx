import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    commonBox: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      textAlign: 'center',
      width: '100%',
      '@media (max-width: 767px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '100%',
        width: '100%',
      }
    },
  };
};
export default useStyle;