import { Component} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
   products = products;
  share()
  {
    window.alert("The Product is saved!")
  }
  buy()
  {
    window.alert("The Product is add to cart!")
  }
  }

