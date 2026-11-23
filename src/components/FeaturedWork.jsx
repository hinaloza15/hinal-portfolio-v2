import { ArrowUpRightIcon, GithubIcon } from './Icons';
import SectionTitle from './SectionTitle';
import ProjectVisual from './ProjectVisual';
import { featuredProjects } from '../data/content';

export default function FeaturedWork() {
  return (
    <section id="work" className="section-pad section-block">
      <SectionTitle
        title="Projects"
        copy="Selected projects across AI, analytics, retrieval, and product thinking"
      />
      <div className="featured-list">
        {featuredProjects.map((project, index) => (
          <article className={`featured-project accent-${project.accent} reveal`} key={project.title}>
            <div className="project-copy">
              <div className="project-number">0{index + 1}</div>
              <span className="project-eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
              <div className="tag-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              <div className="project-actions">
                {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon size={16}/> Code</a> : <span className="muted-action">Code coming soon</span>}
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRightIcon size={15}/></a> : <span className="muted-action">Demo coming soon</span>}
              </div>
            </div>
            <ProjectVisual type={project.visual} />
          </article>
        ))}
      </div>
    </section>
  );
}
