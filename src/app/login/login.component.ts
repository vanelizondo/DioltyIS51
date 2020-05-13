import { Component, OnInit } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username: '', password: '' };
  constructor() { }

  ngOnInit() {
  }

  login(user: IUser) {
    const defaultUser: IUser = { username: '', password: '' };
    if (user.username != null && user.password != null) {
      if (user.username === defaultUser.username && user.username === defaultUser.password) {
        // log the user in
        // store user in localStorage
        // navigate to contact page
      }
    } else {
      // show error toast user
    }
  }
}
