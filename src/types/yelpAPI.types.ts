export type Category = {
  title: string;
  alias: string;
};

export type Business = {
  id: string;
  categories: Category[];
  image_url: string;
  name: string;
  rating: number;
  url: string;
  price?: string;
};
