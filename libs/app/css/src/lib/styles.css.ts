import { createTheme } from '@vanilla-extract/css';
import op from 'open-props';


export const [theme, vars] = createTheme({
  button: {
    width: '200px',
    backgroundColor: op.red3,
  },
});
