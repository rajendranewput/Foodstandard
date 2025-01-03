import {CircularProgress, LinearProgress} from '@mui/material';
import {LOADER_TYPE, LOADER_VARIANTS} from '../../constants';
import PropTypes from 'prop-types';

const AppLoader = ({type, progress}) => {
  switch (type) {
    case LOADER_TYPE.CIRCULAR:
      return <CircularProgress />;

    case LOADER_TYPE.LINEAR:
      return <LinearProgress value={progress} />;
    default:
      break;
  }
};

export default AppLoader;

AppLoader.defaultProps = {
  type: LOADER_TYPE.CIRCULAR
};

AppLoader.propTypes = {
  type: PropTypes.oneOf(Object.keys(LOADER_TYPE).map((key) => LOADER_TYPE[key])),
  progress: PropTypes.number,
};
