import React from 'react'
import styles from './postAuthor.module.css'

const PostAuthor = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.author}>Terry Jefferson</span>
    </div>
  )
}

export default PostAuthor