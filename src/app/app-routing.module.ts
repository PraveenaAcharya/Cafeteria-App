import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Menu', component:MenuComponent},
  {path:'Offer', component:OfferComponent},
  {path:'Contact', component:ContactComponent},
  {path:'**', redirectTo:'', pathMatch:'full'} // Wildcard route for 404 handling
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
