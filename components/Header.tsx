import Link from "next/link";

interface HeaderProps {
  isCaseStudy?: boolean;
}

export function Header({ isCaseStudy = false }: HeaderProps) {
  return (
    <header className="site-header" role="banner">
      <Link className="brand" href="/" aria-label="Muhammad Azeem, back to home">
        <span className="brand-mark">MA</span>
        <span className="brand-copy">
          MUHAMMAD AZEEM
          <small>SOFTWARE ENGINEER</small>
        </span>
      </Link>

      <nav aria-label="Main navigation">
        {isCaseStudy ? (
          <>
            <Link href="/#work">← All Systems</Link>
            <Link href="/#expertise">Range</Link>
            <Link href="/#philosophy">Philosophy</Link>
            <Link href="/#contact">Contact</Link>
          </>
        ) : (
          <>
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#contact">Contact</a>
          </>
        )}
      </nav>

      <a
        className="status-pill"
        href={isCaseStudy ? "/#contact" : "#contact"}
        title="Available for full-time roles & engineering projects"
        aria-label="Available for hire, jump to contact section"
      >
        <i /> Available for hire
      </a>
    </header>
  );
}
