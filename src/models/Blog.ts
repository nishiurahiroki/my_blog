export type Blogs = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: string[];
  category?: string[];
};
