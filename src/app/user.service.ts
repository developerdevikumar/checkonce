import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  users(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password) {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      address: address,
      state: state,
      country: country,
      phone_number: phone_number,
      pass_word: pass_word,
      confirm_password: confirm_password
    };
    console.log(obj);
    this.http.post(`${this.uri}/users`, obj)
        .subscribe(res => console.log('Done'));

  }
  getusers() {
    return this
           .http
           .get(`${'http://localhost:3000/users'}`);
  }
  editusers(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    updateusers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password,  id) {

      const obj = {
        first_name:first_name ,
        last_name:last_name,
        email: email,
        address:address,
        state: state,
        country:country,
        phone_number:phone_number,
        pass_word:pass_word,
        confirm_password: confirm_password,
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