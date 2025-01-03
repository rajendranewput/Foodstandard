const useStyle = () => {
  return {
    paper: {
      padding: '20px 0'
    },
    banner:{
      marginTop:'35px',
      "@media only screen and (max-width: 767px)": {
        marginTop:'0px'
      },
    },
    dheader:{
      marginBottom:'60px',
      position:'relative', 
      top:'60px',
    },
  };
}
  
export default useStyle;