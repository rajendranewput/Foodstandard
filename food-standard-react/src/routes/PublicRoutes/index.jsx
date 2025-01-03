import {ROUTE_PATHS} from '../../constants';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';

const PublicRoute = ({Component, isAuthenticated}) => {
  return isAuthenticated ? <Navigate href={ROUTE_PATHS.home} /> : Component;
};

export default PublicRoute;

PublicRoute.defaultProps = {
  Component: '',
  isAuthenticated: false,
};

PublicRoute.propTypes = {
  Component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
};
