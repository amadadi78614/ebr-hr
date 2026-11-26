// HR EBR, laid out like the F&A and Fixed Assets EBR: HR and Payroll first, then Transformation, Analytics and AI.
import HR from './data.js'

const tab = id => HR.tabs.find(t => t.id === id)
const MOVED = ['analytics', 'ai', 'aistrategy']
const DANI = { name: 'Dani Viljoen', role: 'Capgemini Analytics' }

const HRP = {
  ...HR, key: 'hr', domain: 'HR & Payroll',
  tabs: HR.tabs.filter(t => !MOVED.includes(t.id)).map(t => ({
    ...t,
    blocks: t.blocks.map(b => b.type === 'agenda' ? { ...b, items: b.items.filter(x => !MOVED.includes(x.tab)) } : b),
  })),
}

const ANALYTICS = {
  id: 'analytics', label: '6 months in review', owner: DANI, title: '6 months in review: building a more reliable workforce decision layer',
  blocks: [
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'Completed · click for detail',
      items: [
        { icon: 'UserSearch', name: 'HR talent dashboard', line: 'Deep insight into talent planning and succession', status: 'live', statusText: 'Completed',
          detail: { text: 'Provides demographic and succession insight to identify workforce risks, critical-role coverage and successor readiness.' } },
        { icon: 'GraduationCap', name: 'B-BBEE skills development', line: 'Control of compliance, no surprises', status: 'live', statusText: 'Completed',
          detail: { text: 'Tracks training spend and participation against Skills Development targets to identify gaps early and protect scorecard performance.' } },
      ],
    },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'In progress · click for detail',
      items: [
        { icon: 'Users', name: 'HR headcount report', line: 'Fast-track reporting cycles', status: 'progress',
          detail: { text: 'Automates the CoE headcount report to replace manual compilation with a repeatable view by business unit, grade and employment type.' } },
      ],
    },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'Maintained · protecting the analytical backbone',
      items: [
        { icon: 'HeartPulse', name: 'Pensioners medical aid', line: 'Status and history in SharePoint', status: 'complete', statusText: 'Maintained',
          detail: { text: 'Centralises current status and change history in SharePoint, improving query resolution, auditability and compliance.' } },
        { icon: 'CalendarDays', name: 'Leave liability (LPA)', line: 'Accrued leave and its value', status: 'complete', statusText: 'Maintained',
          detail: { text: 'Tracks accrued leave balances and their financial value to support month-end provisioning and proactive leave management.' } },
        { icon: 'Mail', name: 'HRO mailbox monitoring', line: 'Volumes, response times, backlog', status: 'complete', statusText: 'Maintained',
          detail: { text: 'Monitors query volumes, response times and outstanding items to expose backlogs and improve employee service accountability.' } },
      ],
    },
  ],
}

const MATURITY = {
  id: 'maturity', label: 'Data maturity', owner: DANI, title: 'What we are focusing on next: the next frontier of data analytics',
  blocks: [
    {
      type: 'maturity', span: 12, title: 'Progressing the data maturity curve within Telkom, as a trusted implementation partner', split: 3, bands: ['Data', 'Data + Artificial Intelligence'],
      items: [
        { name: 'Descriptive', q: 'What happened?', pct: 100, text: 'Data provides hindsight', tools: ['Reports', 'Dashboards'] },
        { name: 'Diagnostic', q: 'Why did it happen?', pct: 100, text: 'Analysis provides insight', tools: ['Reports', 'Dashboards'] },
        { name: 'Predictive', q: 'What will happen?', pct: 100, text: 'Models provide foresight', tools: ['Reports', 'Dashboards', 'AI / ML'] },
        { name: 'Prescriptive', q: 'What should we do about it?', pct: 20, text: 'Intelligence framework provides rapid insight, recommendations and decisions', tools: ['Reports', 'Dashboards', 'AI / ML', 'Scenario tools', 'Agentic framework'] },
        { name: 'Cognitive', q: 'Controlled execution', pct: 5, text: 'Intelligence framework provides controlled execution autonomy through agentic layers', tools: ['Agentic framework'] },
      ],
    },
  ],
}

