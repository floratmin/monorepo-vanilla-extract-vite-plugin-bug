import { ParentProps } from 'solid-js';
import {button} from './Button.css.ts';
import {theme} from '@workspace/app-css';

export function Button(props: ParentProps) {
  return <div class={theme}><button class={button}>{props.children}</button></div>
}
