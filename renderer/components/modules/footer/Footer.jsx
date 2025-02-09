import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
        <p className='footer-text' >
            ساخته شده توسط <Link className='footer-link' href={'instagram.com'} >sfri_erfan</Link>
        </p>
    </footer>
  )
}

export default Footer