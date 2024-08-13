export type DataCards = {
  slug?: string | null;
  title: string;
  description: string;
  category?: {
    name: string;
    slug?: string | null;
  } | null;
  bannerImage: {
    url: string;
  };
  bannerDescription?: string | null;
};

export type Categories = {
  id: string;
  name: string;
  slug: string;
};

export type CategoryData = {
  description: string;
  name: string;
  post: {
    slug: string;
    title: string;
  }[];
  slug: string;
};
