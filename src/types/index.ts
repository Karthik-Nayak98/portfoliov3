export interface ViewCountResult {
  count: number;
}

export interface ComponentProps {
  title: string;
  excerpt?: string;
  href?: string;
  date?: string | number;
  slug: string;
  image?: string;
  name?: string;
  url?: string;
}

export interface SocialData {
  image: string;
  url: string;
  name: string;
}

export interface NavItem {
  title: string;
  path: string;
}
