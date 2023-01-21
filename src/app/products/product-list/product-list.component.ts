import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/product-list.service';
import { DisplayProduct, ProductsFilter } from 'src/app/product.interface';
import { ProductCategory } from '../../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: DisplayProduct[] = [];
  categories: ProductCategory[] = [];
  selectedCategory: number = 0;

  constructor(private productListService: ProductListService) {}

  getProducts(filter?: ProductsFilter) {
    this.productListService.getProducts(filter).subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.productListService.getAllCategories().subscribe((categories) => {
      this.categories = categories.sort((a, b) => a.name.localeCompare(b.name));
      this.categories.unshift({
        id: 0,
        name: '*** Összes termék',
        description: '',
        enabled: true,
      });
    });
    this.getProducts();
  }

  selectCategory() {
    this.getProducts({
      category: this.selectedCategory,
    });
  }
}
