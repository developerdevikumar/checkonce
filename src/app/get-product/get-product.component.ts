import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
  product: Product[];

  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps
      .getproduct()
      .subscribe((data: Product[]) => {
        this.product = data;
    
    });
  }
}