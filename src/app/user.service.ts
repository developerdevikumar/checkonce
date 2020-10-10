import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  uri = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  addUsers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password) {
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
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));

  }
  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
           
  }
  editUsers(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }
    updateUsers(first_name, last_name, email, address, state, country, phone_number, pass_word, confirm_password,  id) {

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
    
      this.http.post(`${this.uri}/${id}`, obj)
     // console.log(obj);
          .subscribe(res => console.log('Done'));
    }
  
    deleteusers(id) {
      return this
                .http
                .get(`${this.uri}/${id}`);
             //   .subscribe(res => console.log('Done'));
                
    }

 
}