export interface ProjectTag {
  label: string;
}

export interface ProjectCardData {
  index: string;
  slug: string;
  category: string;
  label: string;
  title: string;
  lead: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
  caseStudyUrl: string;
  primaryProof: string;
}

export interface ArchitectureNode {
  step: string;
  title: string;
  description: string;
}

export interface BenchmarkRow {
  strategy: string;
  hit1: string;
  hit3: string;
  hit5: string;
  mrr: string;
}

export interface CaseStudyData {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  liveUrl: string;
  githubUrl: string;
  primaryProof: string;
  label: string;
  tags: string[];

  // 1. Problem
  problemTitle: string;
  problemSummary: string;
  problemPoints: string[];
  challengeQuote: string;

  // 2. What I Built
  builtSummary: string;
  builtPoints: string[];
  rolesOrFeatures?: { title: string; points: string[] }[];

  // 3. Architecture
  architectureFlow: string[];
  asciiDiagram: string;
  coreStack: string[];

  // 4. Key Engineering Decision
  decisionTitle: string;
  decisionSubtitle: string;
  decisionAscii?: string;
  decisionCopy: string[];
  decisionKeyQuote: string;

  // 5. Technical Implementation Details
  implementationSections: {
    title: string;
    description: string;
    details?: string[];
    codeOrAscii?: string;
    table?: { headers: string[]; rows: string[][] };
  }[];

  // 6. Evaluation / Verification
  evaluationStats: { label: string; value: string; detail: string }[];
  retrievalBenchmark?: BenchmarkRow[];
  securityStats?: { label: string; value: string; items: string[] };

  // 7. Canonical Scenario
  canonicalScenario: {
    title: string;
    incidentOrContext: string;
    observed?: string[];
    steps: string[];
    finalOutcome: string;
    confidenceOrMetric?: string;
  };

  // 8. What this project demonstrates
  demonstrates: string[];

  // 9. Limitations (Strict Claims Discipline)
  limitations: string[];

  // 10. Lessons
  lessonsQuote: string;
  lessonsPoints?: { title: string; body: string }[];
}

export const PROJECTS_LIST: ProjectCardData[] = [
  {
    index: "01",
    slug: "tracepilot",
    category: "AI Systems · Incident Investigation",
    label: "AI Systems · Developer Infrastructure",
    title: "TracePilot",
    lead: "Evidence-grounded AI incident investigation",
    description:
      "Evidence-grounded AI incident investigation with hybrid retrieval, durable execution, and deterministic citation validation.",
    tags: ["AI Systems", "RAG", "PostgreSQL", "Evaluation"],
    live: "https://tracepilot-six.vercel.app",
    github: "https://github.com/muhammadAzeem0x000/TracePilot",
    caseStudyUrl: "/case-study/tracepilot",
    primaryProof: "AI systems, grounding, retrieval, evaluation",
  },
  {
    index: "02",
    slug: "supportflow",
    category: "Multi-Tenant SaaS · Backend Architecture",
    label: "SaaS · Backend Architecture",
    title: "SupportFlow",
    lead: "Customer support SaaS with database-enforced tenant isolation",
    description:
      "Multi-tenant customer support software where tenant isolation, authorization, and workflow integrity are enforced at the database layer.",
    tags: ["Multi-Tenancy", "RLS", "PostgreSQL", "Realtime"],
    live: "https://supportflowapp.vercel.app",
    github: "https://github.com/muhammadAzeem0x000/SupportFlow",
    caseStudyUrl: "/case-study/supportflow",
    primaryProof: "Secure SaaS, multi-tenancy, authorization, realtime",
  },
  {
    index: "03",
    slug: "signalroom",
    category: "Privacy · AI Application Engineering",
    label: "Privacy · AI Application",
    title: "SignalRoom",
    lead: "Anonymous student feedback and AI analytics",
    description:
      "Anonymous student feedback and AI analytics built around privacy-preserving response handling and database-enforced concurrency.",
    tags: ["Privacy", "Supabase", "Structured AI", "Security"],
    live: "https://instructorfeedbackai.vercel.app",
    github: "https://github.com/muhammadAzeem0x000/student_feedback_analyzer",
    caseStudyUrl: "/case-study/signalroom",
    primaryProof: "Privacy, structured AI, database correctness, concurrency",
  },
  {
    index: "04",
    slug: "musclebot",
    category: "Product Engineering · Mobile · AI",
    label: "Product Engineering · Mobile · AI",
    title: "MuscleBot",
    lead: "Cross-platform fitness, nutrition, and recovery application",
    description:
      "Cross-platform fitness, nutrition, and recovery software combining AI coaching, Android integrations, subscriptions, and product experimentation.",
    tags: ["React", "Capacitor", "AI", "RevenueCat"],
    live: "https://musclebot.app",
    github: "https://github.com/muhammadAzeem0x000/fitness",
    caseStudyUrl: "/case-study/musclebot",
    primaryProof: "Product engineering, mobile, AI, monetization, product judgment",
  },
];

