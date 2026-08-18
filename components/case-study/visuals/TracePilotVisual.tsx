"use client";

import { useState } from "react";

export function TracePilotVisual() {
  const [activeTab, setActiveTab] = useState<"waterfall" | "benchmark" | "security">("waterfall");
  const [selectedStep, setSelectedStep] = useState<number>(4);

  const steps = [
    {
      id: 1,
      phase: "01. Incident Intake",
      tool: "System Webhook",
      title: "Webhook delivery failure rate spiked to 39%",
      status: "TRIGGERED",
      details: "Alert triggered: webhook endpoint failure clustering at exactly 2.0s duration threshold.",
      payload: "{ \"alert_id\": \"inc_9921\", \"error_rate\": \"39%\", \"duration_cluster\": \"2000ms\" }",
    },
    {
      id: 2,
      phase: "02. Job Claiming",
      tool: "PostgreSQL Queue",
      title: "Worker claims job via FOR UPDATE SKIP LOCKED",
      status: "ACQUIRED",
      details: "Claimed lease for 240s heartbeat. Prevents multiple workers from duplicate investigations.",
      payload: "SELECT * FROM investigation_jobs WHERE status = 'queued' FOR UPDATE SKIP LOCKED LIMIT 1;",
    },
    {
      id: 3,
      phase: "03. Guarded Read-Only Tooling",
      tool: "GitHub API Tool",
      title: "Inspect recent commits in HTTP client module",
      status: "EXEC_OK",
      details: "Allowlisted read-only tool fetched commit 4b89f0 touching shared HTTP timeout configs.",
      payload: "get_commit_diff(sha='4b89f0', path='lib/http_client.py')",
    },
    {
      id: 4,
      phase: "04. Hybrid RAG Retrieval",
      tool: "pgvector + FTS",
      title: "Retrieve runbook on webhook latency profiles",
      status: "FUSED_RRF",
      details: "Dense vector search + full-text search combined via RRF (k=60), then LLM reranked to top-1.",
      payload: "RRF_Score: 0.958 | Doc: 'runbook-webhooks-sla.md#L45' (Hit@1)",
    },
    {
      id: 5,
      phase: "05. Evidence Persistence",
      tool: "PostgreSQL DB",
      title: "Persist validated evidence with immutable UUID",
      status: "PERSISTED",
      details: "Pydantic validated evidence record persisted before LLM hypothesis generation.",
      payload: "INSERT INTO evidence (id, investigation_id, source, content_hash) VALUES ('e3f9-44ab', ...);",
    },
    {
      id: 6,
      phase: "06. LLM Reasoning",
      tool: "DeepSeek Chat",
      title: "Generate hypothesis with mandatory evidence citations",
      status: "REASONED",
      details: "Model establishes correlation between commit 4b89f0 and runbook SLA note, citing [e3f9-44ab].",
      payload: "Diagnosis: Refactor replaced custom 10s webhook timeout with global 2s default. Citations: ['e3f9-44ab']",
    },
    {
      id: 7,
      phase: "07. Deterministic Citation Check",
      tool: "Citation Validator",
      title: "Validate cited UUID against PostgreSQL records",
      status: "VERIFIED",
      details: "Deterministic check confirms UUID 'e3f9-44ab' exists in investigation. Precision = 1.000.",
      payload: "Citation check: PASSED (1/1 valid, 0 fabricated UUIDs). Investigation ready for review.",
    },
  ];

  return (
    <div className="visual-centerpiece-container">
      <div className="visual-tabs-nav" role="tablist">
        <button
          className={`visual-tab-btn ${activeTab === "waterfall" ? "active" : ""}`}
          onClick={() => setActiveTab("waterfall")}
          role="tab"
          aria-selected={activeTab === "waterfall"}
        >
          <span className="tab-pill">01</span>
          Investigation Trace Waterfall
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "benchmark" ? "active" : ""}`}
          onClick={() => setActiveTab("benchmark")}
          role="tab"
          aria-selected={activeTab === "benchmark"}
        >
          <span className="tab-pill">02</span>
          Retrieval Evaluation (Hit@1 91.7%)
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "security" ? "active" : ""}`}
          onClick={() => setActiveTab("security")}
          role="tab"
          aria-selected={activeTab === "security"}
        >
          <span className="tab-pill">03</span>
          Adversarial Suite (13/13 Blocked)
        </button>
      </div>

      {activeTab === "waterfall" && (
        <div className="waterfall-panel">
          <div className="waterfall-header">
            <div className="header-meta">
              <span className="live-badge">INVESTIGATION TRACE</span>
              <span className="incident-id">INC-2026-0818 · WEBHOOK_TIMEOUT</span>
            </div>
            <div className="contract-badge">PERSIST-BEFORE-CITE CONTRACT: ACTIVE</div>
          </div>

          <div className="waterfall-grid">
            <div className="waterfall-timeline">
              {steps.map((step) => (
                <button
                  key={step.id}
                  className={`waterfall-step-row ${selectedStep === step.id ? "selected" : ""}`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="step-number">{step.id}</div>
                  <div className="step-info">
                    <div className="step-top">
                      <span className="step-phase">{step.phase}</span>
                      <span className="step-tool">{step.tool}</span>
                    </div>
                    <p className="step-title">{step.title}</p>
                  </div>
                  <div className="step-status">
                    <span className="status-tag">{step.status}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="waterfall-inspector">
              <div className="inspector-top">
                <span className="inspector-title">EVIDENCE &amp; AUDIT INSPECTOR</span>
                <span className="inspector-tag">STEP 0{selectedStep}</span>
              </div>
              <div className="inspector-body">
                <h4>{steps[selectedStep - 1].phase}</h4>
                <p className="inspector-desc">{steps[selectedStep - 1].details}</p>
                <div className="inspector-code-block">
                  <div className="code-label">PERSISTED EXECUTION PAYLOAD</div>
                  <pre>
                    <code>{steps[selectedStep - 1].payload}</code>
                  </pre>
                </div>
                <div className="inspector-guarantee">
                  <span className="guarantee-icon">🛡</span>
                  <div>
                    <strong>Deterministic Guarantee:</strong>
                    <p>
                      {selectedStep >= 5
                        ? "Citation cannot be forged. Trust boundary is enforced at the database level."
                        : "Only allowlisted read-only diagnostics executed. Zero shell/mutation access."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "benchmark" && (
        <div className="benchmark-panel">
          <div className="panel-intro">
            <h3>Fixed Operational Retrieval Benchmark</h3>
            <p>
              Evaluation over 12 operational incident queries across 10 curated technical knowledge runbooks.
              Demonstrates the precision impact of structured LLM reranking after hybrid fusion.
            </p>
          </div>

          <div className="benchmark-table-wrapper">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>Retrieval Strategy</th>
                  <th>Hit@1 (Top Precision)</th>
                  <th>Hit@3</th>
                  <th>Hit@5</th>
                  <th>MRR (Mean Reciprocal Rank)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dense Only (pgvector cosine)</td>
                  <td>75.0%</td>
                  <td>100.0%</td>
                  <td>100.0%</td>
                  <td>0.875</td>
                </tr>
                <tr>
                  <td>Hybrid RRF (Dense + Lexical FTS, k=60)</td>
                  <td>75.0%</td>
                  <td>100.0%</td>
                  <td>100.0%</td>
                  <td>0.875</td>
                </tr>
                <tr className="highlight-row">
                  <td>
                    <strong>Hybrid RRF + Structured LLM Reranking</strong>
                  </td>
                  <td>
                    <strong className="signal-accent">91.7% (+16.7%)</strong>
                  </td>
                  <td>100.0%</td>
                  <td>100.0%</td>
                  <td>
                    <strong className="signal-accent">0.958</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="benchmark-callout">
            <span className="callout-mark">★</span>
            <div>
              <strong>Key Evaluation Insight:</strong>
              <p>
                Dense + lexical search guarantees 100% recall at Hit@3, while structured reranking resolves ambiguous
                operational terms, driving Hit@1 from 75.0% to 91.7%.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "security" && (
        <div className="security-panel">
          <div className="security-summary-card">
            <div className="security-metric">
              <span className="big-stat">13 / 13</span>
              <span className="stat-sub">Adversarial Vectors Blocked</span>
            </div>
            <div className="security-desc">
              <p>
                TracePilot was tested against an adversarial suite of prompt injections, destructive commands,
                and forged citation attacks. Zero malicious calls bypassed the application guardrails.
              </p>
            </div>
          </div>

          <div className="attack-grid">
            {[
              { name: "Shell Execution Attempt", desc: "Blocked: exec / subprocess not in allowlist", status: "BLOCKED" },
              { name: "SQL Injection in Tool Payload", desc: "Blocked: Pydantic schema validation & parameterized queries", status: "BLOCKED" },
              { name: "Destructive Git Mutation", desc: "Blocked: Read-only API scope prevents git push/delete", status: "BLOCKED" },
              { name: "Fabricated Citation UUID", desc: "Blocked: Database check rejects non-persisted UUIDs", status: "BLOCKED" },
              { name: "Cross-Investigation Access", desc: "Blocked: Investigation UUID isolation enforced in query", status: "BLOCKED" },
              { name: "Prompt Injection Jailbreak", desc: "Blocked: Structured system prompt boundaries + schema checks", status: "BLOCKED" },
              { name: "Path Traversal (../etc)", desc: "Blocked: Strict relative file path allowlist", status: "BLOCKED" },
              { name: "Invalid Tool Parameter Flood", desc: "Blocked: Pydantic strict bounds enforcement", status: "BLOCKED" },
              { name: "Oversized Log Buffer Flood", desc: "Blocked: Max 500-line tail clamp on pod logs", status: "BLOCKED" },
              { name: "Invalid Commit SHA Injection", desc: "Blocked: Regex 40-char hex validation", status: "BLOCKED" },
              { name: "Cross-Tenant Repo Access", desc: "Blocked: GitHub token organization boundary verification", status: "BLOCKED" },
              { name: "Unauthenticated Tool Trigger", desc: "Blocked: FastAPI dependency authentication check", status: "BLOCKED" },
            ].map((item, idx) => (
              <div key={idx} className="attack-card">
                <div className="attack-header">
                  <span className="attack-name">{item.name}</span>
                  <span className="attack-status">{item.status}</span>
                </div>
                <p className="attack-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
