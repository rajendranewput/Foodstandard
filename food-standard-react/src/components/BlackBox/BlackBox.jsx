import React from 'react';
import {Grid, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';

const BlackBox = ({title, hover, hoverText}) => {
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const commonStyles = {
    ...commonStyle.commonBox,
    ...style.common
  }
  return (
    <> 
      {hover ? (
        <Grid item xs={12}  sx={{...style.hoverBox, ...commonStyles}}>
          {hoverText}
        </Grid>
      ) : (
        <Grid item xs={12}  sx={{...style.blackBox, ...commonStyles}}>
          {title}
        </Grid>
      )}
    </>
  );
};

export default BlackBox;

BlackBox.defaultProps = {
  title: 'title',
  hover: false,
  hoverText: 'hover text'
};

BlackBox.propTypes = {
  title: PropTypes.string,
  hover: PropTypes.bool,
  hoverText: PropTypes.string
};