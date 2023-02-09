import React from 'react'
import Link from 'next/link'

function Header(props: any) {
    const customBlog = 'custom blogs';
  return (
    <div>
      <nav className={props.styles}>
        <ul>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={`/blogpost/${customBlog}`}>Blogs</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
