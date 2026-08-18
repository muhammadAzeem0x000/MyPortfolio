import React from "react";
import Link from "next/link";
import { CaseStudyData, PROJECTS_LIST } from "@/lib/projects-data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface CaseStudyLayoutProps {
  data: CaseStudyData;
  visualCenterpiece: React.ReactNode;
}

export function CaseStudyLayout({ data, visualCenterpiece }: CaseStudyLayoutProps) {
  // Determine next project in strict order
  const currentIndex = PROJECTS_LIST.findIndex((p) => p.slug === data.slug);
  const nextProject = PROJECTS_LIST[(currentIndex + 1) % PROJECTS_LIST.length];

  return (
    <div className="case-study-page">
      <Header isCaseStudy={true} />

      <main className="case-study-main">
        {/* 1. Hero */}
        <section className="cs-hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="cs-hero-container">
            <div className="cs-hero-topline">
              <span className="cs-index">{data.index} / 04</span>
              <span className="cs-eyebrow">{data.eyebrow}</span>
            </div>

            <h1 className="cs-hero-title">{data.heroTitle}</h1>
            <p className="cs-hero-desc">{data.heroDescription}</p>

            <div className="cs-hero-meta">
              <div className="cs-proof-badge">
                <span className="proof-label">PRIMARY PROOF:</span>
                <strong>{data.primaryProof}</strong>
              </div>

              <div className="cs-tags-list">
                {data.tags.map((tag) => (
                  <span key={tag} className="cs-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="cs-hero-actions">
              {data.liveUrl && (
                <a
                  className="button button-primary"
                  href={data.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Live Product Demo</span>
                  <span aria-hidden="true" className="action-arrow">↗</span>
                </a>
              )}
              {data.githubUrl && (
                <a
                  className="button button-secondary"
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>View Source on GitHub</span>
                  <span aria-hidden="true" className="action-arrow">↗</span>
                </a>
              )}
              <Link className="button button-ghost" href="/#work">
                <span>← All Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Problem Statement */}
        <section className="cs-section cs-problem-section">
          <div className="cs-section-header">
            <span className="section-index">01 / THE PROBLEM</span>
            <h2>{data.problemTitle}</h2>
          </div>

          <div className="cs-problem-content">
            <p className="cs-lead-text">{data.problemSummary}</p>
            <ul className="cs-bullet-list">
              {data.problemPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>

            <div className="cs-challenge-quote">
              <span className="quote-mark">“</span>
              <p>{data.challengeQuote}</p>
            </div>
          </div>
        </section>

        {/* 3. What I Built */}
        <section className="cs-section cs-built-section">
          <div className="cs-section-header">
            <span className="section-index">02 / WHAT I BUILT</span>
            <h2>System Overview &amp; Capabilities</h2>
          </div>

          <p className="cs-lead-text">{data.builtSummary}</p>

          {data.rolesOrFeatures ? (
            <div className="cs-roles-grid">
              {data.rolesOrFeatures.map((role, idx) => (
                <div key={idx} className="cs-role-card">
                  <h3>{role.title}</h3>
                  <ul>
                    {role.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="cs-built-list-card">
              <ul className="cs-bullet-list">
                {data.builtPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 4. Architecture */}
        <section className="cs-section cs-architecture-section">
          <div className="cs-section-header">
            <span className="section-index">03 / SYSTEM ARCHITECTURE</span>
            <h2>Data Flow &amp; Infrastructure</h2>
          </div>

          <div className="cs-architecture-flow">
            {data.architectureFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="arch-flow-node">
                  <span className="node-num">0{idx + 1}</span>
                  <span className="node-text">{step}</span>
                </div>
                {idx < data.architectureFlow.length - 1 && (
                  <span className="arch-flow-arrow" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="cs-ascii-block">
            <div className="code-header">
              <span>PIPELINE ARCHITECTURE DIAGRAM</span>
            </div>
            <pre>
              <code>{data.asciiDiagram}</code>
            </pre>
          </div>

          <div className="cs-stack-container">
            <span className="stack-label">Core Technical Stack:</span>
            <div className="cs-stack-pills">
              {data.coreStack.map((tech) => (
                <span key={tech} className="stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Key Engineering Decision */}
        <section className="cs-section cs-decision-section">
          <div className="cs-section-header">
            <span className="section-index">04 / KEY ENGINEERING DECISION</span>
            <h2>{data.decisionTitle}</h2>
            <p className="cs-decision-subtitle">{data.decisionSubtitle}</p>
          </div>

          {data.decisionAscii && (
            <div className="cs-ascii-block decision-ascii">
              <div className="code-header">
                <span>VERIFICATION BOUNDARY FLOW</span>
              </div>
              <pre>
                <code>{data.decisionAscii}</code>
              </pre>
            </div>
          )}

          <div className="cs-decision-copy">
            {data.decisionCopy.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="cs-key-callout">
            <span className="callout-icon">💡</span>
            <blockquote>{data.decisionKeyQuote}</blockquote>
          </div>
        </section>

        {/* 6. Technical Implementation Details */}
        <section className="cs-section cs-implementation-section">
          <div className="cs-section-header">
            <span className="section-index">05 / IMPLEMENTATION DEPTH</span>
            <h2>Engineering Details</h2>
          </div>

          <div className="cs-impl-grid">
            {data.implementationSections.map((sec, idx) => (
              <div key={idx} className="cs-impl-card">
                <h3>{sec.title}</h3>
                <p className="impl-desc">{sec.description}</p>
                {sec.details && (
                  <ul className="cs-bullet-list impl-bullets">
                    {sec.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {sec.codeOrAscii && (
                  <div className="cs-ascii-block impl-code">
                    <pre>
                      <code>{sec.codeOrAscii}</code>
                    </pre>
                  </div>
                )}
                {sec.table && (
                  <div className="impl-table-wrap">
                    <table>
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, i) => (
                            <th key={i}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Visual Demonstration Centerpiece */}
        <section className="cs-section cs-visual-section">
          <div className="cs-section-header">
            <span className="section-index">06 / INTERACTIVE VISUAL DEMONSTRATION</span>
            <h2>System Centerpiece &amp; Inspection</h2>
            <p className="cs-lead-text">
              Inspect the live execution state, benchmarks, security boundaries, and architectural guarantees.
            </p>
          </div>

          {visualCenterpiece}
        </section>

        {/* 8. Evaluation & Verification */}
        <section className="cs-section cs-eval-section">
          <div className="cs-section-header">
            <span className="section-index">07 / EVALUATION &amp; VERIFICATION</span>
            <h2>Rigorous Verification Evidence</h2>
          </div>

          <div className="cs-stats-grid">
            {data.evaluationStats.map((stat, idx) => (
              <div key={idx} className="cs-stat-card">
                <span className="stat-big">{stat.value}</span>
                <span className="stat-lbl">{stat.label}</span>
                <p className="stat-det">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Canonical Scenario Walkthrough */}
        <section className="cs-section cs-canonical-section">
          <div className="cs-section-header">
            <span className="section-index">08 / CANONICAL SCENARIO</span>
            <h2>{data.canonicalScenario.title}</h2>
          </div>

          <div className="cs-canonical-card">
            <div className="canonical-context">
              <span className="canonical-badge">OBSERVED INCIDENT / CONTEXT</span>
              <p>{data.canonicalScenario.incidentOrContext}</p>
            </div>

            <div className="canonical-steps">
              <span className="canonical-badge">STEP-BY-STEP SYSTEM EXECUTION</span>
              <div className="steps-timeline">
                {data.canonicalScenario.steps.map((step, idx) => (
                  <div key={idx} className="scenario-step-row">
                    <span className="step-count">{idx + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="canonical-outcome">
              <div className="outcome-badge">FINAL OUTCOME / DIAGNOSIS</div>
              <p className="outcome-text">{data.canonicalScenario.finalOutcome}</p>
              {data.canonicalScenario.confidenceOrMetric && (
                <div className="confidence-pill">
                  {data.canonicalScenario.confidenceOrMetric}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 10. What this project demonstrates */}
        <section className="cs-section cs-demonstrates-section">
          <div className="cs-section-header">
            <span className="section-index">09 / DEMONSTRATED SKILLS</span>
            <h2>Engineering Capabilities Proven</h2>
          </div>

          <div className="demonstrates-grid">
            {data.demonstrates.map((item, idx) => (
              <div key={idx} className="demonstrates-item">
                <span className="item-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Limitations & Claims Discipline */}
        <section className="cs-section cs-limitations-section">
          <div className="cs-section-header">
            <span className="section-index">10 / LIMITATIONS &amp; SCOPE BOUNDARIES</span>
            <h2>Disciplined Technical Claims</h2>
          </div>

          <div className="cs-limitations-box">
            <div className="box-header">
              <span className="alert-icon">⚖</span>
              <strong>Transparent Claims Discipline:</strong>
            </div>
            <ul className="cs-bullet-list">
              {data.limitations.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. Lessons Learned */}
        <section className="cs-section cs-lessons-section">
          <div className="cs-section-header">
            <span className="section-index">11 / LESSONS LEARNED</span>
            <h2>Engineering Retrospective</h2>
          </div>

          <div className="lessons-quote-box">
            <blockquote>{data.lessonsQuote}</blockquote>
          </div>

          {data.lessonsPoints && (
            <div className="lessons-points-grid">
              {data.lessonsPoints.map((lp, idx) => (
                <div key={idx} className="lesson-point-card">
                  <h4>{lp.title}</h4>
                  <p>{lp.body}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 13. Navigation & Next Case Study */}
        <section className="cs-next-section">
          <div className="next-card">
            <div className="next-left">
              <span className="next-label">NEXT CASE STUDY ({nextProject.index} / 04)</span>
              <h3>{nextProject.title}</h3>
              <p>{nextProject.description}</p>
            </div>
            <div className="next-right">
              <Link href={nextProject.caseStudyUrl} className="button button-primary next-btn">
                <span>Read Case Study {nextProject.index}</span>
                <span aria-hidden="true" className="action-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer showContactCta={true} />
    </div>
  );
}
