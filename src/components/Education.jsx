import { GraduationCapIcon } from './Icons';
import SectionTitle from './SectionTitle';
import { education } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="section-pad section-block">
      <SectionTitle
        title="Education"
        copy="Computer Science foundations with a growing focus on business analytics and AI."
      />
      <div className="education-grid">
        {education.map(ed => (
          <article className="education-card reveal" key={ed.degree}>
            <div className="education-icon"><GraduationCapIcon /></div>
            <span>{ed.period}</span>
            <h3>{ed.degree}</h3>
            <h4>{ed.school}</h4>
            <p>{ed.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
