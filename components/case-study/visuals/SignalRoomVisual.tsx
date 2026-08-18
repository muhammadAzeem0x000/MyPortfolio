"use client";

import { useState } from "react";

export function SignalRoomVisual() {
  const [activeTab, setActiveTab] = useState<"concurrency" | "no_rag" | "zod_schema" | "privacy">("concurrency");
  const [simulationState, setSimulationState] = useState<"idle" | "running" | "completed">("idle");

  const runConcurrencySim = () => {
    setSimulationState("running");
    setTimeout(() => {
      setSimulationState("completed");
    }, 1200);
  };

  return (
    <div className="visual-centerpiece-container">
      <div className="visual-tabs-nav" role="tablist">
        <button
          className={`visual-tab-btn ${activeTab === "concurrency" ? "active" : ""}`}
          onClick={() => setActiveTab("concurrency")}
          role="tab"
          aria-selected={activeTab === "concurrency"}
        >
          <span className="tab-pill">01</span>
          SELECT FOR UPDATE Concurrency
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "no_rag" ? "active" : ""}`}
          onClick={() => setActiveTab("no_rag")}
          role="tab"
          aria-selected={activeTab === "no_rag"}
        >
          <span className="tab-pill">02</span>
          Why No RAG? (Bounded Context)
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "zod_schema" ? "active" : ""}`}
          onClick={() => setActiveTab("zod_schema")}
          role="tab"
          aria-selected={activeTab === "zod_schema"}
        >
          <span className="tab-pill">03</span>
          Zod 5-Insight Schema
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "privacy" ? "active" : ""}`}
          onClick={() => setActiveTab("privacy")}
          role="tab"
          aria-selected={activeTab === "privacy"}
        >
          <span className="tab-pill">04</span>
          Zero-Identity Architecture
        </button>
      </div>

      {activeTab === "concurrency" && (
        <div className="concurrency-panel">
          <div className="panel-intro">
            <h3>Database-Enforced Atomic Code Consumption</h3>
            <p>
              When two students attempt to submit simultaneously with the same 8-character single-use code token,
              PostgreSQL row locking guarantees exactly one submission succeeds.
            </p>
          </div>

          <div className="sim-action-bar">
            <button
              className="button button-primary sim-btn"
              onClick={runConcurrencySim}
              disabled={simulationState === "running"}
            >
              {simulationState === "running" ? "Executing Transactions..." : "Simulate Simultaneous Submission"}
            </button>
            <span className="sim-target-code">Target Code: <code>7X9K2MQ4</code> (SHA-256: <code>e8b1...9a</code>)</span>
          </div>

          <div className="concurrency-race-grid">
            <div className={`race-card ${simulationState === "completed" ? "winner" : ""}`}>
              <div className="race-header">
                <span className="req-tag">REQUEST A (T=0.00s)</span>
                <span className="lock-tag">LOCK ACQUIRED</span>
              </div>
              <div className="race-body">
                <p>1. Begins transaction: <code>SELECT * FROM response_codes FOR UPDATE</code></p>
                <p>2. Validates code <code>7X9K2MQ4</code> is unused</p>
                <p>3. Inserts anonymous feedback row</p>
                <p>4. Marks code status = <code>&apos;used&apos;</code></p>
                <p>5. Transaction COMMITS atomically</p>
              </div>
              <div className="race-result success">
                {simulationState === "completed" ? "✓ SUBMISSION ACCEPTED (200 OK)" : "PENDING TRIGGER..."}
              </div>
            </div>

            <div className={`race-card ${simulationState === "completed" ? "loser" : ""}`}>
              <div className="race-header">
                <span className="req-tag">REQUEST B (T=0.01s)</span>
                <span className="lock-tag wait">WAITS FOR LOCK</span>
              </div>
              <div className="race-body">
                <p>1. Arrives during Request A transaction</p>
                <p>2. Pauses at <code>FOR UPDATE</code> until lock released</p>
                <p>3. Acquires lock after Request A commits</p>
                <p>4. Inspects row: code is already <code>&apos;used&apos;</code>!</p>
                <p>5. Transaction ROLLS BACK and aborts</p>
              </div>
              <div className="race-result rejected">
                {simulationState === "completed" ? "✕ REJECTED: CODE ALREADY CONSUMED (409)" : "PENDING TRIGGER..."}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "no_rag" && (
        <div className="no-rag-panel">
          <div className="panel-intro">
            <h3>Architectural Decision: Why Bounded Context &gt; RAG</h3>
            <p>
              For higher education course feedback (~50 responses + syllabus text), introducing a vector database and
              chunking pipeline introduces unnecessary infrastructure without solving a scale problem.
            </p>
          </div>

          <div className="rag-vs-bounded-grid">
            <div className="comparison-card traditional">
              <div className="comp-header">
                <span className="comp-title">TRADITIONAL RAG PIPELINE</span>
                <span className="comp-tag overkill">OVERKILL FOR SESSION DATA</span>
              </div>
              <ul>
                <li>❌ Requires vector embeddings &amp; pgvector indexing</li>
                <li>❌ Chunking splits context across answers and reflections</li>
                <li>❌ Retrieval ranking can drop critical minority outlier opinions</li>
                <li>❌ Introduces asynchronous indexing latency and API costs</li>
              </ul>
            </div>

            <div className="comparison-card bounded-highlight">
              <div className="comp-header">
                <span className="comp-title">SIGNALROOM BOUNDED CONTEXT</span>
                <span className="comp-tag optimal">OPTIMAL ARCHITECTURAL CHOICE</span>
              </div>
              <ul>
                <li>✓ Feeds 100% of session responses directly to DeepSeek V4 Pro</li>
                <li>✓ Holistic correlation between ratings, text, and syllabus goals</li>
                <li>✓ Zero chunking errors, zero indexing latency, zero vector DB cost</li>
                <li>✓ Bounded upper limit (max 50 responses + 30-page / 60k char PDF)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === "zod_schema" && (
        <div className="zod-panel">
          <div className="panel-intro">
            <h3>Deterministic Zod Schema Validation</h3>
            <p>
              The AI output is not freeform text; it is strictly parsed into exactly five ranked insights with priority
              classifications and direct supporting evidence quotes.
            </p>
          </div>

          <div className="zod-code-container">
            <pre className="zod-schema-code">
              <code>{`// Validated server-side after DeepSeek V4 Pro generation
