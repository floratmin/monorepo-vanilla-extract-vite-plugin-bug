import { style } from '@vanilla-extract/css';

export const increment = style({
    padding: '1em 2em',
    color: '#335d92',
    backgroundColor: 'rgba(68, 107, 158, 0.1)',
    borderRadius: '2em',
    border: '2px solid rgba(68, 107, 158, 0)',
    outline: 'none',
    width: '200px',
    fontVariantNumeric: 'tabular-nums',
    cursor: 'pointer',
    ':focus': {
        border: '2px solid #335d92',
    },
    ':active': {
        border: 'rgba(68, 107, 158, 0.2)',
    },
});