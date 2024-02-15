import { For } from "solid-js";

import type { TItems } from "../../state/state_types";

import styles from './List.module.scss';

export const List = (props: TItems) => {
  return (
    <ul class={styles.list}>
      <For each={props.filterList()} fallback={'Результатов нет'}>
        {item => <li class={styles.item}>{item}</li>}
      </For>
    </ul>
  )
};
