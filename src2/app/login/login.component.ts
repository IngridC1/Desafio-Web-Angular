import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { NgModule } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


    loginUserData = {};

    constructor(private router: Router, private loginService: LoginService, private auth: AuthService) {}
    logins: Array<any>;

    // statusName;

    ngOnInit() {
    }

    logar() {
        this.auth.logar(this.loginUserData).subscribe(res => {
                localStorage.setItem('token', res.token);
                if (res.token === 'QpwL5tke4Pnpja7X4') {
                    this.router.navigate(['/special']);
                }
            },
            err => console.log(err)
        );
        /* .subscribe(dados => this.logins = dados);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']); */
    }
        // .subscribe(dados => this.logins = dados);
        //    localStorage.setItem('isLoggedin', 'true');
        //    this.router.navigate(['/dashboard']);

}
