import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      product: ['', Validators.required ],
      subtext: ['', Validators.required ],
      category: ['', Validators.required ],
      price: ['', Validators.required ],
      status: ['', Validators.required ],
      discount: ['', Validators.required ],
      description: ['', Validators.required ],
      upload: ['', Validators.required ],
      deliverycondition: ['', Validators.required ],

    });
    
  }
  addProduct(product, subtext, category, price, status, discount, description, upload, deliverycondition ) {
    this.ps.addProduct(product, subtext, category, price, status, discount, description, upload, deliverycondition);

  }

  ngOnInit() {

  }

}