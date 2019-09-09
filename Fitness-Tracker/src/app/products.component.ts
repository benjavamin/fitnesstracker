import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit{

  productName = 'A book';
  isDisabled = true;
  products = [ 'A Book', 'A Tree', 'A tent'];

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
    console.log(form);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }


}
