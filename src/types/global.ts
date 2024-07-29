export type DataCards = {
  slug?: string | null;
  title: string;
  description: string;
  category: {
    name: string;
    slug: string;
  };
  bannerImage: {
    url: string;
  };
  bannerDescription: string;
};

export type Categories = {
  id: string;
  name: string;
  slug: string;
};
