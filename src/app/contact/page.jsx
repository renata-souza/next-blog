import Image from 'next/image'
import React from 'react'
import styles from './contact.module.css'

export const metadata = {
  title: "Contact page",
  description: "Get in touch to know more about our services",
};

const ContactPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt='illustration of a man pointing to a formulary' fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <input type="text" placeholder='Full name' />
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='Phone Number (optional)' />
          <textarea cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </main>
  )
}

export default ContactPage