'use client';

import { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact';

export function CopyEmail() {
  const [status, setStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus('Email address copied.');
    } catch {
      setStatus('Select the email address above and copy it.');
    }
  }

  return (
    <div className="copy-email">
      <button type="button" className="button" onClick={copyEmail}>Copy email address</button>
      <p className="contact-status" role="status">{status}</p>
    </div>
  );
}
