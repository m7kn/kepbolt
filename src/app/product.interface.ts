export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  enabled: boolean;
}

export interface ProductImage {
  id: number;
  default: boolean;
  src: string;
  caption: string | null;
  enabled: boolean;
}

export interface ProductVariations {
  id: number;
  sku: string;
  variationType: string | null;
  name: string;
  description: string;
  images: ProductImage[] | null;
  default: boolean;
  enabled: boolean;
  price: number;
}

export interface Product {
  id: number;
  variationTypes: string[] | null;
  variations: ProductVariations[];
  categoryId: number;
  shortDescription: string | null;
  description: string | null;
  enabled: boolean;
}

export interface DisplayProduct {
  id: number;
  productId: number;
  variationId: number;
  variationType: string | null;
  sku: string;
  categoryName: string;
  name: string;
  description: string;
  defaultImageSrc: string | null;
  caption: string | null;
  price: number;
  enabled: boolean;
}

export interface ProductsFilter {
  category?: number;
  name?: string;
}
