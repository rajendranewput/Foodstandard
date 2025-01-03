import {Box} from '@mui/material';
import PropTypes from 'prop-types';
import useStyle from './useStyle';

const Banner = ({text, customStyle, className}) => {
  const style = useStyle();
  return (
    <Box title={text} sx={{...style.banner, ...customStyle}} className={className}>
      {text}
    </Box>
  );
};

export default Banner;

Banner.defaultProps = {
  text: '',
};

Banner.propTypes = {
  text: PropTypes.string,
};
