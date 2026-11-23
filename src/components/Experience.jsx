import SectionTitle from './SectionTitle';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section-pad section-block">
      <SectionTitle
        title="Experience"
        copy="Work across software, data, analytics, and operations."
      />
      <div className="timeline-modern">
        {experiences.map((exp, i) => (
          <article className="experience-row reveal" key={`${exp.company}-${exp.role}`}>
            <div className="exp-period">{exp.period}</div>
            <div className="exp-marker"><span>{i + 1}</span></div>
            <div className="exp-copy"><h3>{exp.role}</h3><h4>{exp.company}</h4><ul>{exp.details.map(d => <li key={d}>{d}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </section>
  );
}
