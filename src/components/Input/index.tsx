import { mergeProps } from "solid-js";

import styles from './Input.module.scss';

const defaultProps = {
  type: 'text',
  placeholder: '...начните вводить текст'
};

export const Input = (props) => {
  return <input class={styles.input} {...mergeProps(defaultProps, props)} />;
};
