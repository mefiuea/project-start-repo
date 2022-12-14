import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void { }

  onSubmit(f: NgForm): void {
    console.log('Form value: ', f.value);
    console.log('Form valid: ', f.valid);

    sessionStorage.setItem('email', f.value.email)
    sessionStorage.setItem('isAuthenticated', JSON.stringify(true))

    this._router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  
}
