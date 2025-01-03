import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    borderBox: {
      border: '3px solid transparent',
      padding: '3px',
      marginBottom: '12px',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    },
    sorceBorder: {
      width: '67%',
    },
    trimBorder: {
      width: '34%',
    },
    beef: {
      width: '83%',
    },
    containerBlack: {
      width: '16.75%',
      marginRight: '.25%',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    },
    beefBoxes: {
      width: '20%',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    },
    hoverBorder: {
      border: `3px solid ${colors.black}`
    },
    sourceBlack: {
      width: '25%'
    },
    sourceContainer: {
      width: '74.75%'
    },
    sorceBoxes: {
      width: '35%',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    },
    trimBlack: {
      width: '50%',
    },
    trimCon: {
      width: '49.75%',
    },
  };
};
  
export default useStyle;