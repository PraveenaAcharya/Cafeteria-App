import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedCategory: string = 'All';
  searchText: string = '';

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, basil, olive oil",
      price: 299,
      image: "assets/bowl.png",
      category: "Main Course",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Classic Burger",
      description: "Beef patty, lettuce, tomato, cheese, special sauce",
      price: 199,
      image: "assets/charry-pie.png",
      category: "Main Course",
      badge: "New"
    },
    {
      id: 3,
      name: "Chicken Wings",
      description: "Spicy buffalo wings with blue cheese dip",
      price: 249,
      image: "assets/food-basket.png",
      category: "Starters"
    },
    {
      id: 4,
      name: "Chocolate Brownie",
      description: "Warm chocolate brownie with vanilla ice cream",
      price: 149,
      image: "assets/food-basket.png",
      category: "Desserts"
    },
    {
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    },{
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    },{
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    },{
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    },{
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    },{
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    },{
      id: 5,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 99,
      image: "assets/food-basket.png",
      category: "Beverages"
    }
    // Add more items as needed
  ];

  categories: string[] = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    return this.menuItems.filter(item => {
      const matchesCategory = this.selectedCategory === 'All' || item.category === this.selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                           item.description.toLowerCase().includes(this.searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  addToCart(item: MenuItem) {
    // Implement cart functionality here
    console.log(`Added ${item.name} to cart`);
  }
}
