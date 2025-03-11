export interface Testimonial {
  id?: string;
  quote: string;
  author: string;
  company: string;
  image: string;
  industry?: string;
  services?: string[];
  featured?: boolean;
  rating?: number;
}