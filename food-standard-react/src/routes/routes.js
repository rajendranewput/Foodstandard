import {Navigate, Route, Routes} from 'react-router-dom';
import RouteValidator from './RouteValidator';
import {routerList} from './routerList';
import {Menus} from 'components';
import {exportPdf} from 'pages/pdfUtils';
import {Box} from '@mui/material';
import {Header} from 'pages/Header';
import {Footer} from 'pages/Footer';
import {ROUTE_PATHS} from '../constants/index';

const CustomRoutes = () => (
  <>
    {window.location.pathname !== ROUTE_PATHS.hierarchy && <Menus window={() => window} pdfFun={() => exportPdf('.actual-pdf', window.location.pathname)}></Menus>}
    <Box className='actual-pdf'>
      <Box>
        {window.location.pathname !== ROUTE_PATHS.hierarchy && <Header></Header>} 
      </Box>
      <Routes>
        {routerList.map(({path, key, ...props}) => {
          return (
            <Route path={path} key={key} exact element={<RouteValidator path={path} {...props} />} />
          );
        })}
        <Route path='*' element={<Navigate to={ROUTE_PATHS.dashboard} />}/>
      </Routes>
    </Box>
    <Footer></Footer>
  </>
);

export default CustomRoutes;
