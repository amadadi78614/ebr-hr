// HR & Payroll (HRO) EBR. Sources: HRO Executive Business Review FY27 (Thomas Matsane, Nov 2026)
// and HRO MBR September 2026 review (20 Oct 2026).
const M = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const CONFIG = {
  key: 'hr',
  domain: 'HR & Payroll',
  period: 'H1 FY27',
  accent: '#009FE3',
  accent2: '#FF6F4D',
  source: 'WNS Operations, Transformation and Analytics · HRO EBR FY27 · H1 review',
  tabs: [
    {
      "id": "agenda",
      "label": "Agenda",
      "title": "HR and Payroll · Executive Business Review",
      "blocks": [
        {
          "type": "agenda",
          "span": 12,
          "rows": 6,
          "items": [
            {
              "label": "Executive summary",
              "icon": "BadgeCheck",
              "tab": "summary",
              "line": "99%+ payroll accuracy · R199m paid monthly · 98% of queries resolved in target"
            },
            {
              "label": "H1 highlights",
              "icon": "Star",
              "tab": "delivery",
              "line": "Four platforms and policies delivered, with payroll unaffected"
            },
            {
              "label": "FY27 focus areas",
              "icon": "Target",
              "tab": "focus",
              "line": "Six priorities, anchored on EC and ECP going live on 1 March 2027"
            },
            {
              "label": "Analytics",
              "icon": "BarChart3",
              "tab": "analytics",
              "line": "Six HR analytics products · next frontier is prescriptive",
              "who": "WNS Analytics"
            },
            {
              "label": "Transformation: Org Design platform",
              "icon": "Network",
              "tab": "ai",
              "line": "Org Design platform on Employee Central, replacing Nakisa",
              "who": "WNS Transformation"
            },
            {
              "label": "AI strategy",
              "icon": "Sparkles",
              "tab": "aistrategy",
              "line": "SAP first, payroll safe: PCC rules, then Joule, then agents",
              "who": "WNS Transformation"
            },
            {
              "label": "Governance and decisions",
              "icon": "ShieldCheck",
              "tab": "next",
              "line": "Six gates before any AI · three decisions requested from Telkom"
            }
          ]
        }
      ]
    },
    {
      "id": "summary",
      "label": "Executive summary",
      "title": "Payroll paid accurately and on time, with zero impact from platform change",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "99%+",
              "label": "Payroll accuracy",
              "sub": "Every pay run, April to September",
              "tone": "good"
            },
            {
              "value": "R199m",
              "label": "Paid every month",
              "sub": "6,118 employees · Telkom and Openserve"
            },
            {
              "value": "4,630",
              "label": "Employee queries resolved",
              "sub": "FY27 to date · Admin, Payroll, Time"
            },
            {
              "value": "98%",
              "label": "Resolved within target",
              "sub": "About 5 hours on average",
              "tone": "good"
            }
          ]
        },
        {
          "type": "chart",
          "kind": "bar",
          "span": 6,
          "rows": 4,
          "title": "Employee queries by mailbox, FY27 to date",
          "note": "% resolved within target time",
          "labels": [
            "Admin",
            "Payroll",
            "Time management"
          ],
          "datasets": [
            {
              "label": "Queries",
              "data": [
                2373,
                1877,
                380
              ],
              "color": "accent"
            }
          ],
          "footnote": "Within target: Admin 98.6% · Payroll 97.7% · Time management 97.6%"
        },
        {
          "type": "cards",
          "span": 6,
          "rows": 4,
          "cols": 2,
          "list": true,
          "title": "Core HR and payroll work, every month · click for detail",
          "items": [
            {
              "icon": "Banknote",
              "name": "Monthly payroll",
              "line": "Telkom and Openserve, on time",
              "detail": {
                "text": "September 2026 payroll processed successfully, as every month in H1."
              }
            },
            {
              "icon": "Landmark",
              "name": "Statutory submissions",
              "line": "SARS EMP501, B-BBEE salaries",
              "detail": {
                "text": "Biannual SARS submissions (21 Sep to 30 Oct) tested on e-filing; Aug and Sep gross salaries submitted for B-BBEE valuation."
              }
            },
            {
              "icon": "Headphones",
              "name": "HR call centre",
              "line": "Helpdesk for all staff",
              "detail": {
                "text": "WNS is the HR helpdesk for every Telkom and Openserve employee."
              }
            },
            {
              "icon": "GraduationCap",
              "name": "Bursaries and study loans",
              "line": "2027 intake open",
              "detail": {
                "text": "Part-time bursary applications open for 2027; Q2 bursary, debt recovery and active loan reports submitted."
              }
            },
            {
              "icon": "Building2",
              "name": "Master data and org changes",
              "line": "Reporting lines, grades, offices",
              "detail": {
                "text": "Intern grades corrected (OP1 to OP2); Openserve reporting lines, office and job function data updated."
              }
            },
            {
              "icon": "HeartPulse",
              "name": "Pensioners and medical aid",
              "line": "Rebates and changes",
              "detail": {
                "text": "Monthly medical aid rebates for pensioners and active employees."
              }
            }
          ]
        }
      ]
    },
    {
      id: 'delivery', label: 'H1 highlights', title: 'H1 highlights: new platforms and policies, with payroll unaffected',
      blocks: [
        {
          "type": "cards",
          "span": 12,
          "cols": 4,
          "rows": 6,
          "feature": true,
          "roleLabel": "WNS role",
          "footLabel": "What it unlocks",
          "title": "H1 highlights · click for detail",
          "items": [
            {
              "icon": "Waves",
              "name": "Consortium allowance",
              "line": "Telkom's undersea cable allowance, now paid through payroll",
              "status": "live",
              "statusText": "Live",
              "role": "Configured, tested and processed the new allowance in payroll",
              "foot": "Policy change live with no side payments",
              "detail": {
                "text": "Telkom changed the policy; WNS built it into payroll and pays it every month."
              }
            },
            {
              "icon": "Headphones",
              "name": "HR call centre on Genesys Cloud",
              "line": "The HR helpdesk for all Telkom and Openserve staff",
              "status": "live",
              "statusText": "In use",
              "role": "Runs the call centre; tested the new platform and moved across while staying open to staff",
              "foot": "More features and better call handling than the old UAD application",
              "detail": {
                "text": "Telkom chose Genesys Cloud; WNS is its only call centre user and runs HR calls on it."
              }
            },
            {
              "icon": "Smartphone",
              "name": "SAP Fiori ESS roll-out",
              "line": "Leave, approvals and payslips on mobile",
              "status": "live",
              "statusText": "Rolled out",
              "role": "Tested payslip data before roll-out; now resolves employee Fiori queries",
              "foot": "Employees on self-service, ahead of Employee Central",
              "detail": {
                "text": "Telkom rolled out Fiori; WNS provided the testing and now supports employees using it."
              }
            },
            {
              "icon": "Users",
              "name": "Specialist support on key systems",
              "line": "For example, the ECP project",
              "status": "progress",
              "statusText": "Ongoing",
              "role": "HR and payroll SMEs, hands-on across iteration testing and UAT",
              "foot": "A safe 1 March 2027 go-live",
              "detail": {
                "text": "Most of H1 went into ECP: WNS brings the payroll expertise the implementation depends on."
              }
            }
          ]
        },
      ],
    },
    {
      "id": "focus",
      "label": "FY27 focus",
      "title": "Six FY27 priorities, anchored on EC and ECP going live on 1 March 2027",
      "blocks": [
        {
          "type": "cards",
          "span": 12,
          "rows": 6,
          "cols": 3,
          "title": "FY27 key focus areas · click for detail",
          "items": [
            {
              "icon": "Cpu",
              "name": "EC and Payroll implementation",
              "line": "User acceptance testing, parallel testing, then go-live",
              "status": "progress",
              "detail": {
                "text": "User acceptance testing and parallel payroll runs, then go-live on 1 March 2027. WNS provides testing support."
              },
              "foot": "UAT worked through · parallel payroll runs now · go-live 1 March 2027"
            },
            {
              "icon": "Link",
              "name": "Seamless integration",
              "line": "Upstream and downstream across HR and payroll systems",
              "status": "progress",
              "foot": "Real-time data flow across HR and payroll"
            },
            {
              "icon": "ShieldCheck",
              "name": "Payroll Control Center",
              "line": "Automated payroll processing with rules, alerts and controls",
              "status": "planned",
              "foot": "Goes live with EC and ECP on 1 March 2027"
            },
            {
              "icon": "Scissors",
              "name": "Third-party deductions",
              "line": "Delimit third-party deductions",
              "status": "progress",
              "detail": {
                "text": "Delimit third-party deductions and keep only statutory deductions (PAYE, UIF and others) in payroll."
              },
              "foot": "Keep only statutory deductions (PAYE, UIF) in payroll"
            },
            {
              "icon": "Users",
              "name": "Headcount reporting",
              "line": "One consistent view of headcount",
              "status": "progress",
              "foot": "For executive reporting · WNS Analytics"
            },
            {
              "icon": "Network",
              "name": "Organisation structure",
              "line": "SuccessFactors organisational design dashboard",
              "status": "progress",
              "statusText": "In design",
              "foot": "Org Design platform in design · WNS Transformation"
            }
          ],
          "feature": true,
          "footLabel": "Where we are",
          "dense": true
        }
      ]
    },
    {
      id: 'analytics', owner: {   "name": "Dani Viljoen",   "role": "WNS Analytics" }, label: 'Analytics', title: 'A more reliable workforce decision layer',
      blocks: [
        {
          type: 'cards', span: 8, rows: 4, cols: 3, title: 'Six analytics products · WNS Analytics · click for detail',
          items: [
            { icon: 'GraduationCap', name: 'B-BBEE Skills Development', line: 'Training spend vs targets', status: 'live', statusText: 'New', detail: { text: 'Tracks training spend and participation against Skills Development targets, so gaps show early and compliance holds.' } },
            { icon: 'Users', name: 'HR Headcount Report', line: 'BU, grade, employment type', status: 'live', statusText: 'New', detail: { text: 'Automates the CoE headcount report, replacing manual compilation with a repeatable view.' } },
            { icon: 'UserSearch', name: 'HR Talent Dashboard', line: 'Demographics and succession', status: 'live', statusText: 'New', detail: { text: 'Identifies workforce risks, critical-role coverage and successor readiness.' } },
            { icon: 'HeartPulse', name: 'Pensioners Medical Aid', line: 'Status and history in SharePoint', status: 'complete', statusText: 'Maintained', detail: { text: 'Improves query resolution, auditability and compliance.' } },
            { icon: 'CalendarClock', name: 'Leave Liability (LPA)', line: 'Accrued leave and value', status: 'complete', statusText: 'Maintained', detail: { text: 'Supports month-end provisioning and proactive leave management.' } },
            { icon: 'Inbox', name: 'HRO Mailbox Monitoring', line: 'Volumes, response times, backlog', status: 'complete', statusText: 'Maintained', detail: { text: 'Exposes backlogs and improves employee service accountability.' } },
          ],
        },
        {
          type: 'rings', span: 4, rows: 4, size: 92, title: 'Data maturity · next frontier is prescriptive and cognitive',
          caption: 'Reports, dashboards and forecasting are in place. Next: recommendations (prescriptive), then controlled execution through agents (cognitive).',
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
            { "text": "Confirm readiness gates for 1 March 2027", "sub": "UAT, parallel payroll runs and Payroll Control Center rules signed off before go-live" },
            { "text": "Approve SuccessFactors API access for the Org Design platform", "sub": "The platform reads structure, positions and people from Employee Central" },
            { "text": "Name the HR owner for Org Design sign-off", "sub": "One accountable owner to approve the URS and the design" }
          ]
        }
      ]
    },
  ],
}
export default CONFIG
