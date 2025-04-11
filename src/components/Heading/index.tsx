import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

// export function Heading(props: HeadingProps) {
//   const { children } = props;
//   return <h1 className={styles.heading}>{children}</h1>;
// }
// o de cima e o de baixo é a mesma coisa
// destructin em javascript

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
