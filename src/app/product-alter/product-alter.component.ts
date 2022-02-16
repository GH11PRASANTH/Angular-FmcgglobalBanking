import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alter',
  templateUrl: './product-alter.component.html',
  styleUrls: ['./product-alter.component.css']
})
export class ProductAlterComponent {
@Input() productInside : Product | undefined
@Output() notify = new EventEmitter();
  

}