// HR & Payroll (HRO) EBR content. Source: previous HRO section (cwipebr) and HRO correspondence (Nov 2026).
const CONFIG = {
  key: 'hr',
  domain: 'HR & Payroll',
  title: 'HR & Payroll Executive Business Review',
  period: 'H1 FY27',
  accent: '#059669',
  source: 'Source: previous HRO EBR content · HRO EBR 23 Nov 2026',
  tabs: [
    {
      id: 'highlights',
      label: 'Highlights',
      title: 'Highlights',
      sub: 'Delivered in FY26',
      blocks: [
        {
          type: 'cards', span: 12, rows: 2, cols: 3, title: 'FY26 delivery',
          items: [
            { tag: 'PayMeNow', title: 'Payroll implementation support', text: 'Rollout and payroll configuration support across the Telkom payroll environment.', status: 'delivered' },
            { tag: 'PRMA', title: 'SharePoint reconciliation', text: 'Manual Excel reconciliation replaced by SharePoint consolidation. Better accuracy and turnaround.', status: 'delivered' },
            { tag: 'Blueprint', title: 'HR and payroll processes', text: 'End-to-end HR and payroll processes mapped and documented as the standard blueprint.', status: 'progress' },
            { tag: 'TRF', title: 'Employee transition', text: 'TRF employees separated into a dedicated company and payroll structure.', status: 'delivered' },
            { tag: 'B-BBEE', title: 'Skills analytics model', text: 'Skills B-BBEE model aligned with the verification agency for FY26 reporting.', status: 'delivered' },
            { tag: 'Recognition', title: 'WNS BPET League Award 2026', text: 'Consistent VOC scores on the Telkom Shared Services account.' },
          ],
        },
        {
          type: 'list', span: 12, title: 'Open item for this EBR',
          items: [
            { title: 'Organisation structure update in SuccessFactors', text: 'Requested by Telkom HR for the 23 November HRO EBR. SuccessFactors access granted 21 October.', status: 'progress' },
          ],
        },
      ],
    },
    {
      id: 'rpa',
      label: 'Transformation and RPA',
      title: 'Transformation and RPA',
      sub: 'FY27 focus areas',
      blocks: [
        {
          type: 'kpis',
          items: [
            { value: '6', label: 'FY27 focus areas' },
            { value: '1', label: 'In progress', note: 'Automation and analytics' },
            { value: '1', label: 'Status to confirm', note: 'EC and ECP after UAT' },
            { value: '4', label: 'Planned' },
          ],
        },
        {
          type: 'cards', span: 12, cols: 3, rows: 2, title: 'FY27 focus areas',
          items: [
            { tag: '01', title: 'Automation and analytics', text: 'Automation across payroll and HR admin, and the next step in analytics.', status: 'progress' },
            { tag: '02', title: 'ATR and Skills B-BBEE', text: 'Improve data capture to enable real-time reporting.', status: 'planned' },
            { tag: '03', title: 'EC and ECP implementation', text: 'UAT from 12 May to end June 2026, then production rollout.', status: 'confirm' },
            { tag: '04', title: 'Third-party payroll deductions', text: 'Remove third-party deductions; keep statutory deductions only (PAYE, UIF).', status: 'planned' },
            { tag: '05', title: 'SAP Fiori rollout', text: 'ESS for leave, approvals and payslips on mobile.', status: 'planned' },
            { tag: '06', title: 'System integration', text: 'Upstream and downstream integration across HR and payroll systems.', status: 'planned' },
          ],
        },
      ],
    },
    {
      id: 'way-forward',
      label: 'Way forward',
      title: 'Way forward',
      sub: 'AI use cases and controls',
      blocks: [
        {
          type: 'table', span: 7, rows: 2, title: 'AI use cases for HR and payroll',
          columns: ['Area', 'Use', 'Benefit', 'Risk'],
          rows: [
            ['Payroll', 'Compliance checks, anomaly detection', 'Accuracy and efficiency', 'Data privacy, system errors'],
            ['HR admin', 'Drafting documents and communications', 'Speed, less manual work', 'Needs human review'],
            ['Workforce planning', 'Predictive analytics', 'Better hiring, lower attrition', 'Needs quality data'],
            ['Employee queries', 'Chatbot for payslips and leave', '24/7 answers', 'Over-reliance on automation'],
            ['Governance', 'HR and IT co-ownership, AI policy', 'Secure data, fairness', 'Implementation effort'],
          ],
        },
        {
          type: 'list', span: 5, rows: 2, title: 'Controls required',
          items: [
            { title: 'Data privacy', text: 'POPIA compliance for all HR and payroll data.' },
            { title: 'Bias', text: 'Monitor and audit any model used in hiring or promotion.' },
            { title: 'Human oversight', text: 'People decide on employee relations and discipline.' },
            { title: 'Change management', text: 'Communication plan for managers and employees.' },
            { title: 'Vendor dependency', text: 'Exit and integration plan for any platform.' },
          ],
        },
      ],
    },
  ],
}
export default CONFIG
