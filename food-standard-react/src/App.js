import {ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import Routes from './routes';
import {theme} from './theme';
import {store} from './store/store';
import 'assets/fonts/fonts.scss';
import 'assets/cafebonappetit.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
