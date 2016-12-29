import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models';

@Component({
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    @Input() currentUser: User = new User;

    constructor(){

    }
    ngOnInit() {
        let storageUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.currentUser.username = storageUser.username;
        this.currentUser.firstName = storageUser.firstName;
        this.currentUser.lastName = storageUser.lastName;
        this.currentUser.email=storageUser.email;
        this.currentUser.gender=storageUser.gender;
        this.currentUser.rating=storageUser.rating;
        this.currentUser.image=storageUser.image;
        this.currentUser.age=storageUser.age;
        this.currentUser.createdOn=storageUser.createdOn;
    }
}