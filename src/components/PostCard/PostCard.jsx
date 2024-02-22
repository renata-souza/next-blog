import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src='https://images.pexels.com/photos/15215468/pexels-photo-15215468/free-photo-of-ceu-azul-ceu-de-brigadeiro-predios-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}></h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae culpa reprehenderit laboriosam quibusdam sit fuga voluptates nobis. Veritatis earum accusantium dicta itaque quo maiores sapiente quaerat quos cum? Debitis, neque.</p>
        <Link className={styles.link} href='/'>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard