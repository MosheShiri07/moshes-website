export const siteConfig = {
  name: "Moshe Shiri",
  title: "IT & Security Engineer",
  company: "Rapyd",
  email: "moshikoshiri03@gmail.com",
  location: "Israel",
  github: "https://github.com/MosheShiri07",
  linkedin: "https://www.linkedin.com/in/mosheshiri",
  resumeUrl: "https://drive.google.com/file/d/1oJdOBmOIFaHQEiGijYoHQxlz-IwGNIlA/view?usp=sharing",
  description:
    "IT & Security Engineer at Rapyd, specializing in cloud infrastructure, identity automation, and zero-trust security architectures.",
};

export const heroLines = [
  { prefix: "> Identity:", value: "Moshe Shiri" },
  { prefix: "> Role:", value: "IT & Security Engineer @ Rapyd" },
  { prefix: "> Expertise:", value: "Cloud · Zero Trust · Automation" },
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Cloud Platforms" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Uptime Focus" },
];

export const projects = [
  {
    id: "jit-access",
    title: "JIT Access & Identity Automation",
    category: "Security Automation",
    description:
      "Architected a Zero-Standing-Privilege (ZSP) framework using Just-In-Time (JIT) provisioning to eliminate persistent administrative access. Engineered multi-stage approval gates via BlinkOps and Slack, reducing the internal attack surface by ||80%|| while ensuring ||100%|| compliance auditability.",
    architecture: "Event-driven pipeline via Slack slash commands → BlinkOps orchestration → Jira ticket creation → auto-revocation",
    securityStack: ["BlinkOps", "Python", "Slack API", "Jira", "Zero Trust"],
    automationFlow: "Request → Approve → Grant (TTL 4h) → Auto-Revoke → Audit Log",
    tags: ["BlinkOps", "Python", "Slack API", "Jira", "Zero Trust"],
    featured: true,
    size: "large",
  },
  {
    id: "blink-saas",
    title: "BlinkOps SaaS Automation Pipelines",
    category: "Infrastructure DevOps",
    description:
      "Engineered enterprise-grade lifecycle automation connecting HRIS (HiBob), Identity, and Security stacks. Streamlined complex Joiner-Mover-Leaver (JML) workflows, converting multi-day manual provisioning into ||sub-5-minute|| automated executions with zero data-entry errors.",
    architecture: "Webhook triggers → BlinkOps flows → multi-system fan-out (HiBob, Cloudflare, Google Workspace)",
    securityStack: ["BlinkOps", "Webhooks", "HiBob", "Cloudflare", "Google Workspace"],
    automationFlow: "HR Event → Webhook → BlinkOps → Provision/Deprovision across 5+ platforms",
    tags: ["BlinkOps", "Webhooks", "HiBob", "Cloudflare", "API Integration"],
    featured: true,
    size: "medium",
  },
  {
    id: "mcp-gcp",
    title: "MCP Services on GCP Cloud Run",
    category: "Cloud Engineering",
    description:
      "Designed and hardened Model Context Protocol (MCP) microservices on GCP, secured via Cloudflare Zero Trust mTLS and Service Tokens. Orchestrated the entire environment using Terraform (IaC) to maintain a reproducible, identity-aware perimeter for internal AI services.",
    architecture: "Terraform → GCP Cloud Run (serverless containers) → Cloudflare Zero Trust tunnel → Internal DNS",
    securityStack: ["GCP Cloud Run", "Cloudflare Zero Trust", "Terraform", "mTLS", "Service Tokens"],
    automationFlow: "terraform apply → Cloud Run deploy → CF tunnel bind → Access policy enforce",
    tags: ["GCP Cloud Run", "Cloudflare Zero Trust", "Terraform", "mTLS"],
    featured: false,
    size: "medium",
  },
  {
    id: "gws-it-ops",
    title: "Enterprise Identity & Global Infrastructure",
    category: "Enterprise Systems",
    description:
      "Architected and scaled a global identity perimeter for ||1,000+|| distributed users, managing complex SSO/SAML integrations and MDM enforcement across a multi-OS environment. Developed a library of 'Self-Healing' automation runbooks that reduced MTTR by ||60%|| while maintaining ||99.9%|| uptime.",
    architecture: "Google Workspace Admin Console → SAML/SSO (Okta) → MDM fleet (Jamf + Intune) → Active Directory sync → Jira Service Management",
    securityStack: ["Google Workspace", "Okta SAML", "Jamf Pro", "Intune", "Active Directory", "Jira Service Management"],
    automationFlow: "L1 escalation → Root cause triage → Fix + document → Runbook published → L1 KB updated → Repeat tickets eliminated",
    tags: ["Google Workspace", "Okta", "Jamf", "Jira Service Management", "SAML/SSO"],
    featured: false,
    size: "medium",
  },
];

