import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At incidunt nostrum similique beatae fuga ullam dolore nobis doloribus. Voluptas perferendis aliquam labore tenetur modi facere doloribus nostrum! Quam, error nostrum.</p>
        <div className={styles.metrics}>
          <div>
            <h1>10 K+</h1>
            <p>Yers of experience</p>
          </div>
          <div>
            <h1>234 K+</h1>
            <p>People reached</p>
          </div>
          <div>
            <h1>5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/about.png' alt='illustration of a man pointing to a metrics chart' fill className={styles.img} />
      </div>
    </main>
  )
}

export default AboutPage