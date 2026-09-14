/**
 * Centralized Global Portfolio Configuration
 * 
 * Update your personal URLs and contact information here.
 * Any link containing 'YOUR_*' or placeholder strings will automatically be rendered
 * as 'Coming Soon' or disabled across the entire application to prevent broken links.
 */

export const portfolioConfig = {
  name: "Billa Venkatesh",

  email: "YOUR_EMAIL@example.com",

  phone: "YOUR_WHATSAPP_NUMBER",

  github: "https://github.com/Venkatesh-Billa",

  linkedin: "https://www.linkedin.com/in/venkateshbilla/",

  leetcode: "https://leetcode.com/u/YOUR_LEETCODE_USERNAME/",

  codechef: "https://www.codechef.com/users/YOUR_CODECHEF_USERNAME",

  hackerrank: "https://www.hackerrank.com/YOUR_HACKERRANK_USERNAME",

  resume: "/assets/resume/Billa_Venkatesh_Resume.pdf",

  whatsapp:
    "https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Venkatesh,%20I%20visited%20your%20portfolio.",

  projects: {
    movieRecommendation: {
      github: "https://github.com/YOUR_USERNAME/AI-Movie-Recommendation-System",
      demo: "https://YOUR_MOVIE_DEMO_URL"
    },

    fraudShield: {
      github: "https://github.com/YOUR_USERNAME/FraudShield-GenAI",
      demo: "https://YOUR_FRAUDSHIELD_DEMO_URL"
    },

    votingSystem: {
      github: "https://github.com/YOUR_USERNAME/Online-Voting-System",
      demo: "https://YOUR_VOTING_DEMO_URL"
    },

    invoiceSystem: {
      github: "https://github.com/YOUR_USERNAME/MERN-Invoice-Management-System",
      demo: "https://YOUR_INVOICE_DEMO_URL"
    },

    studentManagement: {
      github: "https://github.com/YOUR_USERNAME/Student-Management-System",
      demo: "https://YOUR_STUDENT_MANAGEMENT_DEMO_URL"
    },

    bragBoard: {
      github: "https://github.com/YOUR_USERNAME/BragBoard",
      demo: "https://YOUR_BRAGBOARD_DEMO_URL"
    }
  },

  certificates: {
    python: "/assets/certificates/Infosys-Python-Certificate.pdf",
    cloud: "https://YOUR_CLOUD_CERTIFICATE_URL",
    ai: "https://YOUR_AI_CERTIFICATE_URL"
  }
};

/**
 * Utility to verify if a URL is an unconfigured placeholder.
 * Returns true if the string is empty or contains placeholder identifiers like 'YOUR_' or 'example.com'.
 */
export function isPlaceholderUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return true;
  const trimmed = url.trim();
  if (!trimmed) return true;
  if (trimmed.includes('YOUR_')) return true;
  if (trimmed.includes('example.com')) return true;
  if (trimmed === '#' || trimmed === 'https://' || trimmed === 'http://') return true;
  return false;
}

/**
 * Returns the valid URL or null if it is a placeholder.
 */
export function getActiveUrl(url: string | null | undefined): string | null {
  return isPlaceholderUrl(url) ? null : (url?.trim() || null);
}
