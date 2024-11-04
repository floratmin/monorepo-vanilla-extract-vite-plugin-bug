import { createSignal } from "solid-js";
import {increment} from './Counter.css.ts';
import {Button} from '@workspace/app-elements';

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <Button>Imported styled button</Button>
      <button class={increment} onClick={() => setCount(count() + 1)} type="button">
        Clicks: {count()}
      </button>
    </>
  );
}
