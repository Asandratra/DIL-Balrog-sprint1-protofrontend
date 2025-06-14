import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CopyrightComponent } from "../../copyright/copyright.component";
import { CartProductListComponent } from "../cart-product-list/cart-product-list.component";

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, CopyrightComponent, CartProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
