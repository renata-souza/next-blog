import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/PostCard/PostCard'

const BlogPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </main>
  )
}

export default BlogPage