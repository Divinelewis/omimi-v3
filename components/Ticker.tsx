const ITEMS = ['KOL Writing','Research Reports','Governance Threads','Market Analysis','Thread Writing','Community Strategy','Protocol Deep Dives','Content Strategy','Alpha Research','Ecosystem Reports']

export default function Ticker() {
  const track = [...ITEMS, ...ITEMS]
  return (
    <>
      <style jsx>{`
        .wrap {
          overflow: hidden;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg-card);
          padding: 13px 0;
          position: relative;
        }
        .wrap::before, .wrap::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none;
        }
        .wrap::before { left: 0; background: linear-gradient(to right, var(--bg-card), transparent); }
        .wrap::after  { right: 0; background: linear-gradient(to left, var(--bg-card), transparent); }
        .track {
          display: flex; width: max-content;
          animation: ticker 30s linear infinite;
        }
        .item {
          display: flex; align-items: center; gap: 0; white-space: nowrap;
        }
        .label {
          font-family: var(--font-m);
          font-size: 0.63rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text-4); padding: 0 24px;
          transition: color 0.2s;
        }
        .label:hover { color: var(--text-2); }
        .dot { color: var(--red); font-size: 0.45rem; opacity: 0.7; }
      `}</style>
      <div className="wrap">
        <div className="track">
          {track.map((t, i) => (
            <div key={i} className="item">
              <span className="label">{t}</span>
              <span className="dot">&#9670;</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
