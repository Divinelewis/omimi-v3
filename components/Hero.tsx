import { useEffect, useState } from "react";

export default function Hero() {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), 120);
    return () => clearTimeout(t);
  }, []);

  const s = (delay: number): React.CSSProperties =>
    go
      ? { animation: `fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s both` }
      : { opacity: 0 };

  const preventDefault = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 66px;
          position: relative;
          overflow: hidden;
        }

        /* ── LEFT ── */
        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
          position: relative;
          z-index: 2;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-m);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 28px;
        }
        .tag-line {
          width: 24px;
          height: 1px;
          background: var(--red);
        }

        .name {
          font-family: var(--font-d);
          font-size: clamp(5rem, 8vw, 9rem);
          font-weight: 700;
          line-height: 0.9;
          color: var(--text-1);
          letter-spacing: -0.03em;
          margin-bottom: 28px;
        }
        .name-red {
          color: var(--red);
          font-style: italic;
        }

        .rule {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .rule-line {
          height: 1px;
          background: var(--border);
          flex: 1;
          max-width: 60px;
        }
        .rule-line-animated {
          height: 1px;
          background: var(--red);
          width: 0;
          animation: lineGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both;
        }
        .rule-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--red);
        }

        .bio {
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-2);
          line-height: 1.8;
          max-width: 440px;
          margin-bottom: 40px;
        }
        .bio strong {
          color: var(--text-1);
          font-weight: 500;
        }

        .socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }
        .social {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-m);
          font-size: 0.67rem;
          letter-spacing: 0.07em;
          color: var(--text-3);
          padding: 9px 16px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          transition: all 0.22s;
        }
        .social:hover {
          border-color: var(--red);
          color: var(--text-1);
          background: var(--red-soft);
        }
        .social svg {
          width: 12px;
          height: 12px;
          fill: currentColor;
          flex-shrink: 0;
        }

        .stats {
          display: flex;
          gap: 32px;
        }
        .stat {
          padding-left: 14px;
          border-left: 2px solid var(--red);
        }
        .stat-n {
          font-family: var(--font-d);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-1);
          line-height: 1;
        }
        .stat-l {
          font-family: var(--font-m);
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-4);
          margin-top: 4px;
        }

        /* ── RIGHT ── */
        .right {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }

        .pfp {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          animation: heroImg 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
          -webkit-user-drag: none;
          user-select: none;
          pointer-events: none;
        }

        /* ── GRID LINES ON TOP ── */
        .hero-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.15;
          z-index: 5; /* above pfp image */
          pointer-events: none;
        }

        .glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 55%;
          background: radial-gradient(
            ellipse,
            var(--red-glow) 0%,
            transparent 70%
          );
          filter: blur(48px);
          z-index: 1;
          pointer-events: none;
        }

        .badge {
          position: absolute;
          bottom: 36px;
          right: 36px;
          z-index: 10;
          text-align: right;
        }
        .badge-text {
          font-family: var(--font-m);
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-4);
        }
        .badge-bar {
          width: 30px;
          height: 1px;
          background: var(--red-dim);
          margin-left: auto;
          margin-top: 6px;
        }

        .scroll-cue {
          position: absolute;
          bottom: 32px;
          left: 60px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-m);
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-4);
        }
        .cue-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--red);
          animation: pulse 2s ease infinite;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .left {
            padding: 56px 20px 44px;
          }
          .right {
            height: 80vw;
          }
          .scroll-cue {
            display: none;
          }
        }
      `}</style>

      <section className="hero" id="hero">
        <div className="left">
          <div className="tag" style={s(0.3)}>
            <span className="tag-line" />
            KOL, Ambassador &amp; Content Strategist
          </div>

          <h1 className="name" style={s(0.45)}>
            Omi<span className="name-red">mi</span>
          </h1>

          <div className="rule" style={s(0.55)}>
            <div className="rule-line-animated" />
            <div className="rule-dot" />
            <div className="rule-line" />
          </div>

          <p className="bio" style={s(0.65)}>
            I turn{" "}
            <strong>complex narratives into sharp, compelling content</strong>{" "}
            that moves communities, drives protocol growth, and converts readers
            into believers. Two years embedded in the space.
          </p>

          <div className="socials" style={s(0.8)}>
            <a
              href="https://x.com/decentralpapi"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @decentralpapi
            </a>
            <a
              href="https://t.me/decentralizedverse"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <svg viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              @decentralizedverse
            </a>
          </div>

          <div className="stats" style={s(0.95)}>
            <div className="stat">
              <div className="stat-n">100+</div>
              <div className="stat-l">Articles</div>
            </div>
            <div className="stat">
              <div className="stat-n">30+</div>
              <div className="stat-l">Clients</div>
            </div>
            <div className="stat">
              <div className="stat-n">2yr+</div>
              <div className="stat-l">Experience</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="glow" />
          <img
            className="pfp"
            src="/pfp.jpg"
            alt="Omimi"
            draggable={false}
            onContextMenu={preventDefault}
            onDragStart={preventDefault}
            onTouchStart={preventDefault}
          />
          {/* NEW: Grid lines on top of image */}
          <div className="hero-lines" />

          <div className="badge">
            <div className="badge-text">Est. 2021</div>
            <div className="badge-bar" />
          </div>
        </div>

        <div className="scroll-cue">
          <div className="cue-dot" />
          Scroll to explore
        </div>
      </section>
    </>
  );
}
