
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

export type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
};

