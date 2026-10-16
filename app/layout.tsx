import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { CONTACT_EMAIL } from '@/lib/contact';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sifen Mekonnen — Software Engineer & African Problem Solver',
    template: '%s | Sifen Mekonnen',
  },
  description: 'Sifen Mekonnen Gebremariam: AASTU Software Engineering graduate and MS Information Technology student at CMU-Africa, exploring AI and building thoughtful solutions for Africa.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        <Navigation />
        <main id="content">{children}</main>
        <footer>
          <div className="shell">
            <div className="footer-main">
              <div>
                <div className="eyebrow">OUR NEXT IDEA STARTS WITH A CONVERSATION</div>
                <h2>Something worth solving?<br />Let's think together.</h2>
                <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} ↗</a>
              </div>
              <div className="footer-links">
                <a href="https://github.com/SifenMk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/sifen-mekonnen-g-m-2a8794217/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="tel:+250796697713">Kigali, Rwanda · +250 796 697 713</a>
                <a href="tel:+251939390179">Ethiopia · +251 939 390 179</a>
                <a href="/explore">Explore my work →</a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Sifen Mekonnen Gebremariam</span>
              <span>Rooted in Africa. Building together.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
