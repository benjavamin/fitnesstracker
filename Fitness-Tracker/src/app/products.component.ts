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

  onAddProduct(form){
    // this.products.push(this.productName);
    if (form.valid) {
      this.products.push(form.value.productName);
    }
    console.log(form);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
