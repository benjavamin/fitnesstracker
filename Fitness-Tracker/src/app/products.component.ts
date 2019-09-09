import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent {

  productName = 'A book';
  isDisabled = true;
  products = [ 'A Book', 'A Tree', 'A tent'];
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(){
    this.products.push(this.productName);
  }
}
