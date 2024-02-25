import Image from 'next/image'
import React, { Suspense } from 'react'
import styles from './post.module.css'
import PostAuthor from '@/components/PostAuthor/PostAuthor'
import { getPost } from '@/data/db'

const PostPage = async ({ params }) => {
  const { slug } = params

  const post = await getPost(slug)
  console.log(post)

  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && <Image className={styles.img} src={post.img} alt='' fill />}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostAuthor userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <p className={styles.content}>{post.description}</p>
      </div>
    </main>
  )
}

export default PostPage