// Fallback copy of the Privacy Policy v1.0 (NWM-115), served only when the backend does not answer.
// Same text as the version published in the database (V8.1__seed_legal_documents_v1.sql).
// Not updated at every publication: it only has to keep the page online during an outage.
const body = String.raw`## 1. Introduction

This Privacy Policy explains how Newmann (“Newmann”, “we”, “our”, or “us”) collects, uses, stores, and protects personal data when users access or use our software platform and related services.

Newmann is a Software-as-a-Service (SaaS) platform designed to assist users in managing their email inbox through categorization and AI-assisted response generation.

We are committed to processing personal data in compliance with the General Data Protection Regulation (EU) 2016/679 (“GDPR”) and other applicable data protection laws.

## 2. Data Controller

The Data Controller responsible for processing personal data is:

- **Name:** Newmann
- **Email:** [info@newmann.ai](mailto:info@newmann.ai)
- **Website:** [https://newmann.ai](https://newmann.ai)
- **For any privacy-related requests:** [info@newmann.ai](mailto:info@newmann.ai)

Once incorporated, this section will be updated with full legal details.

### 2.1 Changes to This Policy and Your Duty to Inform Us

This version was last updated on 19/06/2026. If you continue to use the platform after changes are posted, you are considered to have accepted the updated policy. Please keep us informed if your personal data changes during your relationship with us.

## 3. Role of Newmann (Controller vs. Processor)

Depending on the context, Newmann acts as:

### 3.1 Data Controller

For account creation and management, platform access and authentication, support communications, and platform analytics.

### 3.2 Data Processor

For email content processed through the platform on behalf of the customer. In these cases, the customer remains the Data Controller and Newmann processes data strictly on their behalf. The standard Data Processing agreement is included within the Terms of Service, available directly on the website. For business customers requiring a formal, signed document, a specific Data Processing Agreement (DPA) is available upon request by contacting [info@newmann.ai](mailto:info@newmann.ai).

## 4. Categories of Data Collected

We may create aggregated, de-identified, or anonymized data from personal data we collect, and may use or share such data for lawful business purposes in a way that cannot identify any individual.

### 4.1 Account and Identification Data

- Name
- Email address
- Company name
- Role within organization
- Authentication data (via Google or Microsoft OAuth)

### 4.2 Communication Data

When the platform is connected to email systems (e.g. Gmail), the following may be processed:

- Email metadata (sender, recipient, subject, timestamps)
- Email content and body
- Attachments
- Communication history

These data are processed solely to enable the automation services provided by Newmann. This may include personal data of third parties not directly registered on the platform.

### 4.3 Technical Data

- IP address
- Browser type and version
- Device information
- System and access logs
- Usage data related to platform interactions

### 4.4 Analytics Data

We collect data about how users interact with the platform using PostHog, a product analytics tool. This includes pages visited, features used, session duration, and performance metrics. PostHog stores data using a first-party cookie, localStorage, and sessionStorage in the user's browser. Analytics data is only collected after explicit user consent. For more detail, see our [Cookie Policy](/cookies).

### 4.5 AI Cost and Usage Data

We track per-user consumption of AI services (token usage and associated costs) for internal billing management, quota enforcement, and service sustainability. This data is stored in our database and is not shared with third parties.

## 5. How We Use Your Personal Data

We use personal data only when the law allows. The primary legal grounds are: performance of a contract with you, our legitimate interests in operating and improving the platform, and compliance with legal obligations.

### 5.1 Purposes of Processing

- **Platform Operation:** to provide access to the Newmann platform and enable email automation services.
- **AI Processing and Automation:** to analyze incoming communications and generate draft responses based on configured rules.
- **Account Management:** to create and manage user accounts, authenticate access, and ensure platform security.
- **Customer Support:** to provide assistance and respond to support requests.
- **Service Improvement:** to improve the performance, reliability, and quality of the platform using aggregated and anonymized usage data.
- **AI Cost Tracking:** to monitor per-user AI token consumption for internal quota management.
- **Legal Compliance:** to comply with legal obligations and protect our legal rights.

User data is not used to train public AI models. Aggregated, anonymized usage patterns may be used internally to improve platform performance.

## 6. Legal Basis for Processing

| Purpose | Legal Basis |
|---|---|
| Platform functionality | Performance of a contract (Art. 6(1)(b)) |
| Account management | Performance of a contract (Art. 6(1)(b)) |
| Customer support | Legitimate interest (Art. 6(1)(f)) |
| Platform security | Legitimate interest (Art. 6(1)(f)) |
| Analytics (PostHog) | Consent (Art. 6(1)(a)) |
| AI cost tracking | Legitimate interest (Art. 6(1)(f)) |
| Legal compliance | Legal obligation (Art. 6(1)(c)) |

Where processing is based on consent, users may withdraw it at any time via the cookie banner or by contacting [info@newmann.ai](mailto:info@newmann.ai).

## 7. AI and Automated Processing

Newmann uses artificial intelligence technologies to categorize emails, assess whether a response may be needed, and generate draft replies using natural language processing, contextual analysis, and semantic vector search (Pinecone).

Important safeguards:

- The system does not send emails automatically.
- All outgoing communications require explicit user approval.
- AI outputs are suggestions only and remain under full user control.

Newmann does not carry out fully automated decision-making with legal or similarly significant effects as defined under Article 22 GDPR.

## 8. Use of AI Providers

Newmann utilizes OpenAI (GPT-4o mini) for AI inference and processing.

- **Model Training:** OpenAI does NOT use data submitted through its API to train or improve its AI models.
- **Data Retention:** In accordance with OpenAI's API policies, data sent via the API is retained by OpenAI for up to 30 days solely for the purpose of identifying abuse and misuse. After this period, the data is deleted from their systems.
- **Google API Data (Limited Use):** Newmann's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We do not use your Gmail data to train generalized AI models.

## 9. Data Retention

Personal data are retained only as long as necessary to provide the services or as required by law.

| Data Type | Retention Period |
|---|---|
| Email data | Managed via a rolling storage system (FIFO logic); oldest data is deleted as new data is ingested |
| Account data | Duration of the service relationship; deleted upon account deletion request |
| Technical logs | 7 days |
| Analytics data (PostHog) | 1 year |
| AI cost/usage data | Duration of the service relationship |

Users may request deletion of their data at any time by contacting [info@newmann.ai](mailto:info@newmann.ai).

## 10. Data Sharing and Sub-processors

We share data only with trusted third-party providers necessary to operate the platform. All providers are bound by contractual safeguards consistent with GDPR requirements.

| Provider | Role | Data Processed |
|---|---|---|
| Google / Microsoft | Authentication (OAuth) | Account identity data |
| OpenAI | AI inference (GPT-4o mini) | Email content, body, attachment content for AI processing |
| Google Cloud | Backend infrastructure | All platform data (hosting) |
| Microsoft Azure | Backend hosting | Application and log data |
| Vercel | Frontend hosting | Web traffic, page view data |
| PostHog | Product analytics | Usage and behavioral data |
| Pinecone | Vector database | Semantic embeddings of email content |

A full list of sub-processors is available upon request at [info@newmann.ai](mailto:info@newmann.ai).

### 10.1 Data Retention with OpenAI

We share data with OpenAI solely to provide the AI-powered features of the platform. We ensure that:

- Data is transmitted securely via HTTPS/TLS encryption.
- OpenAI acts as a sub-processor under the terms of our agreement, maintaining safety standards compliant with global data protection regulations.
- Only the minimum data necessary to fulfill your request (e.g., the specific email thread) is sent for processing.

## 11. International Data Transfers

Some service providers may process data outside the European Economic Area (EEA). The primary locations are:

- **OpenAI:** United States – covered by Standard Contractual Clauses (SCCs)
- **Google Cloud (Gmail API):** Frankfurt, EU (europe-west3) – no transfer outside the EEA, no SCCs needed
- **Vercel:** United States – covered by Standard Contractual Clauses (SCCs)
- **Microsoft Azure:** European Union (EU Cloud) – no transfer outside the EEA, no SCCs needed
- **PostHog:** European Union – data processed on EU Cloud (eu.posthog.com), no transfer outside the EEA
- **Pinecone:** United States – covered by Standard Contractual Clauses (SCCs)

Where transfers occur outside the EEA, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) and, where applicable, adequacy decisions by the European Commission.

## 12. Data Security

We implement appropriate technical and organizational measures to protect personal data, including:

- Encryption in transit (HTTPS/TLS)
- Encryption at rest — Supabase, Microsoft Azure (EU), and Pinecone all encrypt stored data at rest by default (AES-256).
- Access control and role-based permissions
- Monitoring and structured logging
- Regular security assessments

Access to personal data is limited to authorized personnel with a business need. All personnel with access are subject to confidentiality obligations.

We have procedures in place to detect, report, and investigate personal data breaches, and will notify affected individuals and relevant authorities where legally required.

## 13. Customer Responsibilities

Customers using Newmann are responsible for:

- ensuring they have a lawful basis for connecting their email systems to the platform
- informing their own data subjects where required by applicable law
- configuring the platform in a manner consistent with their data protection obligations

## 14. Rights of Data Subjects

Individuals whose personal data are processed have the right to:

- **Access:** obtain a copy of their personal data
- **Rectification:** request correction of inaccurate data
- **Erasure:** request deletion of personal data
- **Restriction:** limit how their data is processed
- **Objection:** object to processing based on legitimate interest
- **Portability:** receive their data in a structured, machine-readable format
- **Withdraw consent:** at any time, where processing is based on consent

All requests may be submitted to: [info@newmann.ai](mailto:info@newmann.ai). We will respond within 30 days.

## 15. Complaints

Users have the right to lodge a complaint with the relevant supervisory authority. In Italy, this is the Garante per la Protezione dei Dati Personali ([www.garanteprivacy.it](https://www.garanteprivacy.it)).

## 16. Changes to This Policy

We may update this Privacy Policy periodically. Any changes will be published on this page with an updated revision date. Continued use of the platform after changes are posted constitutes acceptance of the updated policy.
`;

export default body;
