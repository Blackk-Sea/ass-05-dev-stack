import Logo from './Logo.jsx';
import { goToSection } from '../utils/navigation.js';

const LINK_GROUPS = [
  {
    heading: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="shell py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <ul className="mt-5 flex flex-wrap items-center gap-5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-medium text-slate-500 transition hover:text-brand-solid"
                  >
                    {social.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav
              key={group.heading}
              aria-label={group.heading}
              className="lg:col-span-2 lg:col-start-auto"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {group.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => goToSection(event, link.href, link.label)}
                      className="text-sm text-slate-500 transition hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">© 2026 Dev Stack. All rights reserved.</p>

          <ul className="flex items-center gap-6">
            {[
              { label: 'Privacy', href: '#privacy' },
              { label: 'Terms', href: '#terms' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => goToSection(event, link.href, link.label)}
                  className="text-sm text-slate-400 transition hover:text-slate-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
