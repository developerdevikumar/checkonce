import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      email: ['', Validators.required ],
      address: ['', Validators.required ],
      state: ['', Validators.required ],
      country: ['', Validators.required ],
      phone_number: ['', Validators.required ],
      pass_word: ['', Validators.required ],
      confirm_password: ['', Validators.required ],

    });
  }
  addUsers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password ) {
    this.us.addUsers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password );
  }
  ngOnInit() {
  }

}