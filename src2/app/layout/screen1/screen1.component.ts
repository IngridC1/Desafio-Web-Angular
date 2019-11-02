import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }

  registerUserData = {};
  favoriteColorControl = new FormControl('');
  name = new FormControl('');
  senha = new FormControl('');

  ngOnInit() {
  }

  registrar() {
    this._auth.registrar(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }

  updateData() {
    this.name.setValue('');
    this.senha.setValue('');
  }

}
