import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  sidebarVisible: boolean = false;

  // Method to show the sidebar
  showSidebar() {
    this.sidebarVisible = true;
  }

  // Method to hide the sidebar
  hideSidebar() {
    this.sidebarVisible = false;
  }
  

}
