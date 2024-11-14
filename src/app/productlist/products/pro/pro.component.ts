import { Component, Input } from '@angular/core';
import { Products } from '../../../models/product';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrl: './pro.component.css'
})
export class ProComponent {
 //wherevre we use app-pro sellector we can use product as an attribute
  @Input()
  product :Products;

}
