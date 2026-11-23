import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="section-pad contact-section reveal">
      <div className="contact-copy">
        <h2>Let’s connect.</h2>
        <p>Have an opportunity, project, or interesting problem? I’m always happy to talk about AI, analytics, data products, and software.</p>
      </div>
      <a className="btn btn-primary contact-btn" href="mailto:hinaloza15@gmail.com">Email me <ArrowUpRightIcon size={18}/></a>
      <div className="contact-links">
        <a href="https://github.com/hinaloza15" target="_blank" rel="noreferrer"><GithubIcon size={18}/> GitHub</a>
        <a href="https://www.linkedin.com/in/hinal-oza-93633b223/" target="_blank" rel="noreferrer"><LinkedinIcon size={18}/> LinkedIn</a>
        <a href="mailto:hinaloza15@gmail.com"><MailIcon size={18}/> Email</a>
      </div>
    </section>
  );
}
