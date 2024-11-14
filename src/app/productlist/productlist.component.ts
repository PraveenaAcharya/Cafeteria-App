import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  searchText: string =''

  @ViewChild('productListComponent') ProductComponent : ProductsComponent

  setSearchText(value:string){
    this.searchText = value;

  }
  
}
