import { Component, Input } from '@angular/core';
import { Products } from '../../models/product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Products;
  @Input() ProductComp : ProductsComponent

  ngOnInit(){
    this.product = this.ProductComp.selectedProduct;
  }
 

}
