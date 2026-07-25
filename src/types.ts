export interface ServerData {
  name: string;
  ip: string;
  port: number;
  version: string;
  theme: string;
  status: string;
}

export interface JoinStep {
  step: number;
  text: string;
}

export interface JoinData {
  title: string;
  steps: JoinStep[];
}

export interface RulesGroupData {
  title: string;
  rules: string[];
}

export interface RulesServerData {
  title: string;
  rules: string[];
  note: string;
}

export interface StaffMember {
  name: string;
  role: string;
  avatar: string;
}

export interface StaffData {
  title: string;
  members: StaffMember[];
}

export interface LinksData {
  website: string;
  saweria: string;
  dana: string;
  rankBuy: string;
  youtube: string;
  vote: string;
  group: string;
}

export interface DeveloperContact {
  phone: string;
  whatsapp: string;
}

export interface DeveloperCommunity {
  name: string;
  website: string;
  discord: string;
}

export interface DeveloperWebsite {
  portfolio: string;
}

export interface DeveloperData {
  name: string;
  contact: DeveloperContact;
  community: DeveloperCommunity;
  website: DeveloperWebsite;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  url: string;
}