const AI_LEARNED = {
  id: 'learned', label: 'What we learned', owner: { name: 'Mohamed Nomani · Dani Viljoen', role: 'Capgemini Transformation and Analytics' }, title: 'What we learned: enterprise value comes from shared AI, not individual helpers',
  blocks: [
    { type: 'image', span: 8, title: 'Two ways AI shows up at work', src: '/ai-two-ways.png', alt: 'Individual AI assistant compared with a shared AI agent in an AI harness' },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'What we learned since June',
      items: [
        { icon: 'KeyRound', name: 'Enterprise AI needs the right tools', line: 'Telkom AI licences not yet broadly provisioned', status: 'confirm', statusText: 'Ask',
          detail: { text: 'Delivery teams cannot reach advanced capabilities, which limits experimentation and workflow integration at scale.', rows: [['Ask', 'Microsoft enterprise AI access for Shared Services']] } },
        { icon: 'Workflow', name: 'Value comes from the workflow', line: 'Personal productivity does not scale on its own', status: 'live', statusText: 'Learned',
          detail: { text: 'About 80% report better individual productivity, but only 7% scale AI across the enterprise (McKinsey, Deloitte). Value comes from embedding intelligence in real, governed workflows.' } },
        { icon: 'Scale', name: 'Invest per use case', line: 'Defined case, measurable value, then infrastructure', status: 'planned', statusText: 'Proposed',
          detail: { text: 'Tie investment to defined business use cases and evidence of value. Where a case needs more than the standard AI framework, evaluate contained AI infrastructure.' } },
      ],
    },
  ],
}

const AI_POC = {
  id: 'poc', label: 'Microsoft POC', owner: { name: 'Mohamed Nomani · Dani Viljoen', role: 'Capgemini Transformation and Analytics' }, title: 'The POC proved the use case; enablement is the hurdle we are clearing',
  blocks: [
    {
      type: 'arch', span: 8, rows: 6, title: 'Enterprise AI POC with Microsoft · SAP contract operationalisation · click an outcome',
      sources: [
        { icon: 'FileText', name: 'Signed contracts', sub: 'Real Telkom contracts' },
        { icon: 'Database', name: 'SAP data', sub: 'Vendors and conditions' },
      ],
      core: { kicker: 'Capgemini Transformation + Analytics', name: 'ContractOps', icon: 'BrainCircuit', sub: 'Built · moving to Microsoft POC', status: 'progress', statusText: 'Microsoft POC' },
      outputs: [
        { icon: 'ScanText', name: 'Terms extracted', metric: 'Rates, dates', detail: { text: 'AI reads each signed contract and pulls out pricing, escalations, dates and obligations into a structured record.', rows: [['Today', 'Read and keyed by hand'], ['Control', 'Person confirms each extract']] } },
        { icon: 'Settings2', name: 'SAP set-up', metric: 'For approval', detail: { text: 'Prepares the SAP contract and condition set-up from the extracted terms, for a person to approve before it is loaded.', rows: [['Benefit', 'Faster, consistent contract set-up']] } },
        { icon: 'ShieldCheck', name: 'Invoice vs contract', metric: 'Before payment', detail: { text: 'Compares invoiced rates and escalations with the contract and flags differences before payment is released.', rows: [['Benefit', 'Stops over-payments at source']] } },
        { icon: 'BellRing', name: 'Obligation alerts', metric: 'Renewals', detail: { text: 'Warns owners ahead of renewals, expiries and escalation dates.', rows: [['Benefit', 'No missed renewals or escalations']] } },
      ],
    },
    {
      type: 'cards', span: 4, rows: 6, cols: 1, list: true, title: 'Enablement · clearing the hurdle',
      items: [
        { icon: 'CheckCircle2', name: 'Use case proved', line: 'Contract packs to SAP-ready requirements', status: 'live', statusText: 'Done',
          detail: { text: 'Evidence-cited SAP readiness report, prioritised missing-information register and clear human-review points, built with the Telkom team.' } },
        { icon: 'KeyRound', name: 'Microsoft enterprise AI access', line: 'Telkom AI licences not yet provisioned', status: 'confirm', statusText: 'Motivation',
          detail: { text: 'Motivations are in progress so the Shared Services team can work in Telkom\'s chosen AI ecosystem.' } },
        { icon: 'Server', name: 'Microsoft POC environment', line: 'Built solution moves into it', status: 'progress', statusText: 'In progress',
          detail: { text: 'Microsoft provides the POC environment; the solution already built is lifted and shifted into it.' } },
      ],
    },
  ],
}

