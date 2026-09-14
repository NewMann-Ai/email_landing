// Fallback copy of the Cookie Policy v1.0 (NWM-115), served only when the backend does not answer.
// Same text as the version published in the database (V8.1__seed_legal_documents_v1.sql).
// Not updated at every publication: it only has to keep the page online during an outage.
const body = String.raw`## 1. Introduction

This Cookie Policy explains how Newmann (“Newmann”, “we”, “our”, or “us”) uses cookies and similar browser storage technologies when users access the authentication area and platform. In addition to cookies, we use localStorage and sessionStorage to store certain data locally in your browser. This policy covers all such technologies collectively.

## 2. What Are Cookies and Similar Technologies

Cookies are small text files stored on your device by your browser at the request of a website. They allow the platform to recognize your browser and retain information across page loads and sessions.

We also use:

- **localStorage:** browser storage that persists until explicitly cleared, used to retain preferences and analytics state across sessions.
- **sessionStorage:** browser storage that is automatically cleared when the browser tab is closed, used for temporary session data.

## 3. Types of Cookies and Storage Used

### 3.1 Strictly Necessary

These are essential for the platform to function and do not require consent. They are used for authentication and login sessions, maintaining secure user sessions, and security and fraud prevention.

Examples include session tokens, authentication cookies set during Google or Microsoft login, and security cookies. Without these, the platform cannot operate.

### 3.2 Analytics

These help us understand how users interact with the platform. They may collect data on pages visited, session duration, feature usage, and performance metrics.

We use PostHog for product analytics. PostHog uses a combination of a first-party cookie, localStorage, and sessionStorage to store analytics data in your browser:

- **Cookie (ph\_\<project\_api\_key>\_posthog):** stores the user's distinct ID and session ID. Expires after 365 days. This is a first-party cookie — PostHog does not track users across different websites.
- **localStorage:** stores additional analytics properties such as feature flag cache, event queues, and UTM parameters.
- **sessionStorage:** stores temporary session-level properties (e.g. session super properties) that are cleared when the tab is closed.

PostHog data is sent to PostHog's servers and processed according to PostHog's privacy policy. These analytics technologies are only activated after the user has given consent via the cookie banner.

### 3.3 Functional

We do not currently use functional cookies beyond what is covered by the strictly necessary and analytics categories above. This section will be updated if functional cookies are introduced.

### 3.4 Third-Party Services

The following third-party providers are used within the platform and may process data according to their own privacy policies:

- **Google / Microsoft (authentication):** may set their own cookies as part of the OAuth login flow. Newmann does not control these cookies.
- **Google Cloud:** infrastructure provider for backend services. May process connection and log data server-side.
- **OpenAI (GPT-4o mini):** used for AI-powered features within the platform. Requests are processed server-side; no cookies or browser storage are set directly by OpenAI.
- **Vercel:** frontend hosting platform. Vercel does not set analytics cookies in our deployment. If Vercel Web Analytics is enabled, it uses a privacy-preserving server-side hash and does not use cookies.
- **Microsoft Azure:** backend hosting platform. Infrastructure-level only; no cookies set in the browser.

## 4. Authentication and Third-Party Login

Newmann allows users to authenticate using Google and Microsoft. These providers may set their own cookies in accordance with their respective privacy policies. Newmann does not control those cookies.

## 5. Legal Basis

| Category | Legal Basis |
|---|---|
| Strictly necessary | Legitimate interest (platform operation) |
| Analytics (PostHog) | User consent |
| Third-party auth cookies | Legitimate interest / governed by provider |

## 6. How to Manage Cookies

Users can manage or disable cookies and browser storage through:

- the cookie banner on the platform (on first visit and accessible at any time)
- browser settings (cookies, localStorage, and sessionStorage can all be cleared manually)
- browser developer tools (Application tab)

Please note: disabling strictly necessary cookies will prevent access to the platform. Disabling analytics cookies will not affect core functionality.

## 7. Cookie Banner

Upon first access to the platform, users are presented with a cookie banner allowing them to accept or reject non-essential cookies and browser storage technologies. The choice is saved and can be changed at any time. Analytics (PostHog) is only activated after explicit consent is given.

## 8. Updates

This Cookie Policy may be updated periodically to reflect changes in the technologies we use or applicable regulations. The “Last updated” date at the top of this document will reflect the most recent revision.
`;

export default body;
