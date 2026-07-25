export type ReferralCategory =
  | "traditional-search"
  | "generative-search"
  | "AI-assistant"
  | "social"
  | "referral"
  | "direct"
  | "email"
  | "unknown";

export interface ReferralClassification {
  id: string;
  displayName: string;
  hostnamePatterns: string[];
  category: ReferralCategory;
  confidence: "high" | "medium" | "low";
  reportingLabel: string;
  publicDocumentation?: string;
  active: boolean;
}

export const referralClassifications: ReferralClassification[] = [
  {
    id: "chatgpt",
    displayName: "ChatGPT",
    hostnamePatterns: ["chatgpt.com", "openai.com"],
    category: "AI-assistant",
    confidence: "high",
    reportingLabel: "ChatGPT (AI)",
    active: true
  },
  {
    id: "perplexity",
    displayName: "Perplexity",
    hostnamePatterns: ["perplexity.ai"],
    category: "AI-assistant",
    confidence: "high",
    reportingLabel: "Perplexity (AI)",
    active: true
  },
  {
    id: "copilot",
    displayName: "Copilot",
    hostnamePatterns: ["copilot.microsoft.com"],
    category: "AI-assistant",
    confidence: "high",
    reportingLabel: "Copilot (AI)",
    active: true
  },
  {
    id: "google-search",
    displayName: "Google Search",
    hostnamePatterns: ["google.com", "google.co.uk", "google.ca", "google.com.au"],
    category: "traditional-search",
    confidence: "high",
    reportingLabel: "Google",
    active: true
  },
  {
    id: "bing-search",
    displayName: "Bing Search",
    hostnamePatterns: ["bing.com"],
    category: "traditional-search",
    confidence: "high",
    reportingLabel: "Bing",
    active: true
  }
];

export function classifyReferral(hostname: string): ReferralClassification {
  if (!hostname) {
    return {
      id: "direct",
      displayName: "Direct",
      hostnamePatterns: [],
      category: "direct",
      confidence: "high",
      reportingLabel: "Direct / None",
      active: true
    };
  }

  const normalizedHostname = hostname.toLowerCase();

  for (const classification of referralClassifications) {
    if (!classification.active) continue;
    for (const pattern of classification.hostnamePatterns) {
      if (normalizedHostname === pattern || normalizedHostname.endsWith(`.${pattern}`)) {
        return classification;
      }
    }
  }

  return {
    id: "unknown",
    displayName: "Unknown Referral",
    hostnamePatterns: [],
    category: "unknown",
    confidence: "low",
    reportingLabel: "Unknown Referral",
    active: true
  };
}
