export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          border-top: 1px solid var(--border);
          background: var(--bg-card);
          padding: 32px 60px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .logo {
          font-family: var(--font-d);
          font-size: 1.45rem; font-weight: 700; color: var(--text-1);
        }
        .logo-dot { color: var(--red); }
        .copy {
          font-family: var(--font-m);
          font-size: 0.58rem; letter-spacing: 0.1em; color: var(--text-4);
        }
        .links { display: flex; gap: 24px; }
        .links a {
          font-family: var(--font-m);
          font-size: 0.58rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-4); transition: color 0.2s;
        }
        .links a:hover { color: var(--red); }
        @media (max-width: 768px) {
          footer { flex-direction: column; gap: 18px; text-align: center; padding: 24px 20px; }
        }
      `}</style>
      <footer>
        <div className="logo">Omimi<span className="logo-dot">.</span></div>
        <div className="copy">&#169; 2025 Omimi. All rights reserved.</div>
        <div className="links">
          <a href="https://x.com/decentralpapi" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://t.me/decentralizedverse" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="#hero">Top &#8593;</a>
        </div>
      </footer>
    </>
  )
}
