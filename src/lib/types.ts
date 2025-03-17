export interface Author {
  name: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  content: string;
  author?: Author;
  date: string;
  tags?: string[];
} 