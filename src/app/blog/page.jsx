import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/PostCard/PostCard'
import { getPosts } from '@/data/db'

const BlogPage = async () => {
  const posts = await getPosts()

  return (
    <main className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </main>
  )
}

export default BlogPage