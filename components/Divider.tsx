export default function Divider() {
  return (
    <>
      <style jsx>{`
        .d {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--border) 15%, var(--border) 85%, transparent);
          margin: 0 60px;
        }
        @media (max-width: 768px) { .d { margin: 0 20px; } }
      `}</style>
      <div className="d" />
    </>
  )
}
