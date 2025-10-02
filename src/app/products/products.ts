import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
products = [
  {id: 1, name: 'Minimalist Analog Watch', price: '109', color: 'Black', available:'Available', image: '/public/products/watch' },
  {id: 2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available:'Available', image: '/public/products/smartv' },
  {id: 3, name: 'Apple Iphone 12', price: '1855', color: 'Black', available:'Available', image: '/public/products/phone' },
  {id: 4, name: 'Lg Fully Automatic Washing Machine', price: '1765', color: 'White', available:'Not Available', image: '/public/products/wash' }


];
}
