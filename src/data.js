// HR & Payroll (HRO) EBR. Sources: HRO Executive Business Review FY27 (Thomas Matsane, Nov 2026)
// and HRO MBR September 2026 review (20 Oct 2026).
const M = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const CONFIG = {
  key: 'hr',
  domain: 'HR & Payroll',
  period: 'H1 FY27',
  accent: '#10b981',
  accent2: '#06b6d4',
  source: 'HRO EBR FY27 (Nov 2026) · HRO MBR, September 2026 review (20 Oct 2026)',
  tabs: [
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
      id: 'transformation', label: 'Transformation', title: 'Employee Central and Payroll go live on 1 March 2027',
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
          type: 'cards', span: 12, cols: 5, rows: 2, title: 'Transformation roadmap · status',
          items: [
            { icon: 'Cpu', name: 'EC Payroll implementation', line: 'Go-live Mar 2027', status: 'progress' },
            { icon: 'Network', name: 'Organisation structure', line: 'SuccessFactors dashboard', status: 'progress' },
            { icon: 'Users', name: 'Headcount analytics', line: 'HRO Analytics COE', status: 'progress' },
            { icon: 'BarChart3', name: 'B-BBEE training scorecard', line: 'Work in progress', status: 'progress' },
            { icon: 'FileBadge', name: 'Certificate of service', line: 'Automation in SuccessFactors', status: 'planned', detail: { text: 'Parked for later: sales incentive upload to SAP, full-time bursary payments, HRO OneView control panel.' } },
          ],
        },
      ],
    },
    {
      id: 'ai', label: 'AI opportunities', title: 'Smarter HR, safer payroll: SAP first',
      blocks: [
        {
          type: 'hero', items: [
            { value: '79%', label: 'SA white-collar staff use AI', sub: 'Global: 74%' },
            { value: '86%', label: 'HR and payroll leaders', sub: 'Expect AI to transform the function in 5 years' },
            { value: '63%', label: 'Employees feel trained', sub: 'vs 94% of leaders who think they are', tone: 'warn' },
            { value: '41%', label: 'HR teams prioritise work redesign', sub: 'While 71% of C-suites rank AI ROI highly', tone: 'warn' },
          ],
        },
        {
          type: 'stairs', span: 5, rows: 3, title: 'Sequence: automation, then assistance, then agents', current: 1, target: 3, targetLabel: 'Explore',
          levels: ['Clean EC data', 'PCC rules', 'Joule', 'SAP agents'],
          footnote: 'Joule and agents inherit the quality of the data and rules beneath them.',
        },
        {
          type: 'cards', span: 7, rows: 3, cols: 2, agent: true, title: 'AI on SAP · click for detail',
          items: [
            { icon: 'ShieldCheck', name: 'Payroll Control Center', line: 'Rules, alerts, controlled remediation', status: 'planned', detail: { rows: [['Type', 'Rules-based automation'], ['Role', 'Detects validation exceptions; not generative AI on its own']] } },
            { icon: 'MessageSquare', name: 'Joule', line: 'Self-service in natural language', status: 'proposed', detail: { rows: [['Type', 'Generative assistance'], ['Scope', 'Eligible EC self-service and pay-statement access, within SAP permissions']] } },
            { icon: 'Receipt', name: 'Explain My Pay', line: 'Employees understand their payslip', status: 'proposed', detail: { text: 'Only accurate if the underlying payroll data is accurate.' } },
            { icon: 'Bot', name: 'SAP HR agents', line: 'HR Operations, HR Service, Payroll', status: 'proposed', detail: { rows: [['Type', 'Agentic AI (emerging)'], ['Note', 'Restricted availability or planned releases; confirm with SAP']] } },
          ],
        },
      ],
    },
    {
      id: 'next', label: 'Way forward', title: 'Controls and permissions first, then AI',
      blocks: [
        {
          type: 'waves', span: 8, rows: 2, title: 'Roadmap',
          items: [
            { when: 'Now to Feb 2027', name: 'Prepare', items: ['UAT and parallel payroll runs', 'Cancel third-party deductions', 'Org structure and headcount dashboards'] },
            { when: '1 March 2027', name: 'Go live', items: ['Employee Central and Payroll live', 'Integration across HR and payroll', 'Payroll Control Center'] },
            { when: 'After go-live', name: 'AI on SAP', items: ['Permissions and POPIA audit', 'Joule and Explain My Pay', 'Assess SAP HR agents'] },
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
          items: ['Confirm readiness gates for 1 March 2027', 'Approve the permissions and POPIA audit', 'Budget training alongside AI licences'],
        },
      ],
    },
  ],
}
export default CONFIG
