import React from 'react';
import {Grid} from '@mui/material';
import useStyle from './useStyle';
import PropTypes from 'prop-types';

const GreyParagraph = ({text, padding}) => {
  const style = useStyle();
  return (
    <Grid container sx={padding ? {...style.backgroundGrey, ...style.paddingTop} : style.backgroundGrey}>
      <Grid item xs={12} sx={style.paragraphText} >
        {text}
      </Grid>
    </Grid>
  );
};

export default GreyParagraph;

GreyParagraph.defaultProps = {
  text: 'paragraph',
};

GreyParagraph.propTypes = {
  text: PropTypes.string,
};