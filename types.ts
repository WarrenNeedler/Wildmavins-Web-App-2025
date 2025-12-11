export interface NavItem {
  label: string;
  href: string;
}

export interface PartnerProfile {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface BenefitItem {
  number: string;
  title: string;
  description: string;
}

export enum MarketStatus {
  LAUNCH = 'Launch Market',
  FUTURE = 'Future Target'
}

export interface Market {
  name: string;
  status: MarketStatus;
}