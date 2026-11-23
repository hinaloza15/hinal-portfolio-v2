export default function SectionTitle({ kicker, title, copy }) {
  return (
    <div className="section-title reveal">
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
