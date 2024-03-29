export type PostType = {
  id: string | number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
};

export type TimelineProps = {
  id: string | number;
  title: string;
  description: string;
  location: string;
  date: string;
  endDate: string;
  type: string;
};

export type ChildrenPropsType = {
  children: React.ReactNode;
};

export type HeroPropsType = {
  link: string;
  gtm?: string;
};

export type TimelinesPropsType = {
  timelines: TimelineProps[];
};

export type UnderDevPropsType = {
  status?: string;
};

export type ButtonPropsType = {
  type: string;
  href: string;
  text: string;
  gtm?: string;
  theme?: string;
};

export type ArticleDetailPropsType = {
  title: string;
  description: string;
  content: string;
  date?: string;
  author: string;
  image?: string;
  tags?: string[] | any;
};

export type CardBlogPropsType = {
  title: string;
  description: string;
  date?: string;
  slug: string;
  author: string;
  image?: string;
};

export type CardProjectPropsType = {
  title: string;
  excerpt: string;
  date?: string;
  url: string;
  stacks: string[];
  image: string;
};
