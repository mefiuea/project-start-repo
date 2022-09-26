import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUserFromSession(): string | null {
    return sessionStorage.getItem('email');
  }

  public userIsAuthenticated(): boolean {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('isAuthenticated') != null) {
      let emailLenght = Number(sessionStorage.getItem('email')?.length)
      if (emailLenght > 0 && sessionStorage.getItem('isAuthenticated') === 'true') {
        return true  // user is authenticated
      } else {
        return false
      }
    } else {
      return false
    }
  }

}
