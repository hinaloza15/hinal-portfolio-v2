function IconBase({ size = 20, children, viewBox = '0 0 24 24' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const GithubIcon = ({ size }) => <IconBase size={size}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></IconBase>;
export const LinkedinIcon = ({ size }) => <IconBase size={size}><rect x="3" y="9" width="4" height="12" rx="1"/><path d="M5 3v.01"/><path d="M11 21V9h4v2c1-1.5 2.5-2.3 4-2 2 .3 3 1.8 3 4.8V21h-4v-6.2c0-1.6-.6-2.8-2-2.8s-2 1.2-2 2.8V21z"/></IconBase>;
export const MailIcon = ({ size }) => <IconBase size={size}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></IconBase>;
export const MenuIcon = ({ size }) => <IconBase size={size}><path d="M4 7h16M4 12h16M4 17h16"/></IconBase>;
export const CloseIcon = ({ size }) => <IconBase size={size}><path d="m6 6 12 12M18 6 6 18"/></IconBase>;
export const ArrowUpRightIcon = ({ size }) => <IconBase size={size}><path d="M7 17 17 7M7 7h10v10"/></IconBase>;
export const ArrowDownRightIcon = ({ size }) => <IconBase size={size}><path d="m7 7 10 10M17 7v10H7"/></IconBase>;
export const MapPinIcon = ({ size }) => <IconBase size={size}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></IconBase>;
export const SparklesIcon = ({ size }) => <IconBase size={size}><path d="m12 3 1.2 3.1L16 7.3l-2.8 1.2L12 12l-1.2-3.5L8 7.3l2.8-1.2L12 3Z"/><path d="m18.5 13 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z"/><path d="m5.5 14 .9 2.2 2.1.8-2.1.9-.9 2.1-.8-2.1-2.2-.9 2.2-.8.8-2.2Z"/></IconBase>;
export const CoffeeIcon = ({ size }) => <IconBase size={size}><path d="M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2"/><path d="M8 3v2M12 3v2"/></IconBase>;
export const GraduationCapIcon = ({ size }) => <IconBase size={size}><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/></IconBase>;
export const ActivityIcon = ({ size }) => <IconBase size={size}><path d="M3 12h4l2-5 4 10 2-5h6"/></IconBase>;
export const BrainIcon = ({ size }) => <IconBase size={size}><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3c0 1 .4 1.8 1 2.4A3 3 0 0 0 8 18h1"/><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3c0 1-.4 1.8-1 2.4A3 3 0 0 1 16 18h-1"/><path d="M12 3v18M9 9h3M12 14h3"/></IconBase>;
export const DollarIcon = ({ size }) => <IconBase size={size}><circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.7-.5-1.7-.8-3-.8-1.8 0-3 .8-3 2s1 1.8 3 2.2 3 1 3 2.2-1.2 2.2-3 2.2c-1.4 0-2.5-.4-3.3-1"/><path d="M12 5.8v12.4"/></IconBase>;
export const FileSearchIcon = ({ size }) => <IconBase size={size}><path d="M6 3h8l4 4v5"/><path d="M14 3v5h5"/><rect x="4" y="3" width="14" height="18" rx="2"/><circle cx="15.5" cy="15.5" r="2.5"/><path d="m17.3 17.3 2.2 2.2"/></IconBase>;
export const NetworkIcon = ({ size }) => <IconBase size={size}><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M12 7v4M7 17l4-4M17 17l-4-4"/></IconBase>;
export const ShieldCheckIcon = ({ size }) => <IconBase size={size}><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></IconBase>;
