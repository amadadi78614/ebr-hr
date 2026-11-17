// HR & Payroll (HRO) EBR. Sources: HRO Executive Business Review FY27 (Thomas Matsane, Nov 2026)
// and HRO MBR September 2026 review (20 Oct 2026).
const M = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const CONFIG = {
  key: 'hr',
  domain: 'HR & Payroll',
  period: 'H1 FY27',
  accent: '#009FE3',
  accent2: '#FF6F4D',
  source: 'WNS Operations, Transformation and Analytics · HRO EBR FY27 · HRO MBR Sep 2026 review',
  tabs: [
    {
      "id": "summary",
      "label": "Executive summary",
      "title": "Smarter HR. Safer Payroll.",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "13/13",
              "label": "SLAs met every month",
              "sub": "Jul to Sep · 11 critical",
              "tone": "good"
            },
            {
              "value": "R199m",
              "label": "Paid accurately every month",
              "sub": "6,118 employees · Telkom and Openserve"
            },
            {
              "value": "4",
              "label": "H1 deliveries",
              "sub": "Including SAP Fiori ESS on mobile",
              "tone": "good"
            },
            {
              "value": "1 Mar",
              "label": "EC and ECP go-live",
              "sub": "2027 · the foundation for HR AI"
            }
          ]
        },
        {
          "type": "cards",
          "span": 12,
          "rows": 4,
          "cols": 4,
          "title": "Four messages for the room · click for detail",
          "feature": true,
          "footLabel": "Why it matters",
          "items": [
            {
              "icon": "Rocket",
              "name": "H1 delivery",
              "foot": "Platforms modernised while payroll ran without a missed SLA",
              "line": "Consortium allowance, Genesys Cloud, SAP Fiori ESS",
              "status": "delivered",
              "detail": {
                "text": "Three platform and payroll changes live in the first half, plus ongoing ECP testing support."
              }
            },
            {
              "icon": "Target",
              "name": "FY27 focus",
              "foot": "One HR and payroll platform, with controls built in",
              "line": "EC and ECP live on 1 March 2027",
              "status": "progress",
              "detail": {
                "text": "With integration, Payroll Control Center and executive dashboards."
              }
            },
            {
              "icon": "Sparkles",
              "name": "AI direction",
              "foot": "Use the AI already in SAP, on clean data, before adding platforms",
              "line": "SAP first, payroll safe",
              "status": "proposed",
              "detail": {
                "text": "Payroll Control Center rules, then Joule and Explain My Pay; other platforms are additions."
              }
            },
            {
              "icon": "ShieldCheck",
              "name": "Governance",
              "foot": "No AI goes live without privacy, accuracy and access checks",
              "line": "POPIA, data quality and accuracy gate every AI step",
              "status": "planned",
              "detail": {
                "text": "Controls and permissions audit comes first."
              }
            }
          ]
        }
      ]
    },
    {
      id: 'since', label: 'Since last EBR', title: 'Since the May 2026 EBR',
      blocks: [
        {
          type: 'hero', items: [
            { value: '13/13', label: 'SLAs met', sub: 'Every month, Jul to Sep', tone: 'good' },
            { value: '3', label: 'Operations deliveries', sub: 'Fiori ESS · Genesys Cloud · Consortium allowance', tone: 'good' },
            { value: '1 Mar', label: 'EC and ECP go-live', sub: '2027 · UAT and parallel runs under way' },
            { value: '6', label: 'Analytics products', sub: 'Headcount · talent · B-BBEE · leave liability · more', tone: 'good' },
          ],
        },
        {
          type: 'journey', span: 12, rows: 4, title: 'Where we were, where we are · click a row', thenLabel: 'Last EBR · May 2026', nowLabel: 'Now · Sep 2026 review',
          items: [
            { icon: 'Cpu', label: 'EC and ECP implementation', then: 'UAT from 12 May', now: 'Parallel runs', status: 'progress', detail: { text: 'Go-live set for 1 March 2027, with integration, Payroll Control Center and dashboards.' } },
            { icon: 'Smartphone', label: 'SAP Fiori ESS', then: 'FY27 focus area', now: 'Delivered', status: 'delivered' },
            { icon: 'Headphones', label: 'HR call centre', then: 'UAD application', now: 'Genesys Cloud', status: 'delivered' },
            { icon: 'Scissors', label: 'Third-party deductions', then: 'Planned', now: 'Cancelling', status: 'progress' },
            { icon: 'Network', label: 'Org Design platform', then: 'Requested', now: 'In design · URS update', status: 'progress', detail: { text: 'WNS Transformation build replacing Nakisa, on SuccessFactors data. Requirements (URS) being updated; SuccessFactors API access requested.' } },
            { icon: 'BarChart3', label: 'B-BBEE', then: 'Analytics model', now: 'Training scorecard', status: 'progress' },
            { icon: 'Users', label: 'Talent and succession analytics', then: 'Proof of capability', now: 'HR Talent Dashboard', status: 'progress', detail: { text: 'Demonstrated at the last EBR as a cognitive analytics deep-dive; now built into a talent and succession dashboard (WNS Analytics).' } },
            { icon: 'ShieldCheck', label: 'AI direction', then: 'General AI trends', now: 'SAP first, payroll safe', status: 'proposed' },
          ],
        },
      ],
    },
    {
      id: 'delivery', label: 'H1 delivery', title: 'Four H1 deliveries, and what they unlock',
      blocks: [
        {
          type: 'cards', span: 12, cols: 4, rows: 5, feature: true, footLabel: 'What it unlocks', title: 'H1 delivery highlights · click for detail',
          items: [
            { icon: 'Waves', name: 'Consortium allowance', foot: 'Allowances paid through payroll, no side payments', line: 'Undersea cable allowance paid through payroll', status: 'delivered', detail: { text: 'Undersea cable allowance incorporated as an allowance and processed through payroll.', rows: [['Unlocks', 'Allowances paid through payroll, no side payments']] } },
            { icon: 'Headphones', name: 'Genesys Cloud call centre', foot: 'Query insight for HRO: the base for an HR policy advisor', line: 'Replaced the UAD application', status: 'delivered', detail: { text: 'HR call centre management moved to Genesys Cloud for better call handling.', rows: [['Unlocks', 'Call and query insight for HRO, the base for an HR policy advisor']] } },
            { icon: 'Smartphone', name: 'SAP Fiori ESS', foot: 'Self-service habits in place before Employee Central and Joule', line: 'Leave, approvals and payslips on mobile', status: 'delivered', detail: { text: 'Digital transformation of the ESS dashboard: leave submission, approvals and payslips on mobile or SAP on-premise.', rows: [['Unlocks', 'Self-service habits in place before Employee Central and Joule']] } },
            { icon: 'FlaskConical', name: 'ECP testing support', foot: 'A safe 1 March 2027 go-live', line: 'Iteration testing and UAT', status: 'progress', detail: { text: 'Specialist expertise and hands-on support across iteration testing and UAT throughout FY27.', rows: [['Unlocks', 'A safe 1 March 2027 go-live']] } },
          ],
        },
      ],
    },
    {
      "id": "focus",
      "owner": {
        "name": "Mohamed Nomani",
        "role": "WNS Transformation · part of Capgemini"
      },
      "label": "FY27 focus",
      "title": "Six FY27 priorities, anchored on EC and ECP",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "1 Mar 2027",
              "label": "EC and ECP go-live",
              "sub": "UAT and parallel runs now",
              "tone": "good"
            },
            {
              "value": "6",
              "label": "FY27 priorities",
              "sub": "Platform, integration, controls, data"
            },
            {
              "value": "PCC",
              "label": "Controls at go-live",
              "sub": "Rules, alerts and process controls"
            },
            {
              "value": "Org Design",
              "label": "Main WNS build",
              "sub": "Replacing Nakisa · in design"
            }
          ]
        },
        {
          "type": "cards",
          "span": 12,
          "rows": 4,
          "cols": 3,
          "title": "FY27 key focus areas · click for detail",
          "items": [
            {
              "icon": "Cpu",
              "name": "EC and Payroll implementation",
              "line": "UAT, parallel testing, go-live",
              "status": "progress",
              "detail": {
                "text": "User acceptance testing and parallel payroll runs, then go-live on 1 March 2027. WNS provides testing support."
              }
            },
            {
              "icon": "Link",
              "name": "Seamless integration",
              "line": "Real-time data across HR and payroll",
              "status": "progress"
            },
            {
              "icon": "ShieldCheck",
              "name": "Payroll Control Center",
              "line": "Rules, alerts and process controls",
              "status": "planned"
            },
            {
              "icon": "Scissors",
              "name": "Third-party deductions",
              "line": "Statutory deductions only",
              "status": "progress",
              "detail": {
                "text": "Delimit third-party deductions and keep only statutory deductions (PAYE, UIF and others) in payroll."
              }
            },
            {
              "icon": "Users",
              "name": "Headcount reporting",
              "line": "One view for executive reporting",
              "status": "progress",
              "team": "Analytics"
            },
            {
              "icon": "Network",
              "name": "Organisation structure",
              "line": "Org Design platform on SuccessFactors",
              "status": "progress",
              "statusText": "In design",
              "team": "Transformation"
            }
          ]
        }
      ]
    },
    {
      id: 'analytics', owner: {   "name": "Dani Viljoen",   "role": "WNS Analytics" }, label: 'Analytics', title: 'A more reliable workforce decision layer',
      blocks: [
        {
          type: 'cards', span: 8, rows: 4, cols: 3, title: 'Six analytics products · WNS Analytics · click for detail',
          items: [
            { icon: 'GraduationCap', name: 'B-BBEE Skills Development', line: 'Training spend vs targets', status: 'live', statusText: 'New', team: 'Analytics', detail: { text: 'Tracks training spend and participation against Skills Development targets to identify gaps early. Controls compliance and removes surprises.' } },
            { icon: 'Users', name: 'HR Headcount Report', line: 'BU, grade, employment type', status: 'live', statusText: 'New', team: 'Analytics', detail: { text: 'Automates the CoE headcount report, replacing manual compilation with a repeatable view.' } },
            { icon: 'UserSearch', name: 'HR Talent Dashboard', line: 'Demographics and succession', status: 'live', statusText: 'New', team: 'Analytics', detail: { text: 'Identifies workforce risks, critical-role coverage and successor readiness.' } },
            { icon: 'HeartPulse', name: 'Pensioners Medical Aid', line: 'Status and history in SharePoint', status: 'complete', statusText: 'Maintained', team: 'Analytics', detail: { text: 'Improves query resolution, auditability and compliance.' } },
            { icon: 'CalendarClock', name: 'Leave Liability (LPA)', line: 'Accrued leave and value', status: 'complete', statusText: 'Maintained', team: 'Analytics', detail: { text: 'Supports month-end provisioning and proactive leave management.' } },
            { icon: 'Inbox', name: 'HRO Mailbox Monitoring', line: 'Volumes, response times, backlog', status: 'complete', statusText: 'Maintained', team: 'Analytics', detail: { text: 'Exposes backlogs and improves employee service accountability.' } },
          ],
        },
        {
          type: 'rings', span: 4, rows: 4, size: 92, title: 'Data maturity · next frontier is prescriptive and cognitive',
          items: [
            { pct: 100, value: '100%', label: 'Descriptive to predictive', sub: 'Hindsight, insight, foresight' },
            { pct: 20, value: '20%', label: 'Prescriptive', sub: 'What should we do?', color: 'accent2' },
            { pct: 5, value: '5%', label: 'Cognitive', sub: 'Controlled execution', color: 'accent2' },
          ],
        },
      ],
    },
    {
      "id": "ai",
      "label": "Transformation",
      "owner": {
        "name": "Mohamed Nomani",
        "role": "WNS Transformation · part of Capgemini"
      },
      "title": "Org Design platform leads HR transformation",
      "blocks": [
        {
          "type": "arch",
          "span": 8,
          "rows": 6,
          "title": "Org Design platform · how it works · click an outcome",
          "sources": [
            {
              "icon": "Database",
              "name": "SuccessFactors EC",
              "sub": "Structure, positions, people"
            },
            {
              "icon": "Network",
              "name": "Nakisa",
              "sub": "Current org tool",
              "retire": true
            }
          ],
          "core": {
            "kicker": "WNS Transformation",
            "name": "Org Design platform",
            "status": "progress",
            "statusText": "In design · URS"
          },
          "outputs": [
            {
              "icon": "Network",
              "name": "Live org chart",
              "metric": "Always current",
              "detail": {
                "text": "Drawn from Employee Central, not maintained by hand.",
                "rows": [
                  [
                    "Benefit",
                    "One version of the truth, no offline charts"
                  ]
                ]
              }
            },
            {
              "icon": "Briefcase",
              "name": "Position management",
              "metric": "Vacancies visible",
              "detail": {
                "text": "Filled and vacant positions by unit, grade and reporting line.",
                "rows": [
                  [
                    "Benefit",
                    "Faster hiring and budget decisions"
                  ]
                ]
              }
            },
            {
              "icon": "GitBranch",
              "name": "Design changes",
              "metric": "Model, then approve",
              "detail": {
                "text": "Draft a restructure, compare it with today and route it for approval. Scope being confirmed in the URS.",
                "rows": [
                  [
                    "Benefit",
                    "Faster, governed restructures"
                  ]
                ]
              }
            },
            {
              "icon": "Users",
              "name": "Headcount view",
              "metric": "One number",
              "detail": {
                "text": "Headcount by unit, grade and employment type alongside the structure.",
                "rows": [
                  [
                    "Benefit",
                    "Links to the HR headcount report"
                  ]
                ]
              }
            }
          ]
        },
        {
          "type": "cards",
          "span": 4,
          "rows": 6,
          "cols": 1,
          "list": true,
          "title": "HR transformation portfolio",
          "items": [
            {
              "icon": "Network",
              "name": "Org Design platform",
              "status": "progress",
              "statusText": "In design"
            },
            {
              "icon": "Cpu",
              "name": "EC and ECP testing support",
              "status": "progress"
            },
            {
              "icon": "ShieldCheck",
              "name": "Payroll Control Center rules",
              "status": "planned"
            },
            {
              "icon": "MessageSquare",
              "name": "HR policy advisor",
              "status": "proposed",
              "statusText": "Proposed use case"
            },
            {
              "icon": "FileBadge",
              "name": "Certificate of service",
              "status": "planned"
            }
          ]
        }
      ]
    },
    {
      "id": "aistrategy",
      "owner": {
        "name": "Mohamed Nomani",
        "role": "WNS Transformation · part of Capgemini"
      },
      "label": "AI strategy",
      "title": "AI strategy: SAP first, payroll safe",
      "blocks": [
        {
          "type": "cards",
          "span": 12,
          "rows": 3,
          "cols": 3,
          "title": "Sequence matters: automation, then generative assistance, then agents · click for detail",
          "items": [
            {
              "icon": "ShieldCheck",
              "name": "Foundation · PCC rules",
              "line": "Rules-based automation",
              "status": "planned",
              "statusText": "At go-live",
              "detail": {
                "text": "Payroll Control Center detects validation exceptions and supports controlled remediation. It is not, by itself, generative AI."
              }
            },
            {
              "icon": "MessageSquare",
              "name": "Near-term · Joule",
              "line": "Generative assistance",
              "status": "proposed",
              "statusText": "After go-live",
              "detail": {
                "text": "Employee Central self-service and pay-statement questions in natural language, within SAP permissions. Explain My Pay is only as accurate as the payroll data beneath it."
              }
            },
            {
              "icon": "Bot",
              "name": "Explore · SAP agents",
              "line": "Agentic AI (emerging)",
              "status": "proposed",
              "statusText": "Confirm availability",
              "detail": {
                "text": "HR Operations, HR Service and Payroll assistants are restricted or planned releases. Availability to be confirmed with SAP."
              }
            }
          ]
        },
        {
          "type": "track",
          "span": 8,
          "rows": 2,
          "title": "How WNS takes any AI use case to value · HR policy advisor is at step 2",
          "at": 1,
          "steps": [
            "Business problem",
            "Use case",
            "Prove value (POC)",
            "Select architecture",
            "Embed in workflow",
            "Measure outcome"
          ]
        },
        {
          "type": "asks",
          "span": 4,
          "rows": 2,
          "title": "To move AI from learning to value",
          "items": [
            "Enable Microsoft enterprise AI access for Shared Services",
            "Fund contained AI only where a business case proves it"
          ]
        }
      ]
    },
    {
      "id": "next",
      "label": "Governance and decisions",
      "title": "Controls and permissions audit comes first",
      "blocks": [
        {
          "type": "cards",
          "span": 8,
          "rows": 4,
          "cols": 3,
          "title": "Six gates before any AI is switched on · click for detail",
          "items": [
            {
              "icon": "Lock",
              "name": "Privacy and POPIA",
              "line": "Lawful processing, data minimisation",
              "detail": {
                "text": "Assess lawful processing, data minimisation and any automated-decision implications."
              }
            },
            {
              "icon": "Target",
              "name": "Accuracy",
              "line": "Grounded, tested, explainable",
              "detail": {
                "text": "Ground answers in authorised records; test payroll and tax wording; show escalation paths."
              }
            },
            {
              "icon": "KeyRound",
              "name": "Access and integrity",
              "line": "Role-based permissions",
              "detail": {
                "text": "Role-based permissions, segregation of duties and master-data checks."
              }
            },
            {
              "icon": "HeartHandshake",
              "name": "Workforce trust",
              "line": "Engage, train, communicate",
              "detail": {
                "text": "Engage staff representatives, train users and be clear about AI limitations."
              }
            },
            {
              "icon": "Receipt",
              "name": "Commercial fit",
              "line": "Licence, tenant, SAP release",
              "detail": {
                "text": "Confirm licence cost, tenant readiness, SAP release and feature availability."
              }
            },
            {
              "icon": "Activity",
              "name": "Operational assurance",
              "line": "Human approval, logging",
              "detail": {
                "text": "Keep human approval, logging, incident handling and performance monitoring."
              }
            }
          ]
        },
        {
          "type": "asks",
          "span": 4,
          "rows": 4,
          "title": "Decisions requested from Telkom",
          "items": [
            "Confirm readiness gates for 1 March 2027",
            "Approve SuccessFactors API access for the Org Design platform",
            "Name the HR owner for Org Design sign-off"
          ]
        }
      ]
    },
  ],
}
export default CONFIG
