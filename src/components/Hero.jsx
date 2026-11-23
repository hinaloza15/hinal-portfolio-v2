import { ArrowDownRightIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, SparklesIcon } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-copy reveal">
        <div className="eyebrow"><SparklesIcon size={15} /> AI · Analytics · Software</div>
        <h1>Hi, I’m <span className="gradient-text">Hinal.</span></h1>
        <h2>I build software, explore AI, and work with data</h2>
        <p className="hero-lede">
          I’m currently pursuing an MS in Business Analytics at UIC, with a background in Computer Science. I enjoy building useful applications and learning new technologies through hands-on projects
        </p>
        <div className="hero-meta"><MapPinIcon size={16} /> Chicago, IL <span>•</span> MS Business Analytics @ UIC</div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">View my work <ArrowDownRightIcon size={17} /></a>
          <a className="btn btn-ghost" href="mailto:hinaloza15@gmail.com"><MailIcon size={17} /> Say hello</a>
        </div>
        <div className="hero-social-row">
          <a href="https://github.com/hinaloza15" target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub</a>
          <a href="https://www.linkedin.com/in/hinal-oza-93633b223/" target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> LinkedIn</a>
        </div>
      </div>

      <div className="hero-visual reveal delay-1">
        <div className="photo-frame hero-photo">
          <img src="/images/chicago.jpg" alt="Hinal Oza in downtown Chicago" />
          <div className="photo-shade" />
        </div>
        <div className="floating-card floating-top">GraphRAG · GenAI · Risk</div>
        <div className="floating-card floating-bottom">open to data + AI opportunities</div>
      </div>
    </section>
  );
}
