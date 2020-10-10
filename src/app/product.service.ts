import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:3000/product';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  addProduct(product, subtext, category, price, status, discount, upload, description,deliverycondition ) {
    const obj = {
      product: product,
      subtext: subtext,
      category: category,
      price: price,
      status: status,
      discount: discount,
      upload: upload,
      description: description,
      deliverycondition: deliverycondition,
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));

  }
  getproduct() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editusers(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    updateusers(product, subtext, category, price, status, discount, upload, deliverycondition, id) {

      const obj = {
        product: product,
        subtext: subtext,
        category: category,
        price: price,
        status: status,
        discount: discount,
        upload: upload,
        deliverycondition: deliverycondition,
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
  
   deleteusers(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }

 
}