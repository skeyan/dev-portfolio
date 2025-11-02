/**
 * Centralized link configuration
 * All external and internal links used throughout the application
 */

export const LINKS = {
  // Social Media Profiles
  LINKEDIN: 'https://www.linkedin.com/in/sk-evayan/',
  GITHUB: 'https://github.com/skeyan',
  ITCH_IO: 'https://masotzhen.itch.io/',

  // Files
  RESUME: '/files/YanEvaNov2025.pdf',

  // Company LinkedIn Pages
  COMPANIES: {
    NYTIMES: 'https://www.linkedin.com/company/the-new-york-times/',
    LINKEDIN: 'https://www.linkedin.com/company/linkedin/',
    HOLLER: 'https://www.linkedin.com/company/hollerstudios/',
    CORNELL_TECH: 'https://www.linkedin.com/company/cornell-tech/',
  },
};

// Company enum keys
export const Company = {
  NYTIMES: 'nytimes',
  LINKEDIN: 'linkedin',
  HOLLER: 'holler',
  CORNELL_TECH: 'cornellTech',
};

// Company data with names and URLs
export const companies = {
  [Company.NYTIMES]: {
    name: 'The New York Times',
    url: LINKS.COMPANIES.NYTIMES,
  },
  [Company.LINKEDIN]: {
    name: 'LinkedIn',
    url: LINKS.COMPANIES.LINKEDIN,
  },
  [Company.HOLLER]: {
    name: 'Holler',
    url: LINKS.COMPANIES.HOLLER,
  },
  [Company.CORNELL_TECH]: {
    name: 'Cornell Tech',
    url: LINKS.COMPANIES.CORNELL_TECH,
  },
};
