export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  establishedDate: string;
  establishedYear: number;
  phone: string;
  mobile: string;
  whatsapp: string;
  email: string;
  website: string;
  address: string;
  area: string;
  city: string;
  postalCode: string;
  fullAddress: string;
}

export interface ServiceCategory {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  items: string[];
  highlight: string;
  imageUrl: string;
}

export interface ProjectExperience {
  id: string;
  number: string;
  client: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  photos: {
    caption: string;
    localSrc: string;
    fallbackUrl: string;
  }[];
}

export interface DocumentationItem {
  id: string;
  title: string;
  category: string;
  localSrc: string;
  fallbackUrl: string;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  projectScope: string;
  timeline: string;
  notes: string;
}

export interface DealerCertificate {
  id: string;
  issuer: string;
  program: string;
  partnerType: string;
  partnerId?: string;
  authorizedParty: string;
  description: string;
  validity: string;
  statusText: string;
}

export interface ClientPartner {
  name: string;
  category: 'government' | 'international' | 'enterprise' | 'banking' | 'hospitality' | 'property';
  highlight?: string;
  domain?: string;
  shortName?: string;
}

export interface BusinessModelStep {
  step: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface BusinessModelWorkflow {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  steps: BusinessModelStep[];
}

export interface BrandMatrixCategory {
  category: string;
  brands: { name: string; note?: string }[];
}
