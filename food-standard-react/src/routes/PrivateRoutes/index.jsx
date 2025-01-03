import {ROUTE_PATHS} from '../../constants/index';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({Component, isAuthenticated}) => {
  return isAuthenticated ? <Component /> : <Navigate to={ROUTE_PATHS.home} />;
};

export default PrivateRoute;

PrivateRoute.defaultProps = {
  Component: '',
  isAuthenticated: false,
  hasNavBar: false,
};

PrivateRoute.propTypes = {
  Component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  hasNavBar: PropTypes.bool,
};
