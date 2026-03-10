import useInView from "../hooks/useInView";

interface Project {
  id: number;
  name: string;
  status: "Completed" | "Ongoing";
  metric: string | null;
  desc: string;
  logo: string;
  avatarBg: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "RuneMine - Mine Labs",
    status: "Completed",
    metric: "KOL Manager",
    desc: "Led KOL initiatives at Runemine, coordinating efforts by a team of KOLs to expand and support user adoption of the Bitcoin cross-chain trading app.",
    logo: "/logos/runemine.jpg",
    avatarBg: "#2a1035",
    link: "https://x.com/minelabs_",
  },

  {
    id: 2,
    name: "Bluefin App",
    status: "Completed",
    metric: "Ambassador",
    desc: "Successfully onboarded 429 users and drove $400K+ in trading volume through targeted community engagement and promotion.",
    logo: "/logos/bluefin.jpg",
    avatarBg: "#0f3020",
    link: "https://x.com/bluefinapp",
  },

  {
    id: 3,
    name: "Binance Square",
    status: "Completed",
    metric: "KOL",
    desc: "Leveraged Binance Square to publish crypto insights and new listing informations, engage the community, and contribute to user growth and platform visibility",
    logo: "/logos/binance.jpg",
    avatarBg: "#112244",
    link: "https://x.com/binance",
  },

  {
    id: 4,
    name: "Immortal Rising",
    status: "Completed",
    metric: "Ambassador",
    desc: "Helped to successfully grow the player community, engaging users, and promoted the game across social platforms.",
    logo: "/logos/immortal.jpg",
    avatarBg: "#4a3000",
    link: "https://x.com/immortalrising2",
  },

  {
    id: 5,
    name: "DackieSwap",
    status: "Completed",
    metric: "Ambassador",
    desc: "Fostered community participation and created awareness to support Dackieswap's growth in Crypto Twitter.",
    logo: "/logos/dackieswap.jpg",
    avatarBg: "#0f3020",
    link: "https://x.com/dackieswap",
  },

  {
    id: 6,
    name: "DeXRP",
    status: "Completed",
    metric: "KOL",
    desc: "I promoted the platform through creative contents and community engagement while helping drive user awareness and adoption.",
    logo: "/logos/dexrp.jpg",
    avatarBg: "#6b1414",
    link: "https://x.com/dexrp_io",
  },

  {
    id: 7,
    name: "KCEX",
    status: "Completed",
    metric: "KOL",
    desc: "Helped new users navigate the platform and created meaningful interactions within the KCEX community.",
    logo: "/logos/kcex.jpg",
    avatarBg: "#2a1035",
    link: "https://x.com/kcex_official",
  },

  {
    id: 8,
    name: "Brickken",
    status: "Completed",
    metric: "Ambassador",
    desc: "I produced educational contents weekly and provided insights to drive user growth on their tokenization platform.",
    logo: "/logos/brickken.jpg",
    avatarBg: "#2a1035",
    link: "https://x.com/brickken",
  },

  {
    id: 9,
    name: "Qzino.com",
    status: "Ongoing",
    metric: null,
    desc: "Partner with Qzino, driving brand visibility and onboarding new users through active referrals and promotional campaigns.",
    logo: "/logos/qzino.jpg",
    avatarBg: "#0a2525",
    link: "https://x.com/qzino_official",
  },
];

export default function Experience() {
  const [ref, visible] = useInView(0.08);

  return (
    <>
      <style jsx>{`
        .section {
          padding: 100px 60px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .header {
          margin-bottom: 56px;
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
        }

        .title em {
          font-style: italic;
          font-weight: 400;
          color: var(--text-3);
        }

        .subtitle {
          font-family: var(--font-d);
          font-size: 1.05rem;
          font-style: italic;
          color: var(--text-3);
          margin-top: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          overflow: hidden;
          transition:
            border-color 0.25s,
            background 0.25s,
            transform 0.3s,
            box-shadow 0.3s;
        }

        .card:hover {
          border-color: var(--border-hi);
          background: var(--bg-hover);
          transform: translateY(-3px);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px var(--border-hi);
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .left-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pname {
          font-size: 0.97rem;
          font-weight: 500;
          color: var(--text-1);
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-m);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 3px;
        }

        .badge-done {
          background: rgba(214, 59, 39, 0.15);
          color: #f0836f;
          border: 1px solid rgba(214, 59, 39, 0.35);
        }

        .badge-live {
          background: var(--green-bg);
          color: #4ade80;
          border: 1px solid var(--green-bd);
        }

        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .badge-done .dot {
          background: #f0836f;
        }
        .badge-live .dot {
          background: #4ade80;
        }

        .metric {
          display: inline-flex;
          font-family: var(--font-m);
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: #f0836f;
          background: rgba(214, 59, 39, 0.14);
          border: 1px solid rgba(214, 59, 39, 0.28);
          padding: 5px 13px;
          border-radius: 3px;
          width: fit-content;
        }

        .desc {
          font-size: 0.87rem;
          font-weight: 400;
          color: var(--text-3);
          line-height: 1.75;
          flex: 1;
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
        id="experience"
        ref={ref as React.RefObject<HTMLElement>}
      >
        <div className={`header sr ${visible ? "in" : ""}`}>
          <p className="eyebrow">Projects Worked For</p>
          <h2 className="title">
            Work <em>Experience</em>
          </h2>
          <p className="subtitle">
            Clients and protocols I have contributed to
          </p>
        </div>

        <div className="grid">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`sr ${visible ? "in" : ""}`}>
              <div className="card">
                <div className="card-top">
                  <div className="left-row">
                    <div className="avatar" style={{ background: p.avatarBg }}>
                      <img src={p.logo} alt={p.name} />
                    </div>

                    <div>
                      <div className="pname">{p.name}</div>

                      <div
                        className={`badge ${p.status === "Ongoing" ? "badge-live" : "badge-done"}`}
                      >
                        <span className="dot" />
                        {p.status}
                      </div>
                    </div>
                  </div>

                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    ↗
                  </a>
                </div>

                {p.metric && <div className="metric">{p.metric}</div>}
                <p className="desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
