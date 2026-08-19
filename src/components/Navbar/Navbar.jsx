import { useState } from 'react'
import './Navbar.css'

const navItems = [
  { label: 'HOME', href: '/', active: true },
  { label: 'CODE ON PACK', href: '/cop' },
  { label: 'RAFFLE PROMOS AND PRIZES', href: '#', dropdown: true },
  { label: 'SPECIAL PROMO PACK', href: '#', dropdown: true, muted: true },
  { label: 'MIGHTY FEATURES', href: '#', dropdown: true },
  { label: 'PRODUCTS', href: '#' },
  { label: 'FAQ', href: '#', dropdown: true },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">LOGO</div>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.label} className="navbar-item">
              <a
                href={item.href}
                className={`navbar-link${item.active ? ' active' : ''}${item.muted ? ' muted' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar + overlay for mobile */}
      <div
        className={`sidebar-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &#x2715;
        </button>
        <ul className="sidebar-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`sidebar-link${item.active ? ' active' : ''}${item.muted ? ' muted' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Navbar