export const CAPABILITIES = [
  {
    title: "AI & LLM Systems",
    body: "LLM integration, structured generation, retrieval, grounding, prompt design, evaluation, and AI workflows.",
    tags: ["Hybrid RAG", "pgvector", "Reranking", "Citation Validation", "Structured Outputs"],
  },
  {
    title: "Backend & Data",
    body: "PostgreSQL, Supabase, APIs, RPCs, transactions, background jobs, and robust data modeling.",
    tags: ["FastAPI", "PostgreSQL", "FOR UPDATE SKIP LOCKED", "RPCs", "Background Workers"],
  },
  {
    title: "Security & Correctness",
    body: "RLS, authorization, validation, tenant isolation, privacy, and database-level concurrency control.",
    tags: ["PostgreSQL RLS", "Security Definer", "HMAC Hashing", "Atomic Locking", "Pydantic"],
  },
  {
    title: "Full-Stack Product Engineering",
    body: "Next.js, React, TypeScript, responsive interfaces, workflows, and interactive dashboards.",
    tags: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS", "Recharts"],
  },
  {
    title: "Product & Platform",
    body: "Mobile packaging, subscriptions, notifications, third-party integrations, deployment, and product validation.",
    tags: ["Capacitor 8", "Android Health Connect", "RevenueCat", "FCM Push", "Cloudflare"],
  },
];

