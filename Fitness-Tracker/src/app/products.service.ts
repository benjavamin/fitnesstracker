export class ProductsService {
  private products = ['A Book', 'A Tree', 'A Bike'];

  addProduct(productName: string) {
    this.products.push(productName);
  }

  getProducts() {
    return [...this.products];
  }
}
