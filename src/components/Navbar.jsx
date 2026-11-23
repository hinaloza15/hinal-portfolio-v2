import { useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, CloseIcon } from './Icons';

const links = [
  ['work', 'Projects'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Hinal Oza home">HO<span>.</span></a>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([id, label]) => (
          <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="nav-socials">
        <a href="https://github.com/hinaloza15" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
        <a href="https://www.linkedin.com/in/hinal-oza-93633b223/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
        <a href="mailto:hinaloza15@gmail.com" aria-label="Email"><MailIcon size={18} /></a>
      </div>
      <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}
