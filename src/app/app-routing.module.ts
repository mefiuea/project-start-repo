import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'logowanie',
    component: LoginComponent,
  },
  {
    path: 'rejestracja',
    component: RegisterComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'logowanie',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
