import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  DisplayProduct,
  ProductCategory,
  ProductsFilter,
} from './product.interface';
import { PRODUCTS } from './fake-data/fake-products';
import { CATEGORIES } from './fake-data/categories';
import { FilterOperator } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor() {}

  getProducts(filter?: ProductsFilter): Observable<any[]> {
    const categories = this.getAllCategories();
    return of(
      PRODUCTS.filter((p) => {
        if (filter) {
          if (filter.category) {
            return p.categoryId === filter.category;
          }
        }
        return true;
      }).map((product) => {
        let defaultIndex = 0;
        let defaultImageIndex = 0;
        if (product.variations.length > 0) {
          defaultIndex = product.variations.findIndex(
            (variation) => variation.default
          );
        }
        if (defaultIndex === -1) {
          defaultImageIndex = 0;
        }
        const defaultVariation = product.variations[defaultIndex];
        if (defaultVariation.images) {
          if (defaultVariation.images.length > 0) {
            defaultImageIndex = defaultVariation.images.findIndex(
              (image) => image.default
            );
          }
        } else {
          defaultVariation.images = [
            {
              id: 0,
              src: '',
              caption: '',
              default: true,
              enabled: true,
            },
          ];
        }
        if (defaultImageIndex === -1) {
          defaultImageIndex = 0;
        }
        const defaultImage = defaultVariation.images[defaultImageIndex];
        return {
          id: product.id,
          productId: product.id,
          variationId: defaultVariation.id,
          variationType: defaultVariation.variationType,
          sku: defaultVariation.sku,
          categoryName: CATEGORIES.find((c) => c.id === product.categoryId)
            ?.name,
          name: defaultVariation.name,
          description: product.shortDescription || '',
          defaultImageSrc: defaultImage.src || null,
          caption: defaultImage.src || null,
          price: defaultVariation.price,
          enabled: product.enabled,
        };
      })
    );
  }

  getAllCategories(): Observable<ProductCategory[]> {
    return of(CATEGORIES);
  }
}
