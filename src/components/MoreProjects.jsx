import { ArrowUpRightIcon, GithubIcon } from './Icons';
import SectionTitle from './SectionTitle';
import { moreProjects } from '../data/content';

export default function MoreProjects() {
  return (
    <section className="section-pad section-block">
      <SectionTitle
        title="More Projects"
        copy="A few full-stack builds, experiments, and ideas I’m continuing to develop."
      />
      <div className="more-projects-grid">
        {moreProjects.map(project => (
          <article className="small-project reveal" key={project.title}>
            <div><span className="small-project-dot"/><h3>{project.title}</h3></div>
            <p>{project.copy}</p>
            <div className="tag-row compact">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
            <div className="small-project-actions">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon size={15}/> Code</a>}
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRightIcon size={14}/></a>}
              {!project.github && !project.live && <span>In progress</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
