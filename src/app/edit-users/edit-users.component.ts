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
  angForm: FormGroup;
  users: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_gst_number: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.editusers(params['id']).subscribe(res => {
        this.users = res;
      });
    });
  }

  updateusers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password ) {
   this.route.params.subscribe(params => {
      this.us.updateusers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password , params['id']);
      this.router.navigate(['users']);
   });
}
}