import {style} from '@vanilla-extract/css';
import {vars} from '@workspace/app-css';

export const button = style({
  width: vars.button.width,
  height: '2rem',
  backgroundColor: vars.button.backgroundColor,
  marginBottom: '2rem',
});
