export interface Project {
  slug: string;
  kicker: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  techStack: string[];
  impact: string;
  visualTheme: "purple" | "blue" | "coral";
  visualKind: "terminal" | "cards" | "json";
}

export const projects: Project[] = [
  {
    slug: "esg-intelligence-platform",
    kicker: "01 · Enterprise RAG",
    title: "ESG Intelligence Platform",
    tagline:
      "RAG-based ESG Q&A system built during my practicum at Armanino LLP, processing 1M+ report sections across industries.",
    problem:
      "Consultants needed to answer cross-year and cross-company ESG questions buried inside thousands of dense sustainability disclosures. Manual search across this volume of unstructured text was slow and error-prone, and inconsistent metadata (missing fields, mismatched date formats) made retrieval unreliable.",
    solution:
      "Engineered a scalable ESG data pipeline using Python, PySpark, and LangChain to process over 1M ESG report sections. Addressed missing metadata through K-means-based imputation, standardized inconsistent date formats, and applied Isolation Forest for outlier detection on emission and compliance metrics. Built a RAG-based Q&A chatbot on top of this pipeline using OpenAI embeddings and a Pinecone vector database, with metadata-aware prompts designed specifically to support cross-year and cross-company comparison.",
    highlights: [
      "Processed 1M+ ESG report sections across industries with a PySpark + LangChain pipeline",
      "Applied K-means imputation and Isolation Forest outlier detection to improve retrieval precision and report integrity",
      "Designed metadata-aware prompts enabling cross-year and cross-company comparison queries",
      "Built Power BI and Streamlit dashboards to monitor retrieval quality and embedding accuracy, improving drill-down efficiency by 70%",
    ],
    techStack: ["Python", "PySpark", "LangChain", "OpenAI embeddings", "Pinecone", "Power BI", "Streamlit"],
    impact:
      "Improved consultant research efficiency by 45% and accelerated insight delivery for sustainability advisory engagements, with 95% stakeholder satisfaction across iterative prototyping cycles.",
    visualTheme: "purple",
    visualKind: "terminal",
  },
  {
    slug: "travuel-ai",
    kicker: "02 · Multi-API orchestration",
    title: "Travuel AI",
    tagline:
      "An orchestration layer that coordinates 5+ external travel APIs into a single, context-aware planning experience.",
    problem:
      "Travel planning requires combining data from multiple independent sources — flights, hotels, maps, local context — each with different schemas and failure modes. Naively calling every API on every user turn is slow, redundant, and produces incoherent results when responses conflict.",
    solution:
      "Designed an orchestration layer that classifies user intent and routes each query to the correct combination of APIs rather than calling all of them by default. Built a response normalization layer that unifies inconsistent data formats from 5+ external sources into a single context schema before injecting results into the LLM. Implemented stateful conversation management so trip context persists across turns without re-querying APIs on every message, plus fallback logic for handling individual API failures gracefully.",
    highlights: [
      "Built a dynamic intent router that selects the correct API combination per query, reducing unnecessary API calls by ~40%",
      "Implemented a response normalization layer unifying inconsistent formats from 5+ external APIs into one context schema",
      "Designed stateful conversation management that persists trip context across turns without redundant re-querying",
      "Added fallback logic so individual API failures degrade gracefully instead of breaking the planning flow",
    ],
    techStack: ["OpenAI API", "Google Maps API", "Amadeus Flight API", "FastAPI", "Redis", "Streamlit"],
    impact:
      "Demonstrated reliable end-to-end multi-API orchestration for real travel planning workflows, handling 5+ concurrent API sources with normalized output and persistent context.",
    visualTheme: "blue",
    visualKind: "cards",
  },
  {
    slug: "impact-investor-portal",
    kicker: "03 · Structured outputs",
    title: "Impact Investor Portal",
    tagline:
      "A schema-first LLM pipeline that converts inconsistent ESG filings into standardized, investor-ready data.",
    problem:
      "Impact investors need standardized ESG metrics to compare companies, but raw ESG filings vary wildly in format, terminology, and depth across issuers. Manual extraction doesn't scale, and naive LLM summarization produces inconsistent, unreliable output that analysts can't trust for direct comparison.",
    solution:
      "Defined strict Pydantic output schemas before writing any extraction prompts, forcing precision and eliminating ambiguous outputs by design. Built a two-pass workflow: the LLM extracts raw mentions in pass one, then a rule-based validator checks schema compliance and flags anomalies in pass two. Added a confidence threshold system that routes low-confidence extractions to a human review queue instead of silently passing uncertain data downstream.",
    highlights: [
      "Defined Pydantic schemas before prompting — schema-first design eliminated ambiguous LLM outputs",
      "Built a two-pass extract-then-validate pipeline catching schema violations before data reaches downstream consumers",
      "Implemented confidence scoring that routes low-confidence extractions to human review rather than failing silently",
    ],
    techStack: ["OpenAI API", "Pydantic", "Python", "PostgreSQL", "FastAPI", "Pandas"],
    impact:
      "Achieved consistent structured output across diverse ESG filing formats, ensuring analyst-ready data quality before anything reaches the investor-facing portal.",
    visualTheme: "coral",
    visualKind: "json",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
