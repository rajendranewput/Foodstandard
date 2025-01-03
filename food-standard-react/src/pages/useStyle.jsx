import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    mainConatiner: {
      '&.MuiContainer-root': {
        maxWidth: '1920px',
        margin: '0 auto',
        padding: 0
      }
    },
    container: {
      padding: '15px 78px 0 78px',
      '@media (max-width: 767px)': {
        padding: '10px 25px 0 25px',
      }
    },
  };
};
  
export default useStyle;