export const skills = [
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "GCP", icon: "🔵", category: "Cloud" },
  { name: "Azure", icon: "⚡", category: "Cloud" },
  { name: "Terraform", icon: "🔧", category: "IaC" },
  { name: "BlinkOps", icon: "⚙️", category: "Automation" },
  { name: "Cloudflare", icon: "🛡️", category: "Security" },
  { name: "Python", icon: "🐍", category: "Dev" },
  { name: "PowerShell", icon: "💻", category: "Dev" },
  { name: "IAM", icon: "🔑", category: "Security" },
  { name: "Zero Trust", icon: "🔒", category: "Security" },
  { name: "Wiz", icon: "👁️", category: "Security" },
  { name: "OpsGenie", icon: "🚨", category: "Ops" },
  { name: "Kubernetes", icon: "⛵", category: "Cloud" },
  { name: "Docker", icon: "🐳", category: "Dev" },
  { name: "Git", icon: "🌿", category: "Dev" },
  { name: "Active Directory", icon: "🗂️", category: "Identity" },
  { name: "Google Workspace", icon: "📊", category: "Productivity" },
  { name: "Jira", icon: "📋", category: "Ops" },
];

export const experience = [
  {
    id: "rapyd-security",
    title: "IT & Security Engineer",
    company: "Rapyd",
    companyUrl: "https://www.rapyd.net",
    period: "Oct 2025 – Present",
    type: "Full-Time",
    description:
      "Leading IT security operations and cloud infrastructure management for a global fintech unicorn. Architecting Zero Trust access models, automating identity lifecycle, and managing multi-cloud security posture.",
    highlights: [
      "Designed and deployed JIT privileged access automation reducing standing permissions",
      "Architected cross-platform automation pipelines cutting onboarding time by 90%",
      "Managed GCP Cloud Run microservices with Cloudflare Zero Trust network policies",
      "Drove Wiz security findings remediation across AWS, GCP, and Azure environments",
    ],
    stack: ["GCP", "AWS", "Azure", "BlinkOps", "Cloudflare", "Terraform", "Python"],
  },
  {
    id: "rapyd-it",
    title: "IT Specialist",
    company: "Rapyd",
    companyUrl: "https://www.rapyd.net",
    period: "Sept 2024 – Oct 2025",
    type: "Full-Time",
    description:
      "Managed global IT operations, endpoint security, and cloud tooling for 500+ employees across multiple regions.",
    highlights: [
      "Administered Google Workspace, Active Directory, and SSO integrations",
      "Built automated IT workflows using BlinkOps and PowerShell",
      "Led endpoint security rollout and MDM configuration across macOS and Windows fleets",
    ],
    stack: ["Google Workspace", "Active Directory", "BlinkOps", "PowerShell", "Jira"],
  },
  {
    id: "idi",
    title: "IT Specialist",
    company: "Israel Defense Intelligence (IDI)",
    period: "Oct 2021 – June 2024",
    type: "Military Service",
    description:
      "Served as an IT specialist in a classified intelligence unit, managing critical infrastructure and security-hardened systems in a high-availability, high-security environment.",
    highlights: [
      "Maintained mission-critical infrastructure with strict security protocols",
      "Managed network topology, user provisioning, and incident response",
      "Received commendations for operational reliability and security practices",
    ],
    stack: ["Networking", "Active Directory", "Security Hardening", "Incident Response"],
  },
  {
    id: "hit",
    title: "B.Sc. Computer Science",
    company: "H.I.T – Holon Institute of Technology",
    period: "Nov 2024 – Present",
    type: "Education",
    description:
      "Pursuing a Bachelor's degree in Computer Science alongside full-time professional work.",
    highlights: [
      "Algorithms, Data Structures, Operating Systems",
      "Computer Networks and Security fundamentals",
      "Software Engineering principles",
    ],
    stack: ["C", "C#", "Python", "Java", "Algorithms"],
  },
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In Progress",
    icon: "☁️",
    color: "mint",
  },
  {
    name: "Google Cloud Associate",
    issuer: "Google Cloud",
    status: "Planned",
    icon: "🔵",
    color: "blue",
  },
  {
    name: "B.Sc. Computer Science",
    issuer: "H.I.T",
    status: "In Progress",
    icon: "🎓",
    color: "mint",
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    status: "Planned",
    icon: "🌐",
    color: "blue",
  },
];
