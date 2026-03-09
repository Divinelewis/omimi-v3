import useInView from '../hooks/useInView'

export default function Contact() {
  const [ref, visible] = useInView(0.15)
  return (
    <>
      <style jsx>{`
        .section {
          padding: 100px 60px;
          max-width: 1280px; margin: 0 auto;
          border-top: 1px solid var(--border);
          display: grid; grid-template-columns: 1fr auto;
          align-items: center; gap: 48px;
        }
        .headline {
          font-family: var(--font-d);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700; color: var(--text-1); line-height: 1.1;
        }
        .headline em { font-style: italic; font-weight: 400; color: var(--red); }
        .sub {
          font-size: 0.95rem; color: var(--text-3);
          max-width: 480px; margin-top: 14px; line-height: 1.75;
        }
        .btns { display: flex; flex-direction: column; gap: 10px; min-width: 220px; }
        .btn-a {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 28px; background: var(--red); color: #fff;
          font-family: var(--font-m);
          font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase;
          white-space: nowrap; transition: background 0.22s;
        }
        .btn-a:hover { background: #e84630; }
        .btn-b {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 13px 28px; background: transparent; color: var(--text-2);
          font-family: var(--font-m);
          font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase;
          border: 1px solid var(--border); white-space: nowrap;
          transition: border-color 0.22s, color 0.22s;
        }
        .btn-b:hover { border-color: var(--border-hi); color: var(--text-1); }
        @media (max-width: 900px) {
          .section { grid-template-columns: 1fr; padding: 64px 20px; }
          .btns { flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
      <section className="section" id="contact" ref={ref as React.RefObject<HTMLElement>}>
        <div className={`sr ${visible ? 'in' : ''}`}>
          <h2 className="headline">Ready to Build<br />Your <em>Narrative?</em></h2>
          <p className="sub">Need sharp content, a KOL strategy, or a research piece that cuts through the noise? Let us talk.</p>
        </div>
        <div className={`btns sr ${visible ? 'in' : ''} d2`}>
          <a href="https://t.me/decentralizedverse" target="_blank" rel="noopener noreferrer" className="btn-a">
            Telegram &#8594;
          </a>
          <a href="https://x.com/decentralpapi" target="_blank" rel="noopener noreferrer" className="btn-b">
            Follow on X
          </a>
        </div>
      </section>
    </>
  )
}
