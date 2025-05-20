import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Category', path: '/category' },
    { label: 'Contact', path: '/contact' }
  ]

  const IconButton = ({ icon, badge }) => (
    <button className="btn btn-ghost btn-circle">
      <div className={badge ? 'indicator' : ''}>
        {icon}
        {badge && <span className="badge badge-sm indicator-item bg-yellow-400 border-none">{badge}</span>}
      </div>
    </button>
  )

  const icons = {
    search: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    heart: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    cart: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }

  const NavigationItems = ({ className }) => (
    <ul className={className}>
      {navigationItems.map((item, index) => (
        <li key={index}><a href={item.path}>{item.label}</a></li>
      ))}
    </ul>
  )

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ABC <span className="text-yellow-400">Furniture</span></a>
        </div>
        
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationItems className="menu menu-horizontal px-1 gap-6" />
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <IconButton icon={icons.search} />
          <IconButton icon={icons.heart} />
          <IconButton icon={icons.cart} badge="0" />
          <IconButton icon={icons.user} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-full">
            <NavigationItems className="flex flex-col gap-2" />
            <div className="flex justify-center gap-4 mt-4">
              <IconButton icon={icons.search} />
              <IconButton icon={icons.heart} />
              <IconButton icon={icons.cart} badge="0" />
              <IconButton icon={icons.user} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header