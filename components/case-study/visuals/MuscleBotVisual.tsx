"use client";

import { useState } from "react";

export function MuscleBotVisual() {
  const [activeTab, setActiveTab] = useState<"ai_nutrition" | "readiness" | "native" | "journey">("ai_nutrition");

  // Macro calculator state
  const [protein, setProtein] = useState<number>(45);
  const [carbs, setCarbs] = useState<number>(60);
  const [fat, setFat] = useState<number>(18);

  const calculatedCalories = protein * 4 + carbs * 4 + fat * 9;

  // Readiness calculator state
  const [sleepHrs, setSleepHrs] = useState<number>(7.5);
  const [restDays, setRestDays] = useState<number>(1);
  const [volumeStrain, setVolumeStrain] = useState<number>(85);

  const sleepScore = Math.min(100, Math.round((sleepHrs / 8) * 100));
  const restScore = restDays === 1 ? 95 : restDays === 2 ? 100 : restDays > 2 ? 80 : 60;
  const strainScore = Math.max(0, 100 - (volumeStrain - 80) * 2);
  const readinessTotal = Math.round(sleepScore * 0.4 + restScore * 0.35 + strainScore * 0.25);

  return (
    <div className="visual-centerpiece-container">
      <div className="visual-tabs-nav" role="tablist">
        <button
          className={`visual-tab-btn ${activeTab === "ai_nutrition" ? "active" : ""}`}
          onClick={() => setActiveTab("ai_nutrition")}
          role="tab"
          aria-selected={activeTab === "ai_nutrition"}
        >
          <span className="tab-pill">01</span>
          Dual-Model AI &amp; Macro Engine
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "readiness" ? "active" : ""}`}
          onClick={() => setActiveTab("readiness")}
          role="tab"
          aria-selected={activeTab === "readiness"}
        >
          <span className="tab-pill">02</span>
          Readiness Engine (40/35/25)
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "native" ? "active" : ""}`}
          onClick={() => setActiveTab("native")}
          role="tab"
          aria-selected={activeTab === "native"}
        >
          <span className="tab-pill">03</span>
          Capacitor 8 Android Stack
        </button>
        <button
          className={`visual-tab-btn ${activeTab === "journey" ? "active" : ""}`}
          onClick={() => setActiveTab("journey")}
          role="tab"
          aria-selected={activeTab === "journey"}
        >
          <span className="tab-pill">04</span>
          Product Evolution &amp; Market Judgment
        </button>
      </div>

      {activeTab === "ai_nutrition" && (
        <div className="macro-panel">
          <div className="macro-split-grid">
            <div className="ai-split-card">
              <div className="ai-badge-header">
                <span className="badge-fast">GROQ / LLAMA 3.3 70B</span>
                <span className="badge-role">RAPID EXTRACTION</span>
              </div>
              <div className="chat-sample">
                <div className="user-bubble">
                  <span className="bubble-label">User Input:</span>
                  <p>&ldquo;2 roti with chicken curry and a spoon of butter&rdquo;</p>
                </div>
                <div className="model-output">
                  <span className="bubble-label">Model Decomposition:</span>
                  <ul>
                    <li>Whole Wheat Roti (2 pcs): ~30g carbs, 6g protein</li>
                    <li>Chicken Curry (150g): ~28g protein, 10g fat</li>
                    <li>Butter (1 tbsp / 14g): ~11g fat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="calculator-card">
              <div className="calc-header">
                <span className="calc-title">DETERMINISTIC CALORIE RECALCULATOR</span>
                <span className="badge-code">P×4 + C×4 + F×9</span>
              </div>
              <p className="calc-desc">
                The application does not trust raw model calorie arithmetic. Macros are extracted and recalculated deterministically:
              </p>

              <div className="slider-group">
                <div className="slider-item">
                  <div className="slider-top">
                    <span>Protein (4 kcal/g):</span>
                    <strong>{protein}g ({protein * 4} kcal)</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    value={protein}
                    onChange={(e) => setProtein(Number(e.target.value))}
                  />
                </div>

                <div className="slider-item">
                  <div className="slider-top">
                    <span>Carbohydrates (4 kcal/g):</span>
                    <strong>{carbs}g ({carbs * 4} kcal)</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={carbs}
                    onChange={(e) => setCarbs(Number(e.target.value))}
                  />
                </div>

                <div className="slider-item">
                  <div className="slider-top">
                    <span>Fat (9 kcal/g):</span>
                    <strong>{fat}g ({fat * 9} kcal)</strong>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    value={fat}
                    onChange={(e) => setFat(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-result">
                <span>TOTAL RECALCULATED ENERGY:</span>
                <strong className="calories-number">{calculatedCalories} kcal</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "readiness" && (
        <div className="readiness-panel">
          <div className="readiness-grid">
            <div className="readiness-gauge-card">
              <div className="gauge-circle">
                <div className="gauge-score">{readinessTotal}</div>
                <div className="gauge-sub">READINESS SCORE</div>
              </div>
              <div className="gauge-status">
                {readinessTotal >= 80 ? (
                  <span className="status-optimal">OPTIMAL FOR INTENSE SESSION</span>
                ) : readinessTotal >= 60 ? (
                  <span className="status-moderate">MODERATE INTENSITY RECOMMENDED</span>
                ) : (
                  <span className="status-recovery">PRIORITIZE ACTIVE RECOVERY</span>
                )}
              </div>
            </div>

            <div className="readiness-factors">
              <div className="factor-row">
                <div className="factor-header">
                  <span>Sleep Duration (40% Weight — Health Connect)</span>
                  <strong>{sleepHrs} hrs ({sleepScore}%)</strong>
                </div>
                <input
                  type="range"
                  min="4"
                  max="10"
                  step="0.5"
                  value={sleepHrs}
                  onChange={(e) => setSleepHrs(Number(e.target.value))}
                />
              </div>

              <div className="factor-row">
                <div className="factor-header">
                  <span>Days Since Last Hard Session (35% Weight)</span>
                  <strong>{restDays} day(s) ({restScore}%)</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={restDays}
                  onChange={(e) => setRestDays(Number(e.target.value))}
                />
              </div>

              <div className="factor-row">
                <div className="factor-header">
                  <span>Volume Strain vs 7-Day Avg (25% Weight)</span>
                  <strong>{volumeStrain}% ({strainScore}%)</strong>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={volumeStrain}
                  onChange={(e) => setVolumeStrain(Number(e.target.value))}
                />
              </div>

              <div className="factor-note">
                <span>⏱</span> Sleep sessions crossing midnight are queried from 18:00 on the prior day via Health Connect.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "native" && (
        <div className="native-panel">
          <div className="panel-intro">
            <h3>Capacitor 8 Android Release Architecture (v1.0.5)</h3>
            <p>
              Bridging the React 19 web app into native Android required deep platform-specific adaptations beyond a simple webview wrapper.
            </p>
          </div>

          <div className="native-feature-grid">
            <div className="native-card">
              <div className="native-icon">📊</div>
              <h4>Android Health Connect</h4>
              <p>Queries sleep stages, step counts, and active calories with permission management and battery-efficient telemetry.</p>
            </div>
            <div className="native-card">
              <div className="native-icon">💳</div>
              <h4>RevenueCat + Google Play</h4>
              <p>In-app subscription billing (monthly, annual, 14-day trial) synced with Supabase database tier checks.</p>
            </div>
            <div className="native-card">
              <div className="native-icon">🔔</div>
              <h4>FCM Push Notifications</h4>
              <p>Firebase Cloud Messaging HTTP v1 integrated with scheduled Supabase Edge Functions for automated AI reports.</p>
            </div>
            <div className="native-card">
              <div className="native-icon">⚡</div>
              <h4>Native Lifecycle &amp; Back Nav</h4>
              <p>Intercepts Android hardware back button to dismiss modals/sheets and controls keyboard viewport resize smoothly.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "journey" && (
        <div className="journey-panel">
          <div className="panel-intro">
            <h3>Productization &amp; Commercial Validation Timeline</h3>
            <p>
              MuscleBot reached technical completeness and an Android release, but market realities led to a deliberate decision to discontinue commercial startup pursuit.
            </p>
          </div>

          <div className="timeline-container">
            {[
              {
                phase: "Phase 01: Core Workout Engine",
                desc: "Built structured logging, 1,300+ exercise catalog, stopwatch, and 14-muscle anatomical heatmap.",
                status: "COMPLETED",
              },
              {
                phase: "Phase 02: AI Workloads & Nutrition",
                desc: "Dual-model AI split (DeepSeek + Groq), natural-language food logger, and deterministic macro recalculation.",
                status: "COMPLETED",
              },
              {
                phase: "Phase 03: Native Android & Subscriptions",
                desc: "Capacitor 8 packaging, Health Connect integration, push notifications, and RevenueCat Google Play billing.",
                status: "RELEASED (v1.0.5)",
              },
              {
                phase: "Phase 04: Commercial Viability Evaluation",
                desc: "Analyzed category dominance by established incumbents with proprietary food databases and massive distribution.",
                status: "EVALUATED",
              },
              {
                phase: "Phase 05: Open-Source Transition",
                desc: "Relaxed paywalls, halted commercial company pursuit, and preserved implementation as an open-source technical proof.",
                status: "OPEN-SOURCED",
              },
            ].map((item, idx) => (
              <div key={idx} className="timeline-node">
                <div className="timeline-marker">{idx + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{item.phase}</h4>
                    <span className="timeline-status">{item.status}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="journey-takeaway">
            <strong>Key Product Insight:</strong>
            <p>
              &ldquo;Building the product and validating the business are separate problems. Recognizing when additional engineering will not fix a weak commercial position is itself an essential engineering and product judgment skill.&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
