import { useEffect, useState } from 'react';

import Logo from './Logo.jsx';
import { goToSection } from '../utils/navigation.js';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Highlight the section the reader is currently inside of.
  useEffect(() => {
    const sections = ['home', 'technologies']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const onScroll = () => {
      const offset = window.scrollY + 120;
      let current = sections[0].id;

      sections.forEach((section) => {
        if (section.offsetTop <= offset) current = section.id;
      });

      setActiveSection(`#${current}`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const handleNavClick = (event, link) => {
    setMenuOpen(false);
    goToSection(event, link.href, link.label);
  };

  const navLinkClass = (link) =>
    [
      'text-sm font-medium transition-colors',
      activeSection === link.href ? 'text-brand-solid' : 'text-slate-600 hover:text-slate-900',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="shell">
        {/* ── Mobile bar: hamburger · brand · auth ───────────────────── */}
        <div className="flex items-center justify-between gap-2 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="-ml-1 grid h-10 w-10 place-items-center rounded-xl text-slate-700 transition hover:bg-slate-100"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>

          <Logo size="sm" />

          <div className="flex items-center gap-1.5">
            <a
              href="#sign-in"
              onClick={(event) => goToSection(event, '#sign-in', 'Sign in')}
              className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Sign In
            </a>
            <a
              href="#sign-up"
              onClick={(event) => goToSection(event, '#sign-up', 'Sign up')}
              className="rounded-full bg-brand px-3.5 py-2 text-xs font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* ── Desktop bar: brand · links · auth ──────────────────────── */}
        <div className="hidden items-center justify-between py-4 lg:flex">
          <Logo />

          <nav aria-label="Main navigation" className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link)}
                className={navLinkClass(link)}
                aria-current={activeSection === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#sign-in"
              onClick={(event) => goToSection(event, '#sign-in', 'Sign in')}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Sign In
            </a>
            <a
              href="#sign-up"
              onClick={(event) => goToSection(event, '#sign-up', 'Sign up')}
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 active:brightness-95"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown menu ───────────────────────────────────── */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="shell animate-menu-in border-t border-slate-100 pb-4 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link)}
                  className={`block rounded-xl px-3 py-3 text-base font-medium transition hover:bg-slate-50 ${
                    activeSection === link.href ? 'text-brand-solid' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
