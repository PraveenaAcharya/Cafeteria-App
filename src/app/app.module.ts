import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchComponent } from './productlist/search/search.component';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductsComponent } from './productlist/products/products.component';
import { ProComponent } from './productlist/products/pro/pro.component';
import { FilterComponent } from './productlist/products/filter/filter.component';
import { ProductDetailComponent } from './productlist/product-detail/product-detail.component';
import { FeaturedComponent } from './productlist/featured/featured.component';
import { SetBackground } from './Directives/SetBackground.directive';
import { HighlightDirective } from './Directives/highlight.directive';
import { ApphoverDirective } from './Directives/apphover.directive';
import { RouterModule, Routes } from '@angular/router';
import { DisableProductDirective } from './Directives/disable-product.directive';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//define route
const routes : Routes  = [
  {path : 'Home', component: HeaderComponent},
  {path : 'Menu', component: TopHeaderComponent},
  {path : 'offer', component: ProductlistComponent},
  {path : 'Contact', component: HeaderComponent},
  {path : 'About', component: HeaderComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ProductlistComponent,
    SearchComponent,
    MainMenuComponent,
    ProductsComponent,
    ProComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedComponent,
    SetBackground,
    HighlightDirective,
    ApphoverDirective,
    DisableProductDirective,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    OfferComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
