import useInView from '../hooks/useInView'

interface Article {
  id: number
  client: string
  type: string
  title: string
  excerpt: string
  link: string
  accent: string
}

const ARTICLES: Article[] = [
  { id:1, client:'DeFi Pulse Network',  type:'Protocol Deep Dive',   title:'Understanding Liquidity Bootstrapping: How AMMs Are Reshaping Finance',                             excerpt:'A technical breakdown of AMM mechanics, impermanent loss mitigation, and the strategies protocols use to attract sustainable liquidity.',                            link:'#', accent:'#22c55e' },
  { id:2, client:'Arbitrum Foundation', type:'Governance Thread',     title:'Treasury Diversification and Protocol Revenue Allocation: A Community Proposal',                    excerpt:'Authored a governance thread outlining the case for treasury diversification with a clear and actionable allocation framework.',                                       link:'#', accent:'#38bdf8' },
  { id:3, client:'NFT Alpha Group',     type:'Market Analysis',       title:'The Quiet Accumulation: Why Smart Money Is Positioning in Digital Asset Infrastructure',            excerpt:'A contrarian take on current market conditions and the underlying infrastructure bets being placed by sophisticated capital.',                                          link:'#', accent:'#f472b6' },
  { id:4, client:'ZkSync Protocol',     type:'Technical Write-Up',    title:'Zero-Knowledge Proofs Explained: The Inevitable Endgame for Scalable Networks',                    excerpt:'Breaking down ZK proof systems, validity versus fault proofs, and why the tradeoffs increasingly favor ZK architecture.',                                              link:'#', accent:'#a78bfa' },
  { id:5, client:'CryptoTimes Media',   type:'Opinion Piece',         title:'Why Most Online Alpha Is Noise And How to Actually Filter Signal',                                  excerpt:'A candid essay on information asymmetry, incentive structures, and building a research thesis from first principles over hype.',                                         link:'#', accent:'#fb923c' },
  { id:6, client:'Blockchain Weekly',   type:'Ecosystem Report',      title:'Developer Activity, Tooling Maturation and What the Metrics Really Mean',                          excerpt:'An in-depth look at ecosystem metrics, separating signal from noise as on-chain developer activity reaches record highs.',                                              link:'#', accent:'#e879f9' },
]

export default function Portfolio() {
  const [ref, visible] = useInView(0.08)

  return (
    <>
      <style jsx>{`
        .section { padding: 100px 60px; max-width: 1280px; margin: 0 auto; }
        .eyebrow {
          font-family: var(--font-m);
          font-size: 0.62rem; letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--red); margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
        }
        .eyebrow::before { content: ''; display: inline-block; width: 20px; height: 1px; background: var(--red); }
        .title {
          font-family: var(--font-d);
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 700; color: var(--text-1); line-height: 1.05;
          margin-bottom: 48px;
        }
        .title em { font-style: italic; font-weight: 400; color: var(--text-3); }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        /* Card */
        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 28px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s, transform 0.3s, box-shadow 0.3s;
          height: 100%;
        }
        .card:hover {
          border-color: var(--border-hi);
          background: var(--bg-hover);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }
        .accent-line {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.25s;
        }
        .card:hover .accent-line { opacity: 1; }

        .client {
          font-family: var(--font-m);
          font-size: 0.6rem; letter-spacing: 0.16em; text-transform: uppercase;
          margin-bottom: 4px; font-weight: 500;
        }
        .type {
          font-family: var(--font-m);
          font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-4); margin-bottom: 18px;
        }
        .art-title {
          font-family: var(--font-d);
          font-size: 1.18rem; font-weight: 500;
          color: var(--text-1); line-height: 1.4;
          margin-bottom: 12px; flex: 1;
        }
        .excerpt {
          font-size: 0.84rem; font-weight: 400;
          color: var(--text-3); line-height: 1.75; margin-bottom: 24px;
        }
        .cta {
          font-family: var(--font-m);
          font-size: 0.63rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-4); display: flex; align-items: center; gap: 7px;
          margin-top: auto; transition: color 0.2s;
        }
        .card:hover .cta { color: var(--text-2); }
        .arr { display: inline-block; transition: transform 0.22s; }
        .card:hover .arr { transform: translateX(5px); }

        @media (max-width: 960px) {
          .section { padding: 70px 20px; }
          .grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section" id="work" ref={ref as React.RefObject<HTMLElement>}>
        <div className={`sr ${visible ? 'in' : ''}`}>
          <p className="eyebrow">Selected Work</p>
          <h2 className="title">Writing <em>Portfolio</em></h2>
        </div>
        <div className="grid">
          {ARTICLES.map((a, i) => (
            <div key={a.id} className={`sr ${visible ? 'in' : ''} d${Math.min(i + 1, 7) as 1|2|3|4|5|6|7}`}>
              <div
                className="card"
                onClick={() => a.link !== '#' && window.open(a.link, '_blank')}
              >
                <div className="accent-line" style={{ background: a.accent }} />
                <div className="client" style={{ color: a.accent }}>{a.client}</div>
                <div className="type">{a.type}</div>
                <h3 className="art-title">{a.title}</h3>
                <p className="excerpt">{a.excerpt}</p>
                <div className="cta">Read Article <span className="arr">&#8594;</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
