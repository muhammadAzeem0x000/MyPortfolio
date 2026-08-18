import Link from "next/link";

interface FooterProps {
  showContactCta?: boolean;
}

export function Footer({ showContactCta = false }: FooterProps) {
  return (
    <>
      {showContactCta && (
        <section className="contact-section" id="contact">
          <div className="contact-signal">
            <i />
            <span>SIGNAL OPEN</span>
          </div>
          <p className="section-index">05 / START A CONVERSATION</p>
          <h2>
            Have a hard system<br />worth <em>building well?</em>
          </h2>
          <p className="contact-copy">
            I’m interested in applied AI, backend-heavy products, and engineering
            problems where correctness matters as much as the interface.
          </p>
          <a
            className="contact-button"
            href="https://github.com/muhammadAzeem0x000"
            target="_blank"
            rel="noreferrer"
          >
            <span>LET’S COMPARE NOTES</span>
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      )}

      <footer>
        <div className="footer-brand">
          MUHAMMAD<br />AZEEM
        </div>
        <p>Software Engineer building Full-Stack &amp; Applied AI Systems.</p>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <Link href="/case-study/tracepilot">TracePilot ↗</Link>
          <Link href="/case-study/supportflow">SupportFlow ↗</Link>
          <Link href="/case-study/signalroom">SignalRoom ↗</Link>
          <Link href="/case-study/musclebot">MuscleBot ↗</Link>
          <a href="https://github.com/muhammadAzeem0x000" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
        <div className="footer-meta">DESIGNED WITH INTENT / ENGINEERED FOR CLARITY</div>
      </footer>
    </>
  );
}
