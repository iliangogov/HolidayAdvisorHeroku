﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.alertService.success(`User ${this.model.username} logged in successful!`, true)
                this.router.navigate(['/home']);
            },
            error => {
                let message = JSON.parse(error._body);
                this.alertService.error(message.err, true);
                this.loading = false;
            });
    }
}
