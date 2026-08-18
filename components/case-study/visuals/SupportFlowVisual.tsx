"use client";

import { useState } from "react";

export function SupportFlowVisual() {
  const [activeTab, setActiveTab] = useState<"rls" | "rpc" | "realtime" | "sla">("rls");
  const [activeOrg, setActiveOrg] = useState<"org_a" | "org_b">("org_a");
  const [activeRole, setActiveRole] = useState<"agent" | "customer">("agent");

  return (
    <div className="visual-centerpiece-container">
      <div className="visual-tabs-nav" role="tablist">
        <button
          className={`visual-tab-btn ${activeTab === "rls" ? "active" : ""}`}
          onClick={() => setActiveTab("rls")}
          role="tab"
          aria-selected={activeTab === "rls"}
        >
          <span className="tab-pill">01</span>
          Database RLS Isolation
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "rpc" ? "active" : ""}`}
          onClick={() => setActiveTab("rpc")}
          role="tab"
          aria-selected={activeTab === "rpc"}
        >
          <span className="tab-pill">02</span>
          Atomic RPC Transaction
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "realtime" ? "active" : ""}`}
          onClick={() => setActiveTab("realtime")}
          role="tab"
          aria-selected={activeTab === "realtime"}
        >
          <span className="tab-pill">03</span>
          Authorized Realtime Topics
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "sla" ? "active" : ""}`}
          onClick={() => setActiveTab("sla")}
          role="tab"
          aria-selected={activeTab === "sla"}
        >
          <span className="tab-pill">04</span>
          SLA Target Engine
        </button>
      </div>

      {activeTab === "rls" && (
        <div className="rls-panel">
          <div className="simulation-controls">
            <div className="control-group">
              <span className="control-label">Simulate Active Tenant Context:</span>
              <div className="pill-toggle">
                <button
                  className={`toggle-btn ${activeOrg === "org_a" ? "selected" : ""}`}
                  onClick={() => setActiveOrg("org_a")}
                >
                  Acme Corp (ORG_01)
                </button>
                <button
                  className={`toggle-btn ${activeOrg === "org_b" ? "selected" : ""}`}
                  onClick={() => setActiveOrg("org_b")}
                >
                  Globex Inc (ORG_02)
                </button>
              </div>
            </div>

            <div className="control-group">
              <span className="control-label">Acting Role Context:</span>
              <div className="pill-toggle">
                <button
                  className={`toggle-btn ${activeRole === "agent" ? "selected" : ""}`}
                  onClick={() => setActiveRole("agent")}
                >
                  Support Agent
                </button>
                <button
                  className={`toggle-btn ${activeRole === "customer" ? "selected" : ""}`}
                  onClick={() => setActiveRole("customer")}
                >
                  Customer User
                </button>
              </div>
            </div>
          </div>

          <div className="rls-split-view">
            <div className="rls-db-state">
              <div className="panel-subhead">
                <span>POSTGRESQL TABLE: `tickets` (SHARED SCHEMA)</span>
                <span className="badge-active">RLS: ENABLED</span>
              </div>
              <div className="table-responsive">
                <table className="db-mock-table">
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Org ID</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Visibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={activeOrg === "org_a" ? "row-visible" : "row-filtered"}>
                      <td><code>#TK-101</code></td>
                      <td><code>ORG_01</code></td>
                      <td>Billing invoice mismatch</td>
                      <td><span className="status-badge progress">In Progress</span></td>
                      <td>
                        {activeOrg === "org_a" ? (
                          <span className="badge-allowed">✓ ALLOWED (Org Match)</span>
                        ) : (
                          <span className="badge-denied">✕ FILTERED (RLS)</span>
                        )}
                      </td>
                    </tr>
                    <tr className={activeOrg === "org_a" ? "row-visible" : "row-filtered"}>
                      <td><code>#TK-102</code></td>
                      <td><code>ORG_01</code></td>
                      <td>SSO SAML configuration</td>
                      <td><span className="status-badge open">Open</span></td>
                      <td>
                        {activeOrg === "org_a" ? (
                          <span className="badge-allowed">✓ ALLOWED (Org Match)</span>
                        ) : (
                          <span className="badge-denied">✕ FILTERED (RLS)</span>
                        )}
                      </td>
                    </tr>
                    <tr className={activeOrg === "org_b" ? "row-visible" : "row-filtered"}>
                      <td><code>#TK-201</code></td>
                      <td><code>ORG_02</code></td>
                      <td>API webhook rate limiting</td>
                      <td><span className="status-badge resolved">Resolved</span></td>
                      <td>
                        {activeOrg === "org_b" ? (
                          <span className="badge-allowed">✓ ALLOWED (Org Match)</span>
                        ) : (
                          <span className="badge-denied">✕ FILTERED (RLS)</span>
                        )}
                      </td>
                    </tr>
                    <tr className={activeOrg === "org_b" ? "row-visible" : "row-filtered"}>
                      <td><code>#TK-202</code></td>
                      <td><code>ORG_02</code></td>
                      <td>Database migration error</td>
                      <td><span className="status-badge open">Open</span></td>
                      <td>
                        {activeOrg === "org_b" ? (
                          <span className="badge-allowed">✓ ALLOWED (Org Match)</span>
                        ) : (
                          <span className="badge-denied">✕ FILTERED (RLS)</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rls-policy-inspector">
              <div className="panel-subhead">
                <span>ACTIVE DATABASE POLICY EVALUATION</span>
                <span className="badge-code">SQL EXPLAIN</span>
              </div>
              <pre className="policy-code">
                <code>{`-- Evaluated inside PostgreSQL kernel
