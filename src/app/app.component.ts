import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public image: any;
  public modal: any;
  public products: any;
  public title: string;
  public updatedItem: any;

  public isForUpdate: boolean;

  constructor() {
    this.modal = {};
    this.title = 'Angular5 CRUD Operation with array';
    this.updatedItem = '';

    this.isForUpdate = false;

    this.products = [
      { productName: 'samsung mobile', productDescription: "smart phone", productImage: "../assets/shopping.png" },
      { productName: 'Redmi mobile', productDescription: "smart phone", productImage: "../assets/Redmi7A.png" },
      { productName: 'lenovo mobile', productDescription: "smart phone", productImage: "../assets/lenovo.png" },
    ]
  }

  addProduct() {
    console.log(this.modal);
    this.products.push(this.modal);
    this.modal = {};
  }

  editProduct(i) {
    this.modal.productName = this.products[i].productName;
    this.modal.productDescription = this.products[i].productDescription
    this.updatedItem = i;
    this.isForUpdate = true;
  }

  updateProduct() {
    let data = this.updatedItem;
    for (let i = 0; i < this.products.length; i++) {
      if (i == data) {
        this.products[i].productName = this.modal.productName;
        this.products[i].productDescription = this.modal.productDescription;
      }
    }
    this.isForUpdate = false;
    this.modal = {};
  }

  deleteProduct(i) {
    window.confirm("Are you sure wnat to delete?")
    this.products.splice(i, 1);
    console.log(i);
  }
}