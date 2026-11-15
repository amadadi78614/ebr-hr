// HR & Payroll (HRO) EBR. Source: previous HRO EBR content (cwipebr) and HRO correspondence (Nov 2026).
const CONFIG = {
  key: 'hr',
  domain: 'HR & Payroll',
  period: 'H1 FY27',
  accent: '#10b981',
  accent2: '#06b6d4',
  source: 'HRO EBR content · HRO EBR 23 Nov 2026',
  tabs: [
    {
      id: 'highlights', label: 'Highlights', title: 'What HR and Payroll delivered',
      blocks: [
        {
          type: 'hero', items: [
            { value: '5', label: 'Programmes delivered', sub: 'Payroll, reconciliation, transition, B-BBEE', tone: 'good' },
            { value: '6', label: 'FY27 focus areas', sub: 'Automation to integration' },
            { value: '1', label: 'WNS BPET League Award', sub: 'Consistent VOC scores' },
            { value: '23 Nov', label: 'Org structure in SuccessFactors', sub: 'Due for this HRO EBR', tone: 'warn' },
          ],
        },
        {
          type: 'cards', span: 12, cols: 3, rows: 2, title: 'Delivered · click for detail',
          items: [
            { icon: 'Banknote', name: 'PayMeNow payroll support', line: 'Rollout and configuration', status: 'delivered', detail: { text: 'Full rollout and payroll configuration support across the Telkom payroll environment.' } },
            { icon: 'Table2', name: 'PRMA SharePoint reconciliation', line: 'Excel replaced by SharePoint', status: 'delivered', detail: { text: 'Manual Excel reconciliation replaced by SharePoint consolidation: better accuracy and turnaround.' } },
            { icon: 'Workflow', name: 'HR and payroll blueprint', line: 'End-to-end processes mapped', status: 'progress', detail: { text: 'Defining the standard HR and payroll business process blueprint.' } },
            { icon: 'Users', name: 'TRF employee transition', line: 'Separate company and payroll', status: 'delivered' },
            { icon: 'BarChart3', name: 'Skills B-BBEE model', line: 'Aligned with verification agency', status: 'delivered' },
            { icon: 'Award', name: 'BPET League Award 2026', line: 'Telkom Shared Services campaign', status: 'complete' },
          ],
        },
      ],
    },
    {
      id: 'rpa', label: 'Transformation', title: 'Six moves for FY27',
      blocks: [
        {
          type: 'cards', span: 12, cols: 3, rows: 2, title: 'FY27 focus areas · click for detail',
          items: [
            { icon: 'Bot', name: 'Automation and analytics', line: 'Payroll and HR admin streams', status: 'progress' },
            { icon: 'BarChart3', name: 'ATR and Skills B-BBEE', line: 'Real-time reporting', status: 'planned' },
            { icon: 'Cpu', name: 'EC and ECP', line: 'UAT May to June 2026', status: 'confirm', detail: { text: 'UAT scheduled 12 May to end June 2026; production rollout to follow. Confirm go-live.' } },
            { icon: 'Scissors', name: 'Third-party deductions', line: 'Statutory deductions only', status: 'planned', detail: { text: 'Delimit all third-party payroll deductions; retain PAYE, UIF and other statutory deductions.' } },
            { icon: 'Smartphone', name: 'SAP Fiori ESS', line: 'Leave, approvals, payslips on mobile', status: 'planned' },
            { icon: 'Network', name: 'System integration', line: 'Upstream and downstream, real time', status: 'planned' },
          ],
        },
      ],
    },
    {
      id: 'ai', label: 'AI opportunities', title: 'AI that protects every payroll run',
      blocks: [
        {
          type: 'stairs', span: 5, rows: 3, title: 'HR and payroll AI maturity', current: 1, target: 3, targetLabel: 'FY28',
          levels: ['Manual', 'Managed', 'Automated', 'Predictive', 'Agent-assisted'],
          footnote: 'EC/ECP and system integration are the data foundation.',
        },
        {
          type: 'stepper', span: 7, rows: 3, title: 'Flagship pilot · Payroll assurance agent', note: 'Proposed · not live',
          steps: [
            { name: 'Ingest', icon: 'Database', title: 'Read the payroll run before release', points: ['EC / ECP data', 'Deductions', 'Prior runs'] },
            { name: 'Compare', icon: 'GitCompareArrows', title: 'Compare to rules and history', points: ['Tax rules', 'Variance by employee'] },
            { name: 'Flag', icon: 'AlertTriangle', title: 'Flag anomalies and fraud signals', points: ['Unusual payments', 'Duplicate banking details'] },
            { name: 'Explain', icon: 'MessageSquare', title: 'Explain each flag in plain language', points: ['Evidence attached'] },
            { name: 'Approve', icon: 'UserCheck', title: 'Payroll lead approves', points: ['Human decision', 'POPIA controls'] },
            { name: 'Release', icon: 'ShieldCheck', title: 'Release a clean payroll', points: ['Audit trail', 'Fewer corrections'] },
          ],
        },
        {
          type: 'cards', span: 12, cols: 5, rows: 2, agent: true, title: 'Agent opportunities · click for detail',
          items: [
            { icon: 'ShieldCheck', name: 'Payroll compliance', line: 'Tax and anomaly checks', status: 'proposed', detail: { rows: [['Benefit', 'Accuracy and efficiency'], ['Risk', 'Data privacy, system errors']] } },
            { icon: 'MessageSquare', name: 'Employee query assistant', line: 'Payslips, leave, tax forms', status: 'proposed', detail: { rows: [['Benefit', '24/7 answers'], ['Risk', 'Over-reliance on automation']] } },
            { icon: 'FileText', name: 'HR document drafting', line: 'Contracts and communications', status: 'proposed', detail: { rows: [['Benefit', 'Speed, less manual work'], ['Risk', 'Needs human review']] } },
            { icon: 'TrendingUp', name: 'Workforce planning', line: 'Attrition and skills gaps', status: 'proposed', detail: { rows: [['Benefit', 'Better hiring, lower attrition'], ['Risk', 'Needs quality data']] } },
            { icon: 'BarChart3', name: 'B-BBEE and ATR data', line: 'Real-time skills reporting', status: 'proposed', detail: { rows: [['Benefit', 'Reporting without manual capture']] } },
          ],
        },
      ],
    },
    {
      id: 'next', label: 'Way forward', title: 'From clean data to intelligent HR',
      blocks: [
        {
          type: 'waves', span: 8, rows: 2, title: 'Roadmap',
          items: [
            { when: 'Now', name: 'Stabilise', items: ['Org structure in SuccessFactors', 'EC and ECP go-live', 'Third-party deduction clean-up'] },
            { when: 'Next', name: 'Digitise', items: ['SAP Fiori ESS', 'System integration', 'Real-time ATR and B-BBEE'] },
            { when: 'Future', name: 'Intelligent HR', items: ['Payroll assurance agent', 'Employee query assistant', 'Workforce planning'] },
          ],
        },
        {
          type: 'asks', span: 4, rows: 2, title: 'Decisions requested from Telkom',
          items: ['Confirm EC and ECP go-live date', 'Approve the third-party deduction clean-up', 'Sponsor the payroll assurance pilot'],
        },
      ],
    },
  ],
}
export default CONFIG
