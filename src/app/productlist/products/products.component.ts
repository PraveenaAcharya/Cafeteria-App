import { Component, Input } from '@angular/core';
import { Products } from '../../models/product';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  discount:number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  selectedProduct : Products;
  products: Product[] = [
    {
      id: 1,
      name: "Burger",
      description: "A tasty beef burger with cheese and lettuce",
      price: 230,
      stock: 0,
      imageUrl: "assets/burger.png",
      discount:0,
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pepperoni pizza with extra cheese",
      price: 100,
      stock: 5,
      imageUrl: "assets/charry-pie.png",
      discount:30,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 75,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },{
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },{
      id: 3,
      name: "Sandwhich",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 200,
      stock: 8,
      imageUrl: "assets/sandwhich.png",
      discount:2,
    },{
      id: 1,
      name: "Burger",
      description: "A tasty beef burger with cheese and lettuce",
      price: 99,
      stock: 10,
      imageUrl: "assets/burger.png",
      discount:3,
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pepperoni pizza with extra cheese",
      price: 500,
      stock: 5,
      imageUrl: "assets/charry-pie.png",
      discount:9,
    },{
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },{
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 150,
      stock: 0,
      imageUrl: "assets/bowl.png",
      discount:20,
    },
    {
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },
    {
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },
    {
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },
    {
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },{
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },
    {
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },{
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    },
    {
      id: 3,
      name: "Fruit",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 600,
      stock: 8,
      imageUrl: "assets/food-basket.png",
      discount:10,
    },
    {
      id: 3,
      name: "Soup",
      description: "Creamy Alfredo pasta with chicken and mushrooms",
      price: 98,
      stock: 8,
      imageUrl: "assets/bowl.png",
      discount:0,
    }

  ];
  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p=>p.stock >0 ).length
  totalProductOutStock = this.products.filter(p=>p.stock === 0 ).length

  @Input()
  searchText:string =''

  selectedradio : string ='All'

  selectedFilterChange(value:string){
    this.selectedradio = value;
  }
 
 
 
}
