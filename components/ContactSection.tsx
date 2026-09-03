"use client";

import { useState } from "react";

const CONTACT_INFO = {
  email: "azeemmuhammad0150@gmail.com",
  github: "https://github.com/muhammadAzeem0x000",
  linkedin: "https://www.linkedin.com/in/muhammad-azeem012",
};

function Arrow() {
  return <span aria-hidden="true" className="contact-arrow">↗</span>;
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Role / Engineering Opportunity",
    message: "",
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please include a message of at least 10 characters.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Full-Time Role / Engineering Opportunity",
      message: "",
      honeypot: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section className="contact-section" id="contact">
      <p className="section-index">GET IN TOUCH</p>
      <h2>
        Have a system worth<br /><em>building together?</em>
      </h2>

      <p className="contact-copy">
        I’m available for full-time engineering roles, high-impact contract builds,
        and applied AI systems. Send a direct inquiry below—messages are automatically
        delivered to my primary inbox.
      </p>

      <div className="contact-layout">
        {/* Left Column: High-End Automated Contact Form */}
        <div className="contact-card contact-form-card">
          <div className="contact-card-header">
            <span className="channel-tag">SYSTEM INTAKE // DIRECT MESSAGE</span>
            <span className="channel-beacon"><i /> AUTOMATED INBOX DISPATCH</span>
          </div>

          {status === "success" ? (
            <div className="form-feedback-card success" role="alert">
              <div className="feedback-status-badge">
                <span className="badge-dot" /> DISPATCH COMPLETE
              </div>
              <h3>Message Delivered Successfully</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. Your message has been routed
                to my inbox at <strong>{CONTACT_INFO.email}</strong>. I will review your
                inquiry and respond shortly.
              </p>
              <button
                type="button"
                className="button button-secondary reset-form-btn"
                onClick={handleReset}
              >
                <span>Send another message</span>
                <Arrow />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {status === "error" && (
                <div className="form-error-banner" role="alert">
                  <span className="error-icon" aria-hidden="true">⚠</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-row form-row-split">
                <div className="form-field">
                  <label htmlFor="contact-name">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    autoComplete="name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">
                  Inquiry Focus
                </label>
                <div className="select-wrapper">
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                  >
                    <option value="Full-Time Role / Engineering Opportunity">Full-Time Role / Engineering Opportunity</option>
                    <option value="Contract / Production System Build">Contract / Production System Build</option>
                    <option value="Applied AI / Retrieval Architecture">Applied AI / Retrieval Architecture</option>
                    <option value="Technical Consultation / Other">Technical Consultation / Other</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">
                  Project Details / Message <span className="req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Outline the role, system scope, tech stack, or problem you want to solve..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              {/* Bot anti-spam honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="button button-primary contact-submit-btn"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <span className="submit-spinner" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels */}
        <div className="contact-side-col">
          {/* LinkedIn Direct Message Card */}
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

          {/* GitHub Source & Discussions Card */}
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
      </div>
    </section>
  );
}
