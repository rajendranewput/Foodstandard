import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    carbonImpact: {
      borderRight: `5px solid ${colors.greyBg}`,
      width: '35%',
      '@media (max-width: 767px)': {
        width: '100%',
        borderRight: '0'
      }
    },
    doubleComun: {
      width: '65%',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    },
  };
};
  
export default useStyle;