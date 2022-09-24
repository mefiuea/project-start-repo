import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    console.log('Form value: ', f.value);  // { first: '', last: '' }
    console.log('Form valid: ', f.valid);  // false
  }
}