export const CROSS_PROJECT_COMPARISON = [
  {
    project: "TracePilot",
    slug: "tracepilot",
    badge: "AI Systems",
    question: "How do you make AI reasoning evidence-grounded?",
    solution: "Persist-before-cite contract, hybrid RAG (RRF k=60), deterministic citation validation, and durable PostgreSQL job leases.",
  },
  {
    project: "SupportFlow",
    slug: "supportflow",
    badge: "Secure SaaS",
    question: "How do you enforce tenant isolation and workflow integrity?",
    solution: "Database-level RLS with organization context, Security Definer RPC transactions, private storage paths, and authorized realtime channels.",
  },
  {
    project: "SignalRoom",
    slug: "signalroom",
    badge: "Privacy & AI",
    question: "How do you preserve application-level anonymity while maintaining correctness and useful AI analytics?",
    solution: "Zero identity columns, single-use SHA-256 hashed codes, SELECT FOR UPDATE concurrency locks, bounded-context LLM, and Zod 5-insight validation.",
  },
  {
    project: "MuscleBot",
    slug: "musclebot",
    badge: "Product & Mobile",
    question: "How do you turn a broad product idea into a real cross-platform product—and decide whether it should become a business?",
    solution: "End-to-end web & native Android (Capacitor 8), Health Connect, split AI workloads (DeepSeek + Groq), subscriptions, and rigorous commercial validation.",
  },
];

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  tracepilot: {
    slug: "tracepilot",
    index: "01",
    title: "TracePilot",
    eyebrow: "AI Systems · Incident Investigation",
    heroTitle: "Evidence-grounded AI for software incident investigation.",
    heroDescription:
      "TracePilot investigates software incidents by combining read-only engineering tools, hybrid retrieval, persistent evidence, and LLM reasoning. The system is designed around a simple constraint: a model should not be able to cite evidence that the application cannot establish.",
    liveUrl: "https://tracepilot-six.vercel.app",
    githubUrl: "https://github.com/muhammadAzeem0x000/TracePilot",
    primaryProof: "AI systems, grounding, retrieval, evaluation",
    label: "AI Systems · Developer Infrastructure",
    tags: ["AI Systems", "RAG", "PostgreSQL", "Evaluation"],

    problemTitle: "The Hallucination Danger in Operational Incidents",
    problemSummary:
      "LLMs can produce plausible incident diagnoses while inventing supporting details. In an operational investigation, that creates a dangerous failure mode.",
    problemPoints: [
      "Nonexistent commits cited as root causes",
      "Fabricated file paths that misdirect on-call engineers",
      "Unsupported diagnoses created from superficial pattern matching",
      "Fake citations that bypass verification",
      "Uncontrolled tool usage risking mutating production infrastructure",
    ],
    challengeQuote:
      "How can an LLM investigate an incident while keeping its evidence chain verifiable?",

    builtSummary:
      "TracePilot is an AI incident investigation system built around deterministic verification boundaries.",
    builtPoints: [
      "Creates an investigation workspace bound to incident context",
      "Executes guarded, strictly read-only diagnostic tools across GitHub, Sentry, and Kubernetes",
      "Retrieves relevant technical knowledge via hybrid dense + lexical retrieval",
      "Persists raw diagnostic evidence into PostgreSQL with immutable UUIDs before model synthesis",
      "Directs LLM reasoning over persisted records with required citation references",
      "Deterministically validates every citation against persisted database records",
      "Stores structured investigation timelines and diagnoses for post-incident review",
    ],

    architectureFlow: [
      "Incident Intake",
      "Investigation Workspace",
      "Durable Job Queue (SKIP LOCKED)",
      "Read-only Tools + Hybrid Retrieval",
      "PostgreSQL Evidence Persistence",
      "LLM Structured Reasoning",
      "Deterministic Citation Validation",
      "Hypothesis / Team Review",
    ],
    asciiDiagram: `Incident
   ↓
Investigation
   ↓
Durable Job Queue (FOR UPDATE SKIP LOCKED)
   ↓
Read-only Tools + Retrieval (GitHub, Sentry, K8s)
   ↓
Evidence Persistence (Pydantic → PostgreSQL UUID)
   ↓
LLM Reasoning (DeepSeek Chat)
   ↓
Citation Validation (Deterministic DB Check)
   ↓
Hypothesis / Review`,
    coreStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "FastAPI",
      "Python 3.12",
      "Pydantic",
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "PostgreSQL Full-Text Search",
      "DeepSeek Chat",
      "Gemini embeddings",
      "GitHub API",
      "Sentry API",
      "Kubernetes API",
      "Pytest",
      "Mypy Strict",
    ],

    decisionTitle: "The Persist-Before-Cite Evidence Contract",
    decisionSubtitle: "Shifting trust from probabilistic model output to deterministic database logic",
    decisionAscii: `Tool / Retrieval Result
        ↓
Pydantic Validation
        ↓
PostgreSQL Persistence
        ↓
Immutable Evidence UUID
        ↓
LLM Hypothesis Generation
        ↓
Deterministic Citation Validation`,
    decisionCopy: [
      "A model cannot simply invent an evidence identifier.",
      "Before a citation is accepted by TracePilot, application logic verifies that the evidence exists, belongs to the current investigation, and that the cited UUID was actually persisted by an allowlisted tool or retrieval run.",
      "The system does not claim to eliminate hallucination probabilistically. Instead, it moves the critical trust boundary into deterministic application and database logic.",
    ],
    decisionKeyQuote:
      "It moves a critical trust boundary from probabilistic model output into deterministic application and database logic.",

    implementationSections: [
      {
        title: "Three-Stage Hybrid Retrieval",
        description:
          "To provide accurate technical documentation context, TracePilot combines dense vector search with lexical full-text search and structured reranking.",
        details: [
          "Dense retrieval: pgvector cosine similarity over Gemini embeddings.",
          "Lexical retrieval: PostgreSQL tsvector and tsquery full-text search.",
          "Reciprocal Rank Fusion (RRF): Dense and lexical candidate lists are fused using RRF with k=60.",
          "Structured LLM Reranking: Top candidate chunks undergo structured scoring before context injection.",
        ],
      },
      {
        title: "Durable Job Queue via PostgreSQL",
        description:
          "TracePilot uses PostgreSQL itself for investigation job coordination, eliminating external queue dependencies like Celery or RabbitMQ.",
        details: [
          "Jobs are claimed atomically using SELECT ... FOR UPDATE SKIP LOCKED.",
          "Workers receive 240-second heartbeat leases.",
          "Automatic failure recovery: If a worker crashes, the lease expires and the job becomes reclaimable.",
        ],
        codeOrAscii: `queued
  ↓
worker claims job (FOR UPDATE SKIP LOCKED)
  ↓
running (240s lease heartbeat)
  ↓
completed

worker crash → lease expires → job reclaimable`,
      },
      {
        title: "Guarded Read-Only Tooling",
        description:
          "The system deliberately exposes only allowlisted read-only tools to prevent accidental mutation of operational infrastructure.",
        details: [
          "GitHub: Recent commits, commit details, PR diffs, file contents, code identifier search.",
          "Sentry: Issue details, issue events, error stack traces.",
          "Kubernetes: Pod logs, pod status inspection.",
          "Zero destructive authority: No shell execution, arbitrary SQL, git push, or kubectl apply.",
        ],
      },
    ],

    evaluationStats: [
      { label: "Adversarial Defenses", value: "13 / 13", detail: "Malicious tool calls & prompt injections blocked" },
      { label: "Citation Precision", value: "1.000", detail: "Zero unverified or fabricated citations on holdout" },
      { label: "Synthetic Holdouts", value: "7 / 7", detail: "Diagnostic scenarios correctly solved" },
      { label: "Backend Tests", value: "81 / 81", detail: "Pytest unit & integration suites passing" },
      { label: "Mypy Strict", value: "0 Errors", detail: "Across 77 Python backend files" },
    ],

    retrievalBenchmark: [
      { strategy: "Dense only (pgvector)", hit1: "75.0%", hit3: "100%", hit5: "100%", mrr: "0.875" },
      { strategy: "Hybrid RRF (k=60)", hit1: "75.0%", hit3: "100%", hit5: "100%", mrr: "0.875" },
      { strategy: "Hybrid + LLM Reranking", hit1: "91.7%", hit3: "100%", hit5: "100%", mrr: "0.958" },
    ],

    securityStats: {
      label: "13/13 Adversarial Vectors Blocked",
      value: "100% Defense Rate",
      items: [
        "Shell execution requests",
        "SQL injection tool requests",
        "Destructive GitHub actions (e.g. push, delete branch)",
        "Parameter flooding",
        "Fabricated citation UUIDs",
        "Cross-investigation evidence access",
        "Prompt injection & jailbreak attempts",
        "Path traversal (/etc/passwd, ..)",
        "Invalid tool parameter limits",
        "Oversized log buffer requests",
        "Invalid commit SHA injection",
        "Cross-tenant repository access",
        "Unauthenticated tool trigger calls",
      ],
    },

    canonicalScenario: {
      title: "Webhook Deliveries Timeout After Client Cleanup",
      incidentOrContext:
        "Success rate dropped from 99% to 61% with failures clustering at exactly two seconds, while external provider dashboards showed healthy endpoints.",
      steps: [
        "Worker claims investigation via FOR UPDATE SKIP LOCKED",
        "Queries GitHub tool for recent commits touching HTTP client configuration",
        "Retrieves technical runbook on third-party webhook latency profiles",
        "Inspects diff of commit removing custom timeout parameters",
        "Persists commit diff and runbook section as immutable PostgreSQL evidence",
        "DeepSeek generates diagnosis linking the shared client refactor with the 2-second default limit",
        "Deterministic citation validator confirms all cited UUIDs match persisted records",
      ],
      finalOutcome:
        "A shared HTTP client refactor removed the webhook-specific timeout override and imposed an insufficient 2-second default.",
      confidenceOrMetric: "Reported confidence: 0.88 with 100% verified citation chain.",
    },

    demonstrates: [
      "Designing AI systems around deterministic verification guarantees",
      "Three-stage hybrid retrieval (pgvector + FTS + RRF + Reranking)",
      "Evidence persistence with immutable UUID contracts",
      "Database-backed durable execution with SKIP LOCKED leases",
      "Guarded, read-only diagnostic tool calling",
      "Adversarial security evaluation (13/13 blocked)",
      "Structured evaluation on synthetic holdouts",
      "Operational incident investigation workflows",
    ],

    limitations: [
      "TracePilot is an engineering prototype and evaluation system, not a claim of production-scale incident-management infrastructure.",
      "The public deployment currently verifies the frontend. The FastAPI backend is configured and locally/Docker verified; public backend deployment is not presented as an independently hosted enterprise service.",
      "Retrieval benchmarks are derived from a fixed evaluation set (12 operational queries over 10 curated documents) rather than open-web retrieval claims.",
    ],

    lessonsQuote:
      "The hardest part of an AI system is often not the model call. It is deciding what the model is allowed to know, what it is allowed to do, and what the surrounding software must guarantee independently.",
    lessonsPoints: [
      {
        title: "Guarantees Belong in Code",
        body: "Probabilistic models should not be responsible for enforcing security boundaries or citing truthfully. Application code and database constraints must enforce those guarantees.",
      },
      {
        title: "Reranking Closes the Gap",
        body: "Hybrid retrieval (dense + lexical) provides broad recall (100% Hit@3), but structured reranking is what drives top-1 precision from 75% to 91.7%.",
      },
    ],
  },

  supportflow: {
    slug: "supportflow",
    index: "02",
    title: "SupportFlow",
    eyebrow: "Multi-Tenant SaaS · Backend Architecture",
    heroTitle: "Customer support SaaS with database-enforced tenant isolation.",
    heroDescription:
      "SupportFlow is a multi-tenant customer support platform built around PostgreSQL RLS, Security Definer RPCs, transactional workflows, realtime authorization, and server-side validation.",
    liveUrl: "https://supportflowapp.vercel.app",
    githubUrl: "https://github.com/muhammadAzeem0x000/SupportFlow",
    primaryProof: "Secure SaaS, multi-tenancy, authorization, realtime",
    label: "SaaS · Backend Architecture",
    tags: ["Multi-Tenancy", "RLS", "PostgreSQL", "Realtime"],

    problemTitle: "The Vulnerability of Frontend Tenant Isolation",
    problemSummary:
      "A customer support system appears straightforward until multiple organizations share the same database infrastructure.",
    problemPoints: [
      "Which organization owns this ticket?",
      "Which specific users are allowed to see it?",
      "Which users have permission to transition ticket status or priority?",
      "How is every state transition audited without race conditions?",
      "How do realtime notifications reach only authorized subscribers?",
      "Why a frontend check alone is a critical security vulnerability.",
    ],
    challengeQuote:
      "Make tenant isolation and workflow integrity properties of the database and transaction model, not conventions developers are expected to remember.",

    builtSummary:
      "SupportFlow provides three distinct operational roles enforced through database rules.",
    builtPoints: [
      "Customer: Create tickets, track progress, upload attachments, close resolved tickets",
      "Agent: Triage tickets, respond, change workflow status, collaborate within organization, monitor SLA",
      "Admin: Assign tickets, manage team workload, update priority, configure organization, view analytics",
    ],
    rolesOrFeatures: [
      {
        title: "Customer Role",
        points: ["Create tickets", "Track ticket status", "Upload attachments", "Close resolved tickets"],
      },
      {
        title: "Agent Role",
        points: ["Triage & respond", "Status state transitions", "Tenant-scoped collaboration", "Monitor SLA clocks"],
      },
      {
        title: "Admin Role",
        points: ["Assign agent workload", "Manage priority & SLA", "Organization settings", "Database-aggregated analytics"],
      },
    ],

    architectureFlow: [
      "Supabase Auth Authentication",
      "Next.js Route Authorization",
      "PostgreSQL Tenant Context (current_organization_id())",
      "RLS-Protected Data Reads",
      "Security Definer RPC Mutations",
      "Transactional State Transitions",
      "Audit Events + Private Realtime Delivery",
    ],
    asciiDiagram: `Supabase Auth
      ↓
Next.js Authorization
      ↓
PostgreSQL Tenant Context (current_organization_id)
      ↓
RLS-Protected Reads
      ↓
Security Definer RPC Mutations
      ↓
Transactional Workflow (Atomic Lock & Mutate)
      ↓
Audit Events + Realtime WebSocket Delivery`,
    coreStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "PostgreSQL RLS",
      "Security Definer RPCs",
      "Supabase Realtime",
      "Supabase Storage",
      "Zod",
      "Vitest",
      "Playwright",
    ],

    decisionTitle: "Shared Database + Shared Schema + Organization Discriminator",
    decisionSubtitle: "Enforcing authorization below the application layer",
    decisionCopy: [
      "SupportFlow uses a shared database, shared schema, and organization_id discriminator model.",
      "The application never trusts a tenant ID sent from the browser. Instead, tenant context is derived directly from the authenticated session inside PostgreSQL via current_organization_id() and current_role().",
      "Reads are bounded by RLS policies; mutations are executed inside atomic Security Definer RPCs that lock target records, validate roles, update workflow state, and log immutable audit entries in a single transaction.",
    ],
    decisionKeyQuote:
      "In a shared database, the data layer itself should understand who owns the data and what operations a user is allowed to perform.",

    implementationSections: [
      {
        title: "Database-Level Authorization & RLS",
        description:
          "Every business table has Row-Level Security active with policies filtering by verified tenant context.",
        details: [
          "Reads constrained by organization_id = current_organization_id().",
          "Customer queries restricted to tickets where customer_id = auth.uid().",
          "RLS serves as an unbypassable second line of defense behind server middleware.",
        ],
      },
      {
        title: "Transactional Security Definer Mutations",
        description:
          "Core operations (create_ticket, assign_ticket, update_ticket_status, add_ticket_comment) run as PostgreSQL RPCs.",
        details: [
          "Resolves acting tenant and validates role permissions.",
          "Acquires row-level lock on target ticket to prevent concurrent race conditions.",
          "Updates ticket state, calculates SLA timestamps, and records an audit log row atomically.",
        ],
      },
      {
        title: "Authorized Private Realtime Topics",
        description:
          "Realtime comments and updates use private WebSocket broadcast channels verified by database policies.",
        codeOrAscii: `Comment Inserted
      ↓
PostgreSQL Trigger
      ↓
realtime.send()
      ↓
ticket:<UUID>:comments
      ↓
realtime.messages RLS Policy Check
      ↓
Authorized Subscriber WebSocket Delivery`,
      },
      {
        title: "Tenant-Scoped Private Storage & 60s Signed URLs",
        description:
          "Ticket attachments reside in a private bucket ('ticket-attachments') with 5 MB maximum size and MIME allowlists.",
        details: [
          "Storage path structure: organization_id / ticket_id / uuid-filename.",
          "Downloads require server-generated 60-second signed URLs.",
          "Zero public attachment buckets.",
        ],
      },
      {
        title: "SLA Response Engine & Database Aggregated Analytics",
        description:
          "Continuous elapsed-time response targets computed directly inside PostgreSQL.",
        table: {
          headers: ["Priority Tier", "Target First Response SLA"],
          rows: [
            ["Urgent", "4 hours"],
            ["High", "24 hours"],
            ["Medium", "48 hours"],
            ["Low", "72 hours"],
          ],
        },
      },
    ],

    evaluationStats: [
      { label: "Unit Tests", value: "24 / 24", detail: "SLA logic, Zod validation, role state machines" },
      { label: "Integration Suites", value: "4 Suites", detail: "Live Supabase RLS & RPC isolation verified" },
      { label: "E2E Workflows", value: "1 Multi-Role", detail: "Simultaneous Customer, Admin, and Agent contexts" },
      { label: "Stored Procedures", value: "13 RPCs", detail: "Defensive search_path, atomic transactions" },
      { label: "RLS Policies", value: "12 Policies", detail: "Active across all 7 business tables" },
    ],

    canonicalScenario: {
      title: "Multi-Role Verified Ticket Lifecycle",
      incidentOrContext:
        "Full workflow tested with simultaneous browser contexts in Playwright.",
      steps: [
        "Customer creates ticket via create_ticket RPC with file attachment",
        "Admin assigns agent workload; SLA clock begins",
        "Agent changes status to In Progress and sends private reply comment",
        "Customer receives reply immediately via authorized Realtime WebSocket",
        "Database trigger records first_agent_response_at and verifies SLA compliance",
        "Agent marks ticket Resolved; Customer closes ticket; audit trail completed",
      ],
      finalOutcome:
        "Full state progression completed atomically with zero cross-tenant leakage.",
    },

    demonstrates: [
      "Shared-schema multi-tenancy with organization_id discriminator",
      "PostgreSQL Row-Level Security (RLS) enforcement",
      "Security Definer stored procedures for transactional integrity",
      "Private Realtime WebSocket authorization",
      "Tenant-scoped private storage with signed download URLs",
      "Atomic audit event logging & SLA tracking",
      "Multi-role automated E2E testing with Playwright",
    ],

    limitations: [
      "SupportFlow does not claim enterprise-scale load, millions of users, 99.99% uptime, or billing infrastructure.",
      "The SLA engine measures continuous elapsed time rather than custom business-hours calendars.",
      "The team roster lookup requires server-side service_role access to retrieve emails from auth.users (deliberate architectural trade-off).",
    ],

    lessonsQuote:
      "Multi-tenancy is not just an application routing concern. In a shared database, the data layer itself should understand who owns the data and what operations a user is allowed to perform.",
    lessonsPoints: [
      {
        title: "RLS as an Unbypassable Guardrail",
        body: "Even if an application handler has a logic flaw, row-level security prevents cross-tenant data leakage at the query level.",
      },
      {
        title: "Atomic RPCs Prevent Partial Failures",
        body: "Wrapping status changes, audit logging, and SLA recalculation in a single stored procedure eliminates multi-step network failure inconsistencies.",
      },
    ],
  },

  musclebot: {
    slug: "musclebot",
    index: "04",
    title: "MuscleBot",
    eyebrow: "Product Engineering · Mobile · AI",
    heroTitle: "A full fitness product built from workout tracking to AI, mobile, and subscriptions.",
    heroDescription:
      "MuscleBot is a cross-platform fitness, nutrition, and recovery application combining workout logging, adaptive nutrition, AI coaching, Android Health Connect, push notifications, and subscription infrastructure.",
    liveUrl: "https://musclebot.app",
    githubUrl: "https://github.com/muhammadAzeem0x000/fitness",
    primaryProof: "Product engineering, mobile, AI, monetization, product judgment",
    label: "Product Engineering · Mobile · AI",
    tags: ["React", "Capacitor", "AI", "RevenueCat"],

    problemTitle: "Fragmented Fitness Tools & The Productization Challenge",
    problemSummary:
      "Fitness users frequently juggle 3–4 disconnected applications: one for workout logging, one for calorie counting, one for wearable sleep/recovery metrics, and another for training advice.",
    problemPoints: [
      "Disjointed user experience across multiple single-purpose apps",
      "Lack of unified recovery-aware workout progression",
      "Manual, tedious food logging requiring exact grams and barcode scans",
      "The product-engineering challenge of combining web, native Android, AI, and monetization",
    ],
    challengeQuote:
      "Can a small engineering effort turn a broad fitness concept into an actual cross-platform product with mobile integrations and monetization?",

    builtSummary:
      "MuscleBot combined training, nutrition, wearable recovery, and AI coaching into a unified cross-platform product.",
    builtPoints: [
      "Training: 1,300+ exercises, structured set logging, rest timer, 14-muscle anatomical heatmap",
      "Nutrition: Natural-language food parser, deterministic macro recalculation, adaptive TDEE trends",
      "Recovery: Android Health Connect sleep and activity ingestion, 0–100 readiness engine",
      "AI Coaching: Dual-model architecture (DeepSeek for reasoning + Groq for rapid parsing)",
      "Mobile Packaging: Capacitor 8 Android app (v1.0.5, versionCode 25) with push notifications & native back handling",
      "Subscriptions: RevenueCat + Google Play Billing with database-enforced feature tier limits",
    ],

    architectureFlow: [
      "React 19 + Vite Frontend",
      "TanStack Query (Offline-first persistence)",
      "Supabase Auth & PostgreSQL Data Layer",
      "AI Engine (DeepSeek + Groq / Llama 3.3 70B)",
      "Capacitor 8 Android Bridge",
      "Health Connect (Steps, Sleep Window, Calories)",
      "RevenueCat + Google Play Billing Subscriptions",
      "FCM HTTP v1 Push Notifications",
    ],
    asciiDiagram: `React 19 + Vite SPA (TanStack Query Offline Cache)
        ↓
Supabase Auth + PostgreSQL Database
        ↓
AI Pipelines (DeepSeek Reasoning + Groq Fast Parsing)
        ↓
Capacitor 8 Native Bridge (Android v1.0.5)
        ├── Android Health Connect (Sleep window 18:00+, steps, energy)
        ├── RevenueCat / Google Play Billing (Subscriptions)
        ├── FCM Push Notifications (Hourly Edge Functions)
        └── Native Haptics, Status Bar, Back Navigation`,
    coreStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Capacitor 8",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "DeepSeek",
      "Groq / Llama 3.3 70B",
      "RevenueCat",
      "Google Play Billing",
      "Android Health Connect",
      "Firebase Cloud Messaging (FCM)",
      "Cloudflare R2",
      "Vercel",
    ],

    decisionTitle: "Dual-Model AI Architecture & Deterministic Macro Calculation",
    decisionSubtitle: "Choosing the right model for the job and recalculating nutrition deterministically",
    decisionCopy: [
      "MuscleBot deliberately separates AI workloads across two specialized providers: DeepSeek is utilized for conversational AI coaching, workout generation, and progress reports where reasoning depth matters; Groq (Llama 3.3 70B) is utilized for instant natural-language food parsing and meal plan recalculation.",
      "Crucially, the application never trusts raw model calorie arithmetic. The LLM extracts food quantities and estimated macros (protein, carbs, fat), and the application deterministically calculates calories via: Calories = (Protein × 4) + (Carbs × 4) + (Fat × 9).",
    ],
    decisionKeyQuote:
      "Use a fast structured-model path for extraction-heavy operations and a more reasoning-oriented path for conversational or planning tasks, while keeping arithmetic deterministic.",

    implementationSections: [
      {
        title: "14-Muscle Group Training Volume Engine",
        description:
          "Exercises are mapped to primary and secondary muscle groups. Secondary muscles receive a 40% volume allocation relative to primary movement contribution, visualized via an anatomical heatmap.",
        details: [
          "Sets persisted as JSON (weight, reps, rpe, set_type).",
          "Calculates cumulative volume load (Volume = weight × reps).",
          "Visualizes fatigue and volume distributions across 14 muscle groups.",
        ],
      },
      {
        title: "Deterministic Readiness Engine (40 / 35 / 25)",
        description:
          "Generates a 0–100 daily readiness score combining wearable telemetry with workout history.",
        details: [
          "Sleep duration (40% weight): Sourced from Health Connect with overnight window starting at 18:00.",
          "Recovery duration (35% weight): Days elapsed since last strenuous training session.",
          "Volume strain (25% weight): Previous-day training volume relative to the 7-day rolling average.",
        ],
      },
      {
        title: "Capacitor 8 Native Android Engineering",
        description:
          "Reaching Android release v1.0.5 (versionCode 25) required solving platform-specific native behaviors.",
        details: [
          "Intercepting hardware back-button navigation to dismiss modals/drawers without exiting.",
          "Managing software keyboard resize and viewport reflow during food logging.",
          "Health Connect permissions handling and sleep session boundary queries.",
          "RevenueCat subscription entitlement sync into Supabase with tiered feature limits.",
        ],
      },
      {
        title: "FCM Push Notifications & Edge Functions",
        description:
          "Firebase Cloud Messaging HTTP v1 integrated with Supabase Edge Functions running hourly cron jobs to deliver automated AI progress reports.",
      },
    ],

    evaluationStats: [
      { label: "Android Release", value: "v1.0.5", detail: "versionCode 25 compiled & deployed" },
      { label: "Exercises Catalog", value: "1,300+", detail: "Categorized with 14-muscle mappings" },
      { label: "Readiness Formula", value: "40/35/25", detail: "Sleep (40%), rest (35%), volume (25%)" },
      { label: "AI Workloads", value: "2 Providers", detail: "DeepSeek (reasoning) + Groq (parsing)" },
    ],

    canonicalScenario: {
      title: "Natural Language Meal Parsing & Macro Balancing",
      incidentOrContext:
        "User inputs conversational text: '2 roti with chicken curry and a spoon of butter'.",
      steps: [
        "Groq (Llama 3.3 70B) decomposes meal into individual ingredients and portions",
        "Extracts estimated protein, carbohydrate, and fat values per item",
        "Frontend clamps macro bounds and deterministically calculates calories (P×4 + C×4 + F×9)",
        "User adjusts portions interactively in UI with instant arithmetic recalculation",
        "Saves meal log to Supabase and updates daily calorie/macro budget bars",
      ],
      finalOutcome:
        "Fast, frictionless nutrition logging with mathematically consistent calorie totals.",
    },

    demonstrates: [
      "Full-stack web and mobile product engineering",
      "Capacitor 8 cross-platform Android packaging",
      "Dual-model AI architecture (DeepSeek + Groq)",
      "Native Android integrations (Health Connect, Google Sign-In, FCM)",
      "Subscription infrastructure (RevenueCat + Google Play Billing)",
      "Offline-first client data caching (TanStack Query)",
      "Product experimentation and commercial validation judgment",
    ],

    limitations: [
      "MuscleBot is a technically complete product experiment that was commercially discontinued after market evaluation.",
      "The product does not claim a large user base, profitable SaaS revenue, or iOS application support.",
      "Natural-language calorie estimation is an LLM estimation workflow, not a certified clinical nutritional database.",
      "The codebase does not contain a dedicated automated unit/E2E test suite; evidence is based on working product architecture and Android release.",
    ],

    lessonsQuote:
      "Building the product and validating the business are separate problems. Recognizing when additional engineering will not fix a weak commercial position is itself a critical engineering skill.",
    lessonsPoints: [
      {
        title: "Feature Breadth Is Not Differentiation",
        body: "A product can combine many technically impressive features and still resemble established products with superior distribution.",
      },
      {
        title: "Distribution Dominates Consumer Software",
        body: "In crowded consumer categories, engineering quality alone does not solve user acquisition against incumbents with proprietary databases.",
      },
      {
        title: "Commercial Judgment",
        body: "Deciding to discontinue commercial startup pursuit and open-source the codebase saved engineering focus for higher-leverage systems.",
      },
    ],
  },

  signalroom: {
    slug: "signalroom",
    index: "03",
    title: "SignalRoom",
    eyebrow: "Privacy · AI Application Engineering",
    heroTitle: "Anonymous feedback analytics without storing student identities.",
    heroDescription:
      "SignalRoom is a feedback platform for higher education designed around anonymous response collection, database-enforced access control, concurrent single-use codes, aggregate analytics, and structured AI analysis.",
    liveUrl: "https://instructorfeedbackai.vercel.app",
    githubUrl: "https://github.com/muhammadAzeem0x000/student_feedback_analyzer",
    primaryProof: "Privacy, structured AI, database correctness, concurrency",
    label: "Privacy · AI Application",
    tags: ["Privacy", "Supabase", "Structured AI", "Security"],

    problemTitle: "The Higher Education Feedback Dilemma",
    problemSummary:
      "Course feedback systems face two competing goals: instructors need actionable, structured feedback, while students need certainty that responses cannot be tied back to their grades or identities.",
    problemPoints: [
      "Conventional authenticated surveys record student user IDs or emails alongside answers",
      "Unauthenticated surveys risk duplicate submissions, ballot stuffing, and unauthorized access",
      "How to authorize single submissions without storing who submitted what",
      "How to prevent race conditions when two students submit with the same response code simultaneously",
    ],
    challengeQuote:
      "Can feedback be submitted and verified without creating a student identity record at all?",

    builtSummary:
      "SignalRoom provides an administrative and instructor platform coupled with a zero-identity public submission portal.",
    builtPoints: [
      "Admin: Manages departments, courses, instructor assignments, and accounts",
      "Instructor: Creates sessions, configures questions, generates response codes, uploads course materials, inspects analytics, and runs AI analysis",
      "Student / Respondent: Opens public session, enters single-use code, submits feedback—zero account or identity created",
    ],

    architectureFlow: [
      "Supabase Auth (Admin & Instructor)",
      "Next.js Server Proxy & Verification",
      "PostgreSQL RLS Protected Session Tables",
      "Single-Use Code Hashing (SHA-256)",
      "Atomic Concurrency Lock (SELECT FOR UPDATE)",
      "Anonymous Response Record (Zero Identity Fields)",
      "Bounded Context AI Engine (DeepSeek V4 Pro)",
      "Zod 5-Insight Structured Output Validation",
    ],
    asciiDiagram: `Admin / Instructor (Supabase Auth)      Student Respondent (No Account)
              ↓                                           ↓
       Session Setup                           Enters Single-Use Code
              ↓                                           ↓
Generates Plaintext Codes (Shown Once)         submit_anonymous_feedback RPC
              ↓                                           ↓
Stores SHA-256(code) in PostgreSQL             SELECT ... FOR UPDATE (Lock Session & Code)
                                                          ↓
                                               Validate & Mark Used & Insert Response
                                                          ↓
                                               Aggregate Statistics (Recharts)
                                                          ↓
                                               Bounded Context AI (DeepSeek V4 Pro)
                                                          ↓
                                               Zod 5-Insight Schema Validation`,
    coreStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "PostgreSQL RLS",
      "DeepSeek V4 Pro",
      "Zod",
      "Recharts",
      "Cloudflare Turnstile",
      "HMAC-SHA256 Rate Limiting",
      "Vitest",
      "Playwright",
    ],

    decisionTitle: "Concurrency-Safe Anonymous Submission & Bounded Full-Context AI",
    decisionSubtitle: "Using database locks for code consumption and bounded context instead of unnecessary RAG",
    decisionCopy: [
      "SignalRoom enforces single-use codes via a database transaction with SELECT ... FOR UPDATE locking both the session and the code record. If two concurrent requests arrive with the same code, the first consumes and marks the code as used; the second sees code already used and is rejected.",
      "For AI analysis, SignalRoom is intentionally NOT RAG. A typical feedback session contains ~50 responses, instructor reflections, and a bounded syllabus PDF (max 30 pages / 60,000 chars). Passing the full bounded context directly to DeepSeek V4 Pro eliminates vector databases, chunking errors, and indexing latency while providing the model with complete holistic context.",
    ],
    decisionKeyQuote:
      "The application does not collect or persist student identity data with feedback responses, and uses atomic database transactions rather than application mutexes to enforce single-use code correctness.",

    implementationSections: [
      {
        title: "Zero-Identity Data Model & SHA-256 Code Hashing",
        description:
          "The responses table contains only response UUID, session ID, and submission timestamp.",
        details: [
          "Zero identity columns: No student ID, email, user foreign key, raw IP, or browser fingerprint.",
          "Single-use codes generated from an unambiguous 30-character alphabet (23456789ABCDEFGHJKLMNPQRSTUVWXYZ).",
          "Plaintext code is displayed to the instructor once; the database only stores SHA-256(code).",
        ],
      },
      {
        title: "Atomic Concurrency Lock (SELECT ... FOR UPDATE)",
        description:
          "The submit_anonymous_feedback stored procedure executes atomic locking to eliminate race conditions.",
        codeOrAscii: `Request A → locks code row
Request B → waits for lock

A → validates code & inserts response
A → marks code used & commits

B → acquires lock → sees code used → rejected!`,
      },
      {
        title: "Why No RAG? (Bounded Context Decision)",
        description:
          "SignalRoom deliberately avoids vector embeddings and RAG pipelines for feedback sessions.",
        details: [
          "Dataset fits entirely within modern LLM context windows (~50 responses + bounded syllabus text).",
          "Eliminates vector DB dependencies, chunking edge-cases, and retrieval ranking errors.",
          "Model evaluates cross-response sentiment and theme correlations across 100% of responses simultaneously.",
        ],
      },
      {
        title: "Zod-Enforced 5-Insight Structured Output",
        description:
          "AI responses must conform to a strict schema of exactly five ranked insights with priority, finding, and evidence fields.",
        details: [
          "Zod validates exactly 5 insights, ranks 1–5 without duplicates, and valid priority enums.",
          "Analysis results stored with immutable versioning metadata (prompt version, model, response count).",
        ],
      },
      {
        title: "Abuse Mitigation & Rate Limiting",
        description:
          "HMAC-SHA256 IP rate limiting (15 req / 10 min) hashes incoming IPs with a server secret to prevent raw IP logging, coupled with Cloudflare Turnstile bot protection.",
      },
    ],

    evaluationStats: [
      { label: "Test Suites", value: "8 Test Files", detail: "4 unit suites, 1 concurrency suite, 3 Playwright E2E suites" },
      { label: "Concurrency Test", value: "100% Correct", detail: "Simultaneous race conditions produce exactly 1 submission" },
      { label: "AI Output Validation", value: "Strict Zod", detail: "Rejects malformed, duplicate, or <5 insight responses" },
      { label: "Alphabet Uniqueness", value: "100 / 100", detail: "Unambiguous 30-char alphabet collision verified" },
    ],

    canonicalScenario: {
      title: "Concurrent Single-Use Submission & AI Synthesis",
      incidentOrContext:
        "Instructor launches mid-term feedback session with 40 single-use code tokens.",
      steps: [
        "Instructor generates and distributes printed response code tokens",
        "Two students attempt to submit feedback simultaneously with identical code",
        "PostgreSQL SELECT FOR UPDATE locks the code record; Request A completes, Request B is rejected",
        "Session reaches response threshold; instructor uploads course syllabus PDF",
        "Bounded context engine feeds aggregate distributions, text responses, and syllabus to DeepSeek V4 Pro",
        "Zod validates exactly 5 actionable, ranked insights with direct quotes and recommendations",
        "Immutable analysis version saved for comparative semester tracking",
      ],
      finalOutcome:
        "Verified anonymity, zero code reuse, and deterministic structured AI insights.",
    },

    demonstrates: [
      "Privacy-preserving system architecture",
      "PostgreSQL row-level locking (SELECT ... FOR UPDATE)",
      "Database-enforced concurrency control",
      "Bounded full-context LLM architecture (deliberate No-RAG decision)",
      "Zod structured output validation and schema enforcement",
      "HMAC hashed IP rate limiting & Turnstile abuse protection",
      "Versioned, immutable AI analysis records",
    ],

    limitations: [
      "SignalRoom removes application-level respondent identity, but cannot guarantee real-world anonymity against information users voluntarily reveal in free-text responses.",
      "A response code does not prove physical user identity; codes can be shared or transferred before submission.",
      "Physical code distribution could be tracked externally by an instructor outside the application.",
      "The bounded-context architecture is tailored for class-sized cohorts (~50 responses) and would require architectural redesign for massive enterprise-wide surveys.",
    ],

    lessonsQuote:
      "Privacy is an architectural discipline, not a checkbox. The best way to protect respondent identity is never storing or collecting it in the first place.",
    lessonsPoints: [
      {
        title: "Avoid Unnecessary RAG",
        body: "When context fits comfortably within model limits, full-context ingestion gives better holistic reasoning without vector pipeline complexity.",
      },
      {
        title: "Database Locks Over App Locks",
        body: "Enforcing single-use code consumption inside a database transaction guarantees correctness across distributed server instances.",
      },
    ],
  },
};
