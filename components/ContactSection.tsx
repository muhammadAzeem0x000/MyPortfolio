"use client";

import { useState } from "react";

const CONTACT_INFO = {
  email: "azeemmuhammad0150@gmail.com",
  github: "https://github.com/muhammadAzeem0x000",
  linkedin: "https://www.linkedin.com/in/muhammadAzeem0x000",
  mailtoSubject: "Project Inquiry — Muhammad Azeem",
  mailtoBody: "Hi Muhammad,%0D%0A%0D%0AI came across your portfolio and would like to discuss a project / role.%0D%0A%0D%0ABest regards,",
};

function Arrow() {
  return <span aria-hidden="true" className="contact-arrow">↗</span>;
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    CONTACT_INFO.mailtoSubject
  )}&body=${CONTACT_INFO.mailtoBody}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-signal">
        <i />
        <span>DIRECT COMMUNICATION CHANNELS</span>
      </div>

      <p className="section-index">05 / GET IN TOUCH</p>
      <h2>
        Have a system worth<br /><em>building together?</em>
      </h2>

      <p className="contact-copy">
        I’m available for full-time engineering roles, high-impact contract builds,
        and applied AI systems. Reach out directly through any channel below—I typically
        respond within 24 hours.
      </p>

      {/* Live availability banner */}
      <div className="contact-status-bar">
        <div className="status-item">
          <span className="status-indicator live" />
          <span>Status: <strong>Open to Full-Time &amp; Contracts</strong></span>
        </div>
        <div className="status-divider" />
        <div className="status-item">
          <span>Response time: <strong>&lt; 24 hours</strong></span>
        </div>
      </div>

      {/* Communication Cards Grid */}
      <div className="contact-channels-grid">
        {/* 1. Primary Email Card */}
        <div className="contact-card contact-card-featured">
          <div className="contact-card-header">
            <span className="channel-tag">PRIMARY INBOX</span>
            <span className="channel-beacon"><i /> FASTEST RESPONSE</span>
          </div>
          <div className="contact-card-body">
            <h3>Direct Email</h3>
            <p className="channel-value">{CONTACT_INFO.email}</p>
            <p className="channel-description">
              Best for project specifications, technical inquiries, and full-time role discussions.
            </p>
          </div>
          <div className="contact-card-actions">
            <a className="button button-primary contact-main-btn" href={mailtoLink}>
              <span>Send an Email</span>
              <Arrow />
            </a>
            <button
              type="button"
              className={`button button-secondary copy-btn ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
            >
              <span>{copied ? "Copied to Clipboard! ✓" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* 2. LinkedIn Direct Message Card */}
        <div className="contact-card">
          <div className="contact-card-header">
            <span className="channel-tag">PROFESSIONAL NETWORK</span>
          </div>
          <div className="contact-card-body">
            <h3>LinkedIn Chat</h3>
            <p className="channel-description">
              Connect directly for professional opportunities, network conversations, and quick messaging.
            </p>
          </div>
          <div className="contact-card-actions">
            <a
              className="button button-secondary contact-link-btn"
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span>Message on LinkedIn</span>
              <Arrow />
            </a>
          </div>
        </div>

        {/* 3. GitHub Source & Discussions Card */}
        <div className="contact-card">
          <div className="contact-card-header">
            <span className="channel-tag">OPEN SOURCE &amp; CODE</span>
          </div>
          <div className="contact-card-body">
            <h3>GitHub Profile</h3>
            <p className="channel-description">
              Review codebases, architectural implementations, and public project repositories.
            </p>
          </div>
          <div className="contact-card-actions">
            <a
              className="button button-secondary contact-link-btn"
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>View GitHub Repos</span>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
