import Image from 'next/image';
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid laborum exercitationem veritatis quo quae nisi!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='' fill className={styles.brandsImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.gif' alt='' fill className={styles.heroImg} />
      </div>
    </main>
  );
}
