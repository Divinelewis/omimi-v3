import useInView from "../hooks/useInView";

interface Article {
  id: number;
  client: string;
  type: string;
  title: string;
  excerpt: string;
  link: string;
  accent: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    client: "FolksFinance",
    type: "Cross-Chain Infrastructure Analysis",
    title: "2M+ Native Cross-Chain Transfers: Real On-Chain Usage Beyond Hype",
    excerpt:
      "$FOLKS surpassed 2,157,164 native token transfers across EVM chains, moving over $2.27B in value. Unlike wrapped-token bridges, xPortal preserves a single token identity across chains, reducing risk and fragmentation. Daily transfer patterns reveal returning users and genuine adoption, signaling robust product-market fit at the infrastructure layer.",
    link: "https://x.com/decentralpapi/status/2009898020200996918",
    accent: "#22c55e",
  },

  {
    id: 2,
    client: "xMaquina",
    type: "Robotics Investment Insight",
    title: "Democratizing Access to Private Robotics Innovation",
    excerpt:
      "xMaquina leverages a DAO to give everyday investors exposure to leading humanoid robotics companies, breaking the traditional insider-only model. By focusing on key players—1X Technologies (real-world deployment), NEURA Robotics (safe cognitive robotics), and Figure AI (general-purpose moonshot)—it enables patient, long-term investment in automation while reducing barriers to participation in the multi-trillion dollar robotics industry.",
    link: "https://x.com/decentralpapi/status/2016179382516076629",
    accent: "#38bdf8",
  },

  {
    id: 3,
    client: "0G Labs",
    type: "AI & Web3 Insight",
    title: "AI Won’t Replace You—Builders Using AI Will",
    excerpt:
      "0G Labs is positioning itself as the backend stack and OS for autonomous, on-chain, human-augmented AI applications. Success in the next tech wave favors those who adapt and build with AI, rather than avoid it. Early participation empowers coders and creators to command AI and shape the systems of the future.",
    link: "https://x.com/decentralpapi/status/1938569090919968998",
    accent: "#f472b6",
  },

  {
    id: 4,
    client: "KCEX",
    type: "Crypto Exchange User Incentives",
    title: "KCEX: Trading That Pays You to Trade",
    excerpt:
      "KCEX revolutionizes the trading experience by offering new users starting capital, zero-fee trading, and ongoing bonuses. By removing barriers and providing immediate funds to trade, KCEX empowers users to maximize profits while accessing 500+ crypto assets in a secure, FinCEN-registered platform, redefining how beginners enter the crypto market.",
    link: "https://x.com/decentralpapi/status/1887378985811685667",
    accent: "#a78bfa",
  },

  {
    id: 5,
    client: "Fere AI",
    type: "AI-Powered Crypto Insights",
    title: "Transforming Crypto Research with AI Agents",
    excerpt:
      "Fere AI empowers users with 24/7 AI agents that analyze real-time market data from Twitter, Telegram, Reddit, and more. Features like the Market Pulse Agent and Investment Agent streamline research, track sentiment, automate high-APY opportunities, and provide actionable insights, making crypto trading and investing more efficient, data-driven, and beginner-friendly.",
    link: "https://x.com/decentralpapi/status/1844053254868709581",
    accent: "#fb923c",
  },

  {
    id: 6,
    client: "Infinit Labs",
    type: "DeFi Infrastructure Insight",
    title: "Building the Foundations Behind Agentic Strategies",
    excerpt:
      "Infinit Labs is creating the infrastructure that makes one-click DeFi strategies reliable and scalable. Through Credibility Scores for trust, aligned incentives to reward effective strategies, and bridges connecting Web2 capital to on-chain opportunities, they ensure the agentic economy functions efficiently, rewarding skill and enabling broader adoption beyond early crypto users.",
    link: "https://x.com/decentralpapi/status/1951594207270805880",
    accent: "#e879f9",
  },
];

export default function Portfolio() {
  const [ref, visible] = useInView(0.08);

  return (
    <>
      <style jsx>{`
        .section {
          padding: 100px 60px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .eyebrow {
          font-family: var(--font-m);
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow::before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 1px;
          background: var(--red);
        }
        .title {
          font-family: var(--font-d);
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 700;
          color: var(--text-1);
          line-height: 1.05;
          margin-bottom: 48px;
        }
        .title em {
          font-style: italic;
          font-weight: 400;
          color: var(--text-3);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* Card */
        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition:
            border-color 0.25s,
            background 0.25s,
            transform 0.3s,
            box-shadow 0.3s;
          height: 100%;
        }
        .card:hover {
          border-color: var(--border-hi);
          background: var(--bg-hover);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .card:hover .accent-line {
          opacity: 1;
        }

        .client {
          font-family: var(--font-m);
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 4px;
          font-weight: 500;
        }
        .type {
          font-family: var(--font-m);
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-4);
          margin-bottom: 18px;
        }
        .art-title {
          font-family: var(--font-d);
          font-size: 1.18rem;
          font-weight: 500;
          color: var(--text-1);
          line-height: 1.4;
          margin-bottom: 12px;
          flex: 1;
        }
        .excerpt {
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--text-3);
          line-height: 1.75;
          margin-bottom: 24px;
        }
        .cta {
          font-family: var(--font-m);
          font-size: 0.63rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-4);
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          transition: color 0.2s;
        }
        .card:hover .cta {
          color: var(--text-2);
        }
        .arr {
          display: inline-block;
          transition: transform 0.22s;
        }
        .card:hover .arr {
          transform: translateX(5px);
        }

        @media (max-width: 960px) {
          .section {
            padding: 70px 20px;
          }
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        className="section"
        id="work"
        ref={ref as React.RefObject<HTMLElement>}
      >
        <div className={`sr ${visible ? "in" : ""}`}>
          <p className="eyebrow">Selected Work</p>
          <h2 className="title">
            Writing <em>Portfolio</em>
          </h2>
        </div>
        <div className="grid">
          {ARTICLES.map((a, i) => (
            <div
              key={a.id}
              className={`sr ${visible ? "in" : ""} d${Math.min(i + 1, 7) as 1 | 2 | 3 | 4 | 5 | 6 | 7}`}
            >
              <div
                className="card"
                onClick={() => a.link !== "#" && window.open(a.link, "_blank")}
              >
                <div className="accent-line" style={{ background: a.accent }} />
                <div className="client" style={{ color: a.accent }}>
                  {a.client}
                </div>
                <div className="type">{a.type}</div>
                <h3 className="art-title">{a.title}</h3>
                <p className="excerpt">{a.excerpt}</p>
                <div className="cta">
                  Read Article <span className="arr">&#8594;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
