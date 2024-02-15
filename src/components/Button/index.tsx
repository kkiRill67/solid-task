import { splitProps, children, mergeProps } from "solid-js";

import styles from './Button.module.scss';

const defaultProps = {
  type: 'button'
};

export const Button = (props) => {
  const [local, others] = splitProps(mergeProps(defaultProps, props), ['children']);
  const child = children(() => local.children);

  return <button class={styles.button} {...others}>{child()}</button>;
};
