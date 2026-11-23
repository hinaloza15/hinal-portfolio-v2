import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="section-pad section-block about-section">
      <SectionTitle
        title="About Me"
        copy="A little about how I think, build, and learn"
      />
      <div className="about-grid reveal">
        <div className="about-copy">
          <p className="large-copy">
            I’m a Business Analytics graduate student at UIC with a background in Computer Science
          </p>
          <p>
            I enjoy building software, working with data, and exploring AI through hands-on projects. I’m especially interested in creating useful applications and learning new technologies by actually using them.
          </p>
          <p>
            Outside school and work, I like exploring Chicago, trying new recipes, crocheting, and building side projects that usually start with “what if I made this?”
          </p>
          <div className="about-facts">
            <div><strong>Software + AI</strong><span>Building useful applications and experimenting with new technology</span></div>
            <div><strong>Always Learning</strong><span>Learning by building, testing, and improving</span></div>
            <div><strong>Builder mindset</strong><span>Turning ideas into something practical and usable</span></div>
          </div>
        </div>
        <div className="photo-frame about-photo"><img src="/images/graduation.JPEG" alt="Hinal Oza at UIC graduation" /></div>
      </div>
    </section>
  );
}
