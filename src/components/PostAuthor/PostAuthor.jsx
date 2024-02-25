import React from 'react'
import styles from './postAuthor.module.css'
import { getUser } from '@/data/db'
import Image from 'next/image'

const PostAuthor = async ({ userId }) => {
  const author = await getUser(userId)
  console.log(userId, "userId")

  return (
    <div className={styles.container}>
      <Image className={styles.avatar} src={userId.img ? user.img : '/noavatar.png'} alt='' width={50} height={50} />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.author}>{author.username}</span>
      </div>
    </div>
  )
}

export default PostAuthor