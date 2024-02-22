import Image from 'next/image'
import React from 'react'
import styles from './post.module.css'

const PostPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/15215468/pexels-photo-15215468/free-photo-of-ceu-azul-ceu-de-brigadeiro-predios-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src='/noavatar.png' alt='' width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-01-2024</span>
          </div>
        </div>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non soluta dignissimos? Enim recusandae laudantium neque? Mollitia neque id, repellendus dicta vitae autem consectetur rem cupiditate repellat quia, ducimus doloremque.
        </p>
      </div>
    </main>
  )
}

export default PostPage