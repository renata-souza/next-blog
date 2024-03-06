'use client'

import { handleLogout } from '@/data/action'
import Image from 'next/image'
import { useState } from 'react'
import NavLink from './NavLink/NavLink'
import styles from './links.module.css'

const links = [
  {
    title: "Homepage",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blog",
    path: "/blog"
  }
]

const Links = ({session}) => {
  const [open, setOpen] = useState(false)

  // TEMPORARY AUTH
  const isAdmin = true

  return (
    <div className={styles.container}>
      <nav className={styles.links}>
        {links.map(link => <NavLink item={link} key={link.title} />)}

        {session?.user
          ? (
            <>
              {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          )
          : <NavLink item={{ title: "Login", path: "/login" }} />
        }
      </nav>
      <Image className={styles.menuBtn} src="/menu.png" alt='' width={30} height={30} onClick={() => setOpen(open => !open)} />
      {open && (
        <div className={styles.mobileMenu}>
          {links.map(link => <NavLink item={link} key={link.title} />)}
        </div>
      )}
    </div>

  )
}

export default Links