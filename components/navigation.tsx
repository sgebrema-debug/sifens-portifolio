'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav">
        <button className="menu-button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
        <nav id="nav-links" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {[['/', 'Home'], ['/about', 'About'], ['/#research', 'Research'], ['/explore', 'Portfolio'], ['/leadership-programs', 'Leadership']].map(([href, label]) => (
            <a key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="/contact" className="nav-contact" onClick={() => setOpen(false)}>Get in touch ↗</a>
        </nav>
      </div>
    </header>
  );
}
