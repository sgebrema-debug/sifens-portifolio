'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = path === '/';

  return (
    <header className={isHome ? 'site-header home-header' : 'site-header'}>
      <div className="shell nav">
        {!isHome && (
          <a href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">sm<span>.</span></span>
            <span>Sifen Mekonnen</span>
          </a>
        )}
        <button className="menu-button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
        <nav id="nav-links" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {[['/', 'Home'], ['/about', 'About'], ['/explore', 'Portfolio'], ['/leadership-programs', 'Leadership']].map(([href, label]) => (
            <a key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="/contact" className="nav-contact" onClick={() => setOpen(false)}>Get in touch ↗</a>
        </nav>
      </div>
    </header>
  );
}