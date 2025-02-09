import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header>
            <div className="header-wrapper">
                <div className="searchBar-wrapper">
                    <input type="text" className='searchBar' placeholder='جستجو کنید ..' />
                    <button className='searchBar-btn' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="white" strokeWidth="2" strokeLinecap="round"/></g></svg>
                    </button>
                </div>
                <div className="flex items-center gap-5 flex-row-reverse">
                    <Link href={'/account'} >
                    <img src="/images/pf.png" alt="" />
                    </Link>
                    <Link href={'telegrom.com'} className='bg-primary p-3 rounded-full flex items-center justify-center' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2396 0.93077C22.1006 0.815358 21.9316 0.741828 21.7524 0.718748C21.5732 0.695668 21.3912 0.723989 21.2274 0.800411L1.58142 10.0218V11.8062L9.83315 15.1068L15.1261 23.25H16.9108L22.5499 1.9031C22.5956 1.72828 22.5907 1.54407 22.5358 1.37192C22.4808 1.19977 22.3781 1.04678 22.2396 0.93077ZM15.8089 21.5481L11.2594 14.5486L18.2603 6.88066L17.1526 5.86929L10.0969 13.597L3.2933 10.8755L20.7984 2.65872L15.8089 21.5481Z" fill="white"/></svg>
                    </Link>
                </div>
            </div>
    </header>
  )
}

export default Header