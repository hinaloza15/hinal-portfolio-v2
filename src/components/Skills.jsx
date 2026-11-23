import SectionTitle from './SectionTitle';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <section className="section-pad section-block">
      <SectionTitle
        title="Skills"
        copy="Tools I use to build, analyze, experiment, and communicate results."
      />
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <article className="skill-card reveal" key={group}>
            <h3>{group}</h3>
            <div>{items.map(item => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
