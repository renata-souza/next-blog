import Link from 'next/link'
import Links from './Links/Links'
import styles from './navbar.module.css'
import { auth } from '@/data/auth'

const Navbar = async () => {
  
  const session = await auth()

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>Lama</Link>
      <Links session={session} />
    </header>
  )
}

export default Navbar