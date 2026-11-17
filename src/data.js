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
            { icon: 'Network', label: 'Organisation structure', then: 'Requested', now: 'SuccessFactors dashboard', status: 'progress' },
            { icon: 'BarChart3', label: 'B-BBEE', then: 'Analytics model', now: 'Training scorecard', status: 'progress' },
            { icon: 'Users', label: 'Talent and succession analytics', then: 'Proof of capability', now: 'HR Talent Dashboard', status: 'progress', detail: { text: 'Demonstrated at the last EBR as a cognitive analytics deep-dive; now built into a talent and succession dashboard (WNS Analytics).' } },
            { icon: 'ShieldCheck', label: 'AI direction', then: 'General AI trends', now: 'SAP first, payroll safe', status: 'proposed' },
          ],
        },
      ],
    },
    {
      id: 'operations', label: 'Operations', title: 'Payroll and HR operations, September 2026',
      blocks: [
        {
          type: 'hero', items: [
            { value: 'R199m', label: 'Monthly salaries processed', sub: 'Openserve ~R135m · Telkom ~R64m', detail: { text: 'September 2026 payroll processed successfully.' } },
            { value: '6,118', label: 'Headcount', sub: 'Openserve ~4,587 · Telkom ~1,531' },
            { value: '13/13', label: 'SLAs met', sub: 'Jul, Aug and Sep · 11 critical', tone: 'good' },
            { value: 'R3.0m', label: 'PayMeNow', sub: 'Openserve ~R2.3m · Telkom ~R704k' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 7, title: 'Overtime paid per business unit', note: 'R million', suffix: 'm', labels: M,
          datasets: [
            { label: 'Openserve', data: [3.04, 2.01, 2.09, 1.74, 4.77, 3.10], color: 'accent' },
            { label: 'Telkom', data: [0.05, 0.12, 0.14, 0.08, 0.15, 0.08], color: 'accent2' },
          ],
          footnote: 'August peak R4.8m at Openserve.',
        },
        {
          type: 'tiles', span: 5, cols: 2, title: 'This month · click for detail',
          items: [
            { label: 'Rebate: pensioners', value: 'R2.8m', tone: 'grey' },
            { label: 'Rebate: active', value: 'R2.4m', tone: 'grey' },
            { label: 'SARS biannual submissions', value: '21 Sep–30 Oct', tone: 'green', detail: { text: 'EMP501 submission testing completed on e-filing for Telkom and Openserve.' } },
            { label: 'IT88s received from SARS', value: '300', tone: 'amber', detail: { text: 'IT88s and penalties to be deducted from employees via payroll.' } },
            { label: 'PwC biannual audits', value: 'Started', tone: 'amber', detail: { text: 'Telkom and Openserve audits commenced.' } },
            { label: 'B-BBEE salary submission', value: 'Aug + Sep', tone: 'green' },
          ],
        },
      ],
    },
    {
      id: 'delivery', label: 'H1 delivery', title: 'Four deliveries in the first half',
      blocks: [
        {
          type: 'cards', span: 12, cols: 4, rows: 3, title: 'Delivered · click for detail',
          items: [
            { icon: 'Waves', name: 'Consortium allowance', line: 'Undersea cable allowance paid through payroll', status: 'delivered', detail: { text: 'Undersea cable allowance incorporated as an allowance and processed through payroll.' } },
            { icon: 'Headphones', name: 'Genesys Cloud call centre', line: 'Replaced the UAD application', status: 'delivered', detail: { text: 'HR call centre management moved to Genesys Cloud for better call handling.' } },
            { icon: 'Smartphone', name: 'SAP Fiori ESS', line: 'Leave, approvals and payslips on mobile', status: 'delivered', detail: { text: 'Digital transformation of the ESS dashboard: leave submission, approvals and payslips on mobile or SAP on-premise.' } },
            { icon: 'FlaskConical', name: 'ECP testing support', line: 'Iteration testing and UAT', status: 'progress', detail: { text: 'Specialist expertise and hands-on support across iteration testing and UAT throughout FY27.' } },
          ],
        },
        {
          type: 'cards', span: 12, cols: 4, rows: 2, title: 'Operational highlights',
          items: [
            { icon: 'Percent', name: 'SARS interest rates', line: 'CR logged per SARS guidelines', status: 'progress' },
            { icon: 'GraduationCap', name: 'Bursaries 2027', line: 'Part-time applications open', status: 'live' },
            { icon: 'BadgeCheck', name: 'Intern job grades', line: 'Corrected OP1 to OP2', status: 'complete' },
            { icon: 'Building2', name: 'Openserve master data', line: 'Reporting lines, office and job function', status: 'complete' },
          ],
        },
      ],
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
      id: 'transformation', owner: {   "name": "Mohamed Nomani",   "role": "WNS Transformation · part of Capgemini" }, label: 'EC and ECP', title: 'Employee Central and Payroll go live on 1 March 2027',
      blocks: [
        {
          type: 'stepper', span: 12, rows: 3, title: 'EC and ECP implementation path', note: 'Go-live 1 March 2027',
          steps: [
            { name: 'Iteration testing', icon: 'FlaskConical', title: 'Iteration testing with WNS specialists', points: ['Completed iterations', 'Defects logged'] },
            { name: 'UAT', icon: 'ClipboardCheck', title: 'User acceptance testing', points: ['Under way', 'HRO testing support'] },
            { name: 'Parallel runs', icon: 'GitCompareArrows', title: 'Parallel payroll runs', points: ['Current month focus', 'Old vs new payroll compared'] },
            { name: 'Deductions', icon: 'Scissors', title: 'Third-party deductions cancelled', points: ['Statutory only: PAYE, UIF', 'Cancellations in progress'] },
            { name: 'Go-live', icon: 'Rocket', title: 'EC and ECP live, 1 March 2027', points: ['Integration', 'Payroll Control Center'] },
            { name: 'Dashboards', icon: 'BarChart3', title: 'Headcount and org structure dashboards', points: ['One headcount view', 'SuccessFactors org design'] },
          ],
        },
        {
          type: 'cards', span: 12, cols: 5, rows: 2, title: 'WNS Transformation portfolio · click for detail',
          items: [
            { icon: 'Network', name: 'Org Design platform', line: 'WNS build replacing Nakisa', status: 'progress', team: 'Transformation', detail: { rows: [['What', 'Organisation design platform on SuccessFactors data, replacing Nakisa'], ['Now', 'URS updated; SuccessFactors API access being finalised'], ['Unlocks', 'Org structure dashboard and position management']] } },
            { icon: 'Cpu', name: 'EC and ECP go-live', line: 'Testing support to 1 Mar 2027', status: 'progress', team: 'Operations + Transformation' },
            { icon: 'ShieldCheck', name: 'Payroll Control Center', line: 'Rules and alerts at go-live', status: 'planned', team: 'Transformation' },
            { icon: 'BarChart3', name: 'B-BBEE training scorecard', line: 'Work in progress', status: 'progress', team: 'Transformation + Analytics' },
            { icon: 'FileBadge', name: 'Certificate of service', line: 'Automation in SuccessFactors', status: 'planned', team: 'Transformation', detail: { text: 'Parked for later: sales incentive upload to SAP, full-time bursary payments, HRO OneView control panel.' } },
          ],
        },
      ],
    },
    {
      "id": "ai",
      "label": "Transformation and AI",
      "owner": {
        "name": "Mohamed Nomani",
        "role": "WNS Transformation · part of Capgemini"
      },
      "title": "From manual HR admin to governed HR AI",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "EC + ECP",
              "label": "Testing support",
              "sub": "UAT and parallel runs",
              "tone": "good"
            },
            {
              "value": "URS",
              "label": "Org Design platform",
              "sub": "Replacing Nakisa, on SuccessFactors"
            },
            {
              "value": "1 Mar",
              "label": "Go-live",
              "sub": "Clean data is the base for HR AI"
            },
            {
              "value": "POC",
              "label": "First HR AI use case",
              "sub": "HR policy advisor on HRO queries"
            }
          ]
        },
        {
          "type": "track",
          "span": 12,
          "rows": 2,
          "title": "Automation to AI, step by step · where the HR policy advisor is today",
          "at": 1
        },
        {
          "type": "waves",
          "big": true,
          "span": 12,
          "rows": 4,
          "title": "WNS Transformation portfolio · done, under way, next 90 days",
          "items": [
            {
              "when": "Done · live at Telkom",
              "name": "Delivered",
              "tone": "done",
              "items": [
                "Org Design platform requirements (URS) defined",
                "HR automation pipeline identified: certificate of service, sales incentive upload, bursary payments, HRO OneView"
              ]
            },
            {
              "when": "Under way",
              "name": "Being delivered now",
              "tone": "doing",
              "items": [
                "EC and ECP testing support to go-live",
                "B-BBEE training scorecard, with Analytics",
                "Org Design platform build on SuccessFactors data",
                "Payroll Control Center rules"
              ]
            },
            {
              "when": "Next 90 days",
              "name": "What we will prove next",
              "tone": "next",
              "items": [
                "HR policy advisor POC on real HRO queries",
                "Certificate of service automation",
                "Permissions and POPIA audit first"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'next', label: 'Way forward', title: 'Controls and permissions first, then AI',
      blocks: [
        {
          type: 'waves', span: 8, rows: 2, title: 'Roadmap',
          items: [
            { when: 'Now to Feb 2027', name: 'Prepare', items: ['UAT and parallel payroll runs', 'Cancel third-party deductions', 'Org Design platform and headcount report', 'Talent dashboard in use'] },
            { when: '1 March 2027', name: 'Go live', items: ['Employee Central and Payroll live', 'Integration across HR and payroll', 'Payroll Control Center'] },
            { when: 'After go-live', name: 'Intelligent HR', items: ['Permissions and POPIA audit', 'Joule and Explain My Pay', 'Workforce intelligence and HR policy advisor', 'Business problem → POC → embed → measure'] },
          ],
        },
        {
          type: 'tiles', span: 4, rows: 1, cols: 2, title: 'Governance gates every AI activation',
          items: [
            { label: 'Privacy and POPIA', value: 'Gate', tone: 'grey' },
            { label: 'Accuracy and explainability', value: 'Gate', tone: 'grey' },
            { label: 'Access and integrity', value: 'Gate', tone: 'grey' },
            { label: 'Workforce trust', value: 'Gate', tone: 'grey' },
          ],
        },
        {
          type: 'asks', span: 4, rows: 1, title: 'Decisions requested from Telkom',
          items: ['Enable Microsoft enterprise AI access for the Shared Services team', 'Confirm readiness gates for 1 March 2027', 'Approve SuccessFactors API access for the Org Design platform', 'Fund contained AI only where a business case proves it'],
        },
      ],
    },
  ],
}
export default CONFIG