CREATE POLICY "tenant_ticket_isolation" ON tickets
FOR ALL TO authenticated
USING (
  organization_id = current_organization_id()
  AND (
    current_role() IN ('admin', 'agent')
    OR (current_role() = 'customer' AND customer_id = auth.uid())
  )
);

-- Active Session State:
-- current_organization_id() = '${activeOrg === "org_a" ? "ORG_01" : "ORG_02"}'
-- current_role()            = '${activeRole}'
-- Result: Zero cross-tenant data leakage possible`}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === "rpc" && (
        <div className="rpc-panel">
          <div className="panel-intro">
            <h3>Atomic Security Definer RPC Execution Lifecycle</h3>
            <p>
              Mutations execute inside atomic PostgreSQL functions. State transitions, SLA calculations, and audit logs
              succeed or fail together—eliminating partial updates.
            </p>
          </div>

          <div className="rpc-lifecycle-steps">
            {[
              {
                step: "01",
                name: "Resolve Tenant & Actor",
                desc: "RPC securely resolves auth.uid(), checks membership in target organization, and verifies caller permissions.",
              },
              {
                step: "02",
                name: "Row-Level Exclusive Lock",
                desc: "Executes SELECT ... FOR UPDATE on target ticket row, preventing concurrent race conditions during status changes.",
              },
              {
                step: "03",
                name: "State Transition Validation",
                desc: "Validates allowed transition matrix (e.g. Open → In Progress → Resolved) and prevents unauthorized status jumps.",
              },
              {
                step: "04",
                name: "SLA Timestamp Calculation",
                desc: "If this is the first agent response, records first_agent_response_at timestamp and computes SLA compliance.",
              },
              {
                step: "05",
                name: "Audit Event Generation",
                desc: "Inserts immutable record into ticket_audit_events table detailing actor, old state, new state, and metadata.",
              },
              {
                step: "06",
                name: "Atomic Commit & Trigger",
                desc: "Transaction commits atomically and fires PostgreSQL trigger to broadcast update to private Realtime channel.",
              },
            ].map((s) => (
              <div key={s.step} className="rpc-step-card">
                <div className="step-badge">{s.step}</div>
                <div className="step-details">
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "realtime" && (
        <div className="realtime-panel">
          <div className="panel-intro">
            <h3>Authorized Private Realtime Topics</h3>
            <p>
              Realtime WebSocket delivery is governed directly by PostgreSQL RLS policies on realtime.messages rather than
              trusting client subscription requests.
            </p>
          </div>

          <div className="realtime-diagram">
            <div className="rt-node">
              <span className="rt-badge">TRIGGER</span>
              <h4>PostgreSQL Trigger</h4>
              <p>Ticket comment inserted inside transaction</p>
            </div>
            <div className="rt-connector">↓ realtime.send()</div>
            <div className="rt-node">
              <span className="rt-badge">TOPIC</span>
              <h4>ticket:&lt;UUID&gt;:comments</h4>
              <p>Private tenant-isolated broadcast topic</p>
            </div>
            <div className="rt-connector">↓ RLS Authorization Check</div>
            <div className="rt-node highlight">
              <span className="rt-badge">POLICY</span>
              <h4>realtime.messages RLS</h4>
              <p>Verifies subscriber has organization membership before forwarding</p>
            </div>
            <div className="rt-connector">↓ WebSocket Push</div>
            <div className="rt-node">
              <span className="rt-badge">CLIENT</span>
              <h4>Authorized Client UI</h4>
              <p>Live comment rendered instantly without page reload</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "sla" && (
        <div className="sla-panel">
          <div className="panel-intro">
            <h3>SLA Continuous Response Target Matrix</h3>
            <p>
              Target elapsed times configured per priority tier. The database engine calculates first response compliance
              automatically on agent replies.
            </p>
          </div>

          <div className="sla-grid">
            {[
              { priority: "Urgent", target: "4 Hours", desc: "Critical outage or revenue-impacting incident", color: "urgent" },
              { priority: "High", target: "24 Hours", desc: "Degraded functionality or key customer blockage", color: "high" },
              { priority: "Medium", target: "48 Hours", desc: "General technical questions or feature inquiries", color: "medium" },
              { priority: "Low", target: "72 Hours", desc: "Minor inquiries or documentation requests", color: "low" },
            ].map((tier) => (
              <div key={tier.priority} className={`sla-card tier-${tier.color}`}>
                <div className="sla-top">
                  <span className="tier-name">{tier.priority}</span>
                  <span className="tier-time">{tier.target}</span>
                </div>
                <p className="tier-desc">{tier.desc}</p>
                <div className="sla-bar">
                  <div className="sla-fill" />
                </div>
              </div>
            ))}
          </div>

          <div className="sla-note">
            <span className="note-icon">ℹ</span>
            <p>
              <strong>Disciplined Claim:</strong> SupportFlow measures continuous elapsed time rather than business-hours
              calendars, maintaining clean simplicity in the core database engine.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
