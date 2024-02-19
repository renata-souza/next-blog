import Link from 'next/link'
import React from 'react'

const Links = () => {

  const links = [
    {
      title: "Homepage",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    }
  ]

  return (
    <>
      {links.map(link => <Link href={link.path} key={link.title}>{link.title}</Link>)}
    </>
  )
}

export default Links