import { createSignal, batch, createEffect } from "solid-js";

import { SortEnum } from './Search.types';

const sortedAsc = <T>(a: T, b: T) => a < b && -1;
const sortedDesc = <T>(a: T, b: T) => a > b && -1;

export const sorting = {
  [SortEnum.ASC]: sortedAsc,
  [SortEnum.DESC]: sortedDesc
}

const createSort = () => {
  const [sort, setSort] = createSignal<SortEnum>(SortEnum.ASC);

  const onSortedHandle = () => setSort(prev => prev === SortEnum.ASC ? SortEnum.DESC : SortEnum.ASC);

  return [
    sort,
    onSortedHandle,
  ];
}

export default createSort;