const AI_PATH = {
  id: 'path', label: 'Path to value', owner: { name: 'Mohamed Nomani · Dani Viljoen', role: 'Capgemini Transformation and Analytics' }, title: 'The path towards unlocking value within Shared Services',
  blocks: [
    { type: 'image', span: 8, title: 'How we propose to progress · executive sponsorship requested', src: '/ai-path.png', alt: 'Path from business problem to measured outcome, with the two sponsorship asks' },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'HR AI propositions · SAP first, payroll safe',
      items: [
        { icon: 'ShieldCheck', name: 'Payroll Control Center rules', line: 'Foundation · automated payroll checks', status: 'planned', statusText: 'With EC/ECP',
          detail: { text: 'Rules, alerts and controls on every payroll run, going live with EC and ECP on 1 March 2027.' } },
        { icon: 'MessageSquare', name: 'SAP Joule for HR', line: 'Near-term · generative help inside SAP', status: 'planned', statusText: 'Near-term',
          detail: { text: 'Generative assistance in SuccessFactors once EC is live, inside the controls Telkom already has.' } },
        { icon: 'BookOpen', name: 'HR policy advisor', line: 'Answers from Telkom policy, with sources', status: 'proposed', statusText: 'Use case',
          detail: { text: 'Employees and HR agents ask policy questions and get cited answers; a person handles anything sensitive.' } },
        { icon: 'Bot', name: 'SAP agents', line: 'Explore · only after controls are proven', status: 'planned', statusText: 'Explore',
          detail: { text: 'Agents for routine HR transactions, explored only after the permissions audit and readiness gates.' } },
      ],
    },
  ],
}

const area = (key, domain, tabs) => ({ key, domain, period: 'H1 FY27', accent: '#0070AD', accent2: '#009FE3', source: 'Capgemini ' + domain + ' · H1 FY27', tabs })

const OVERVIEW = area('overview', 'Overview', [{
  id: 'agenda', label: 'Overview', title: 'HR and Payroll · H1 FY27 Executive Business Review',
  blocks: [
    tab('summary').blocks.find(b => b.type === 'hero'),
    {
      type: 'agenda', span: 12, rows: 5, items: [
        { label: 'HR & Payroll', icon: 'Users', tab: 'hr/agenda', line: 'Executive summary, H1 highlights, FY27 focus areas, governance and decisions' },
        { label: 'Transformation', icon: 'Sparkles', tab: 'transformation/ai', line: 'Org Design platform, how it works and the HR transformation portfolio', who: 'Mohamed Nomani' },
        { label: 'Analytics', icon: 'BarChart3', tab: 'analytics/analytics', line: '6 months in review and the data maturity curve', who: 'Dani Viljoen' },
        { label: 'AI', icon: 'BrainCircuit', tab: 'ai/learned', line: 'What we learned, the Microsoft POC and enablement, and the path to value', who: 'Mohamed and Dani' },
      ],
    },
  ],
}])

export const DOMAINS = [
  OVERVIEW,
  HRP,
  area('transformation', 'Transformation', [tab('ai')]),
  area('analytics', 'Analytics', [ANALYTICS, MATURITY]),
  area('ai', 'AI', [AI_LEARNED, AI_POC, AI_PATH]),
]
