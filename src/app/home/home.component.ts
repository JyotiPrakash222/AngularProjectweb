import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };

  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignup() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: ' ',
      email: ' ',
      password: ' ',
    };
    alert('User signed up successfully!');
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (m) =>
        m.userName == this.loginObj.userName &&
        m.password == this.loginObj.password
    );

    if (isUserExist != undefined) {
      alert('Login Credential Successful');
    } else {
      alert('Wrong credential');
    }
  }
}
