import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  users: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder) {
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


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.editUsers(params['id']).subscribe(res => {
        this.users = res;
      });
    });
  }

  updateUsers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password ) {
   this.route.params.subscribe(params => {
      this.us.updateUsers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password , params['id']);
      this.router.navigate(['get--users']);
   });
}
}