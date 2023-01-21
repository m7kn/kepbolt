import { Component, Input } from '@angular/core';
import { DisplayProduct } from 'src/app/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() data?: DisplayProduct;
  @Input() layout: string = 'grid';
}
