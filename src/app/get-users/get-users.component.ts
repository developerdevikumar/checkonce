import { Component, OnInit } from '@angular/core';
import User from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users: User[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      });
    }
    deleteusers(id) {
      this.us.deleteusers(id).subscribe(res => {
        console.log('Deleted');
      });
    }
  }