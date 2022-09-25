import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  providers: [HomeComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = 'Navbar';
  isAutheniticated: boolean = false;
  userName: string | null;

  constructor(private comp: HomeComponent) { }

  ngOnInit(): void {
    this.isAutheniticated = this.comp.userIsAuthenticated();
    console.log('User authenticated: ', this.isAutheniticated);
    this.userName = this.comp.getUserFromSession();
    console.log('User name: ', this.userName);
  }

  toggleMobileMenu: boolean = true;
  showMobileMenu() {
    this.toggleMobileMenu = !this.toggleMobileMenu
    console.log('Button status: ', this.toggleMobileMenu)
  }

}
