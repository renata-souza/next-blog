import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        Lama
      </div>
      <div className={styles.text}>
        Lama creative thoughts agency © All rights reserved
      </div>
    </footer>
  )
}

export default Footer