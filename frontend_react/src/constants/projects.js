// Projects are defined here rather than fetched from a CMS, so the site always
// renders the same thing and nothing disappears when a dataset expires.

const projects = [
  {
    title: 'Bank Account Creation System',
    description:
      'Automated account opening for a retail banking flow: form ingestion, customer ID and KRA PIN verification, blacklist and fraud checks with fuzzy name matching, rule-based routing to approve, review or reject, a full audit trail on every decision, and email notifications.',
    tags: ['Backend'],
    stack: 'Next.js · TypeScript · PostgreSQL · AWS S3 · CloudFront',
    codeLink: 'https://github.com/IainMosima/bank-account-creation-system',
    projectLink: 'https://github.com/IainMosima/bank-account-creation-system',
  },
  {
    title: 'GoMart',
    description:
      'E-commerce back end on a clean, domain-driven layout: token-refresh authentication, type-safe SQL through SQLC, SMS and email notifications, database migrations and a full Go test suite running in CI.',
    tags: ['Backend'],
    stack: 'Go (Gin) · PostgreSQL · SQLC · AWS Cognito · Docker',
    codeLink: 'https://github.com/IainMosima/gomart',
    projectLink: 'https://github.com/IainMosima/gomart',
  },
  {
    title: 'Kubernetes Go Microservices',
    description:
      'Microservices on Kubernetes wired together with gRPC, with Tilt for a fast local development loop and repeatable deploys across environments.',
    tags: ['Infrastructure'],
    stack: 'Go · Kubernetes · gRPC · Tilt · Docker',
    codeLink: 'https://github.com/IainMosima/k8s-go-microservices',
    projectLink: 'https://github.com/IainMosima/k8s-go-microservices',
  },
  {
    title: 'DocuFlow',
    description:
      'Document processing and workflow service in Python, handling ingestion, parsing and the pipeline around getting structured data out of unstructured files.',
    tags: ['AI'],
    stack: 'Python',
    codeLink: 'https://github.com/IainMosima/docuflow',
    projectLink: 'https://github.com/IainMosima/docuflow',
  },
  {
    title: 'Hias Core',
    description:
      'Core backend service written in Go, built around clear domain boundaries and a small, testable surface.',
    tags: ['Backend'],
    stack: 'Go',
    codeLink: 'https://github.com/IainMosima/hias-core',
    projectLink: 'https://github.com/IainMosima/hias-core',
  },
];

export default projects;
