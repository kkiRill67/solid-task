import { For, createEffect, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import { BsSortDownAlt } from "solid-icons/bs";
import { BsSortDown } from "solid-icons/bs";

import createSort, { sorting } from "./createSort";
import { Input } from '../Input';
import { Button } from '../Button';
import { List } from '../List';

import { SortEnum } from './Search.types';
import type { TItems } from "../../state/state_types";

import styles from './Search.module.scss';

const icon = {
  [SortEnum.ASC]: BsSortDownAlt,
  [SortEnum.DESC]: BsSortDown,
}

export const Search = (props: TItems) => {
  const [sort, onSortedHandle] = createSort();
  const [input, setInput] = createSignal<string>('');
  const [filterList, setFilterList] = createSignal<TItems>(props.items);

  createEffect(() => setFilterList([
    ...props.items
      .filter(item => item.toLowerCase().includes(input().toLowerCase()))
      .sort(sorting[sort()])
  ]));

  return (
    <>
      <div class={styles.controls}>
        <Input onInput={(e) => setInput(e.target.value)} />
        <Button onClick={onSortedHandle}>
          <Dynamic component={icon[sort()]} size={30} />
        </Button>
      </div>
      <List filterList={filterList} />
    </>
  );
};
