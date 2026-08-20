import Link from "next/link";
import { ContactSection } from "./ContactSection";

interface FooterProps {
  showContactCta?: boolean;
}

export function Footer({ showContactCta = false }: FooterProps) {
  return (
    <>
      {showContactCta && <ContactSection />}

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
          <a href="mailto:azeemmuhammad0150@gmail.com" target="_blank" rel="noreferrer">
            Email ↗
          </a>
          <a href="https://www.linkedin.com/in/muhammadAzeem0x000" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://github.com/muhammadAzeem0x000" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
        <div className="footer-meta">DESIGNED WITH INTENT / ENGINEERED FOR CLARITY</div>
      </footer>
    </>
  );
}
