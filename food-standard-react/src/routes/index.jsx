import {Loader} from '../components';
import {LOADER_TYPE} from '../constants/index';
import PropTypes from 'prop-types';
import {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import CustomRoutes from './routes';

const Routes = ({pageLoader}) => {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          >
            {!pageLoader && <Loader type={LOADER_TYPE.CIRCULAR} />}
          </div>
        }
      >
        <CustomRoutes />
      </Suspense>
    </Router>
  );
};

export default Routes;

Routes.defaultProps = {
  pageLoader: false,
};

Routes.propTypes = {
  pageLoader: PropTypes.bool,
};
