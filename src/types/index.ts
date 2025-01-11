export interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}

export type SectionTitleProps = {
  subtitle?: string;
  title?: string;
  description?: string;
};

export type Category = {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
