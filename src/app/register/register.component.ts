import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm):void {
    console.log('Form value: ', f.value);
    console.log('Form valid: ', f.valid);

    this._router.navigate(['/']);
  }

}
