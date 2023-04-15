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
  eyecatch?: EyeCache[];
  category?: Category[];
};

export type EyeCache = {
  url: string;
  height: number;
  width: number;
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};
