import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  templateUrl: './other-person-profile.component.html'
})
export class OtherPersonProfileComponent{
 @Input() user: User;
    routParams: any;
    mode: string;

    constructor(private route: ActivatedRoute, private usersService: UserService) {
        this.user = new User;
    }

    ngOnInit() {
        this.route
            .params
            .subscribe(params => {
                this.routParams = params['username'];
            });
        this.usersService.getByUsername(this.routParams)
            .subscribe(userJson => this.user = userJson);
    }

    get img(): string {
        return this.user.image;
    }

    get username(): string {
        return this.user.username;
    }

    get firstName(): string {
        return this.user.firstName;
    }

    get lastName(): string {
        return this.user.lastName;
    }

    get gender(): string {
        return this.user.gender;
    }

    get age(): number {
        return this.user.age;
    }

    get createdOn(): Date {
        return this.user.createdOn;
    }
}