export const AnalysisInsightSchema = z.object({
  rank: z.number().min(1).max(5),
  title: z.string().min(5).max(100),
  finding: z.string().min(20),
  evidence: z.array(z.string()).min(1), // Verbatim student quotes
  recommendation: z.string().min(20),
  priority: z.enum(["urgent", "high", "medium", "low"]),
});

export const SessionAnalysisSchema = z.object({
  insights: z.array(AnalysisInsightSchema)
    .length(5) // Exactly five insights required
    .refine((items) => new Set(items.map(i => i.rank)).size === 5, {
      message: "Insight ranks must be unique (1-5)",
    }),
  reflection_synthesis: z.string(),
  prompt_version: z.literal("v2.1"),
});`}</code>
            </pre>
          </div>
        </div>
      )}

      {activeTab === "privacy" && (
        <div className="privacy-panel">
          <div className="privacy-grid">
            <div className="privacy-card">
              <div className="priv-header">
                <span className="priv-icon">🔒</span>
                <h4>Zero Respondent Identity Columns</h4>
              </div>
              <p>
                The <code>responses</code> table stores only <code>id</code>, <code>session_id</code>, and <code>created_at</code>.
                No student IDs, emails, IP addresses, or browser fingerprints are ever written to disk.
              </p>
            </div>

            <div className="privacy-card">
              <div className="priv-header">
                <span className="priv-icon">🔑</span>
                <h4>One-Way SHA-256 Code Hashing</h4>
              </div>
              <p>
                The plaintext code token is printed/displayed once to the instructor. The database stores only <code>SHA-256(code)</code>,
                making it mathematically impossible to recover original tokens from a database dump.
              </p>
            </div>

            <div className="privacy-card">
              <div className="priv-header">
                <span className="priv-icon">🛡</span>
                <h4>HMAC-Hashed Rate Limiting</h4>
              </div>
              <p>
                IP rate limiting hashes incoming IPs with a secret salt (<code>HMAC-SHA256(IP, secret)</code>).
                Rate boundaries are enforced without storing raw student IP addresses in request logs.
              </p>
            </div>

            <div className="privacy-card">
              <div className="priv-header">
                <span className="priv-icon">📑</span>
                <h4>Versioned Analysis History</h4>
              </div>
              <p>
                AI analysis outputs are saved as immutable versioned snapshots (model, prompt version, timestamp, response count)
                rather than overwriting previous semester runs.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
