import {createTheme} from '@mui/material';
import {colors} from './colors';
import {variables} from './variables';

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {},
          style: {textTransform: 'capitalize', margin: '10px 10px 10px 0'},
        },
        {
          props: {size: 'lg'},
          style: {padding: '5px 30px', fontSize: '15px'},
        },
        {
          props: {size: 'md'},
          style: {padding: '5px 15px', fontSize: '13px'},
        },
        {
          props: {size: 'sm'},
          style: {padding: '0 8px', minWidth: '0px', fontSize: '12px'},
        },
        {
          props: {variant: 'dark'},
          style: {
            backgroundColor: colors.black,
            color: colors.white,
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: colors.black,
              color: colors.white,
            },
          },
        },
        {
          props: {variant: 'dark-rounded'},
          style: {
            backgroundColor: colors.black,
            color: colors.white,
            borderRadius: '30px',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: colors.black,
              color: colors.white,
            },
          },
        },
        {
          props: {variant: 'outline-rounded'},
          style: {
            color: colors.black,
            borderRadius: '30px',
            border: `1px solid ${colors.black}`,
            textTransform: 'capitalize',
            '&:hover': {
              color: colors.black,
            },
          },
        },
        {
          props: {variant: 'outlined'},
          style: {
            border: `2px solid ${colors.black}`,
            color: colors.black,
            textTransform: 'capitalize',
            '&:hover': {
              border: `2px solid ${colors.black}`,
              backgroundColor: colors.primary,
              color: colors.primary,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      variants: [
        {
          props: {},
          style: {margin: '0px 10px 10px 0'},
        },
      ],
    },
  },
  palette: {
    primary: {
      main: colors.black,
    },
    error: {
      main: colors.red,
    },
    success: {
      main: colors.activeGreen,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: ['Agenda Semi Bd'].join(','),
  },
  colors: colors,
  variables: variables,
});
