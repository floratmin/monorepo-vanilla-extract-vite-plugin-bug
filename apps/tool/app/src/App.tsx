import {Button} from '@workspace/app-elements';
import {increment} from './App.css.ts';
import { createSignal } from "solid-js";

export function App() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <Button>Imported styled button</Button>
      <button class={increment} onClick={() => setCount(count() + 1)} type="button">Clicks: {count()}</button>
    </>
  );
}
