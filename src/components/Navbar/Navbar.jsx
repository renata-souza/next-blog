import Link from 'next/link'
import Links from './Links/Links'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>Lama</Link>
      <Links />
    </header>
  )
}

export default Navbar