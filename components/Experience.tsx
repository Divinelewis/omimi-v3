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
    name: "Bonga Meme",
    status: "Completed",
    metric: "$100K → $5M",
    desc: "Drove growth by scaling market cap from $100K to over $5M through targeted engagement and community strategy.",
    logo: "/logos/bonga.png",
    avatarBg: "#6b1414",
    link: "#",
  },

  {
    id: 2,
    name: "Backpack Exchange",
    status: "Completed",
    metric: "$500K Volume",
    desc: "Contributed over 500 direct referrals and generated $500K in trading volume within a single month.",
    logo: "/logos/backpack.png",
    avatarBg: "#112244",
    link: "#",
  },

  {
    id: 3,
    name: "Golden Donkey",
    status: "Completed",
    metric: "1,000 NFTs Sold",
    desc: "Helped successfully sell out 1,000 NFTs from their collection through targeted KOL outreach and narrative.",
    logo: "/logos/golden.png",
    avatarBg: "#4a3000",
    link: "#",
  },

  {
    id: 4,
    name: "Ulalo",
    status: "Completed",
    metric: null,
    desc: "Boosted project visibility and brand awareness within the Web3 community through consistent content and engagement.",
    logo: "/logos/ulalo.png",
    avatarBg: "#0f3020",
    link: "#",
  },

  {
    id: 5,
    name: "Onlyplayclub",
    status: "Completed",
    metric: "8K → 15K in 1 week",
    desc: "Increased their reach by growing followers from 8K to over 15K in a week, significantly enhancing brand visibility.",
    logo: "/logos/onlyplay.png",
    avatarBg: "#22103a",
    link: "#",
  },

  {
    id: 6,
    name: "OTI",
    status: "Ongoing",
    metric: null,
    desc: "Currently driving adoption by supporting VIP badge sales and strengthening community engagement across channels.",
    logo: "/logos/oti.png",
    avatarBg: "#2a1035",
    link: "#",
  },

  {
    id: 7,
    name: "Switchive",
    status: "Ongoing",
    metric: null,
    desc: "Assisting with brand visibility and onboarding new users through active referrals and promotional campaigns.",
    logo: "/logos/switchive.png",
    avatarBg: "#0a2525",
    link: "#",
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
