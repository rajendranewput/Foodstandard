import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
const useStyle = () => {
  return {
    chartIcons: {
      fontSize: '28px',
      fontFamily: variables.$agendaSemiBold,
      paddingLeft: '2px',
      color: colors.black,
      fill: colors.black,
      top:'0px',
      width: '58px',  
    },
    chartSelected:{
      fontSize: '12px',
      verticalAlign: 'top',
    },
    selected:{
      color: colors.black,
      textAlign: 'center',
    },
    unselected:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    totalUnselected:{
      fontSize: '16px',
      padding: '5px',
      color: colors.black,
      textAlign: 'center',
      marginTop: '5px'
    },
    totalTitle: {
      color: colors.black,
      fontFamily: variables.$agendaSemiBold,
      fontSize: '26px',
      position: 'relative',
      bottom: '10px',
    },
    display: {
      display: 'inline-block'
    },
    noDataCor:{
      color: colors.black,
      fontFamily: variables.$agendaSemiBold,
      fontSize: '9px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    noDataCorHover:{
      color: colors.black,
      fontFamily: variables.$agendaSemiBold,
      fontSize: '7px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '26px',
      position: 'relative',
      bottom: '10px',
      right: '0',
    },
    iconsHover: {
      fontFamily: variables.$agendaSemiBold,
      fontSize: '12px',
      position: 'relative',
      bottom: '10px',
      right: '0',
    },
    corValue: {
      fontSize: '18px',
      fontFamily: variables.$agendaSemiBold,
      position: 'relative',
      bottom: '8px',
    },
    corTotalValue: {
      fontSize: '22px',
      fontFamily: variables.$agendaSemiBold,
      position: 'relative',
      bottom: '12px',
    },
    corValueHover: {
      fontSize: '14px',
      fontFamily: variables.$agendaSemiBold,
      position: 'relative',
      bottom: '8px',
    }
  };
};
export default useStyle;