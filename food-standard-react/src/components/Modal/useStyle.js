import {colors} from 'theme/colors';
const useStyle = () => {
  return {
    modalBox:{
      background: colors.white,
      margin: '0 auto',
      width: '100%',
      maxWidth: '75%',
      outline: 'none',
      position:'relative',
      top:'20%',
      borderRadius:'40px',
      padding:'20px 10px'
    },
    modalHeader:{
      display:'flex',
      justifyContent:'center',
      float:'right',
      width:'5%'
    },
    closeButton:{
      height: '10px',
      color: colors.btnColor,
      '& .MuiSvgIcon-root':{
        fontSize:'16px'
      },
      '&.MuiIconButton-root:hover':{
        backgroundColor:colors.transparent
      },
    },
  }
};
  
export default useStyle;