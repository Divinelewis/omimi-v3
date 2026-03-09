import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style jsx>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 66px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 60px;
          animation: navSlide 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          transition: background 0.4s, border-color 0.4s, backdrop-filter 0.4s;
          border-bottom: 1px solid transparent;
        }
        nav.pinned {
          background: rgba(11,11,11,0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: var(--border);
        }
        .logo {
          font-family: var(--font-d);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-1);
          letter-spacing: -0.01em;
          display: flex; align-items: baseline; gap: 2px;
        }
        .logo-accent { color: var(--red); }
        .nav-links {
          display: flex; gap: 40px; list-style: none;
        }
        .nav-links a {
          font-family: var(--font-m);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-3);
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: var(--red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-links a:hover { color: var(--text-1); }
        .nav-links a:hover::after { transform: scaleX(1); }
        .hire {
          font-family: var(--font-m);
          font-size: 0.67rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-1);
          background: var(--red);
          padding: 9px 22px;
          display: inline-block;
          position: relative; overflow: hidden;
          transition: background 0.25s;
        }
        .hire:hover { background: #e84630; }
        @media (max-width: 768px) {
          nav { padding: 0 20px; }
          .nav-links { display: none; }
        }
      `}</style>

      <nav className={scrolled ? 'pinned' : ''}>
        <a href="#hero" className="logo">
          Omimi<span className="logo-accent">.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#work">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a
          href="https://t.me/decentralizedverse"
          target="_blank"
          rel="noopener noreferrer"
          className="hire"
        >
          Hire Me
        </a>
      </nav>
    </>
  )
}
