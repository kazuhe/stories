import styles from './style.module.scss'

export function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}