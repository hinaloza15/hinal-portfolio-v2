import { CoffeeIcon, MapPinIcon, SparklesIcon } from './Icons';
import SectionTitle from './SectionTitle';

export default function Personal() {
  return (
    <section className="section-pad section-block personal-section">
      <SectionTitle
        title="Beyond the Terminal"
        copy="A few things that keep me curious when I’m not working with data or code."
      />
      <div className="personal-grid reveal">
        <div className="personal-photo"><img src="/images/chicago.jpg" alt="Chicago Riverwalk" /></div>
        <div className="personal-card"><MapPinIcon/><h3>Chicago</h3><p>My favorite backdrop for walks, ideas, and the occasional debugging break.</p></div>
        <div className="personal-card"><CoffeeIcon/><h3>Off-screen</h3><p>Cooking experiments, crocheting, trying new cafés, and keeping a growing list of side-project ideas.</p></div>
        <div className="personal-card"><SparklesIcon/><h3>Currently</h3><p>Exploring financial risk, responsible AI, agentic workflows, and how to make AI systems easier to trust.</p></div>
      </div>
    </section>
  );
}
