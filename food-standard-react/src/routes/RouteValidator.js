import {Loader} from '../components';
import {LOADER_TYPE} from '../constants/index';
import {getAuthToken} from '../helpers/cookie.helpers';
import PropTypes from 'prop-types';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import PrivateRoute from './PrivateRoutes/index';
import PublicRoute from './PublicRoutes/index';

const SuspenseWrappedComponent = (Component) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 1,
          }}
        >
          <Loader type={LOADER_TYPE.CIRCULAR} />
        </div>
      }
    >
      <ErrorBoundary
        fallbackRender={<>Error</>}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <Component />
      </ErrorBoundary>
    </Suspense>
  );
};

const RouteValidator = ({hasAuth, component, ...otherProps}) => {
  const isAuthenticated = getAuthToken();
  return hasAuth ? (
    <PrivateRoute
      isAuthenticated={isAuthenticated}
      Component={SuspenseWrappedComponent(component)}
    />
  ) : (
    <PublicRoute
      isAuthenticated={isAuthenticated}
      Component={SuspenseWrappedComponent(component)}
    />
  );
};

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasAuth: PropTypes.bool,
  hasNavBar: PropTypes.bool,
  path: PropTypes.string,
};

export default RouteValidator;
