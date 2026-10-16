import type { Metadata } from 'next';
import { CopyEmail } from '@/components/copy-email';
import { CONTACT_EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Get in touch',
  description: 'Contact Sifen Mekonnen about projects, ideas, and opportunities to build together.',
};

export default function Contact() {
  return (
    <section className="shell detail contact-page">
      <div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>Get in touch</span></div>
      <div className="eyebrow">LET'S START A CONVERSATION</div>
      <h1>Have an idea?<br /><em>I'd love to hear it.</em></h1>
      <p className="explore-intro">A project, a question, or a chance to work together—reach me at:</p>
      <div className="contact-panel">
        <span className="journey-label">MY EMAIL</span>
        <p className="contact-address">{CONTACT_EMAIL}</p>
        <div className="contact-actions">
          <CopyEmail />
          <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Open your email app ↗</a>
        </div>
      </div>
      <a className="text-link" href="/explore">Explore my work →</a>
    </section>
  );
}
