import { Component } from '@angular/core';
import { GithubService } from '../services/github.services';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent {

    user:any;
    repos:any[];
    username:string;

    constructor(private _githubservices : GithubService ){
       this.user = false;
    }

    searchUser(){

        this._githubservices.updateUser(this.username);

        this._githubservices.getUser().subscribe(user =>{
            this.user = user;
        })

        this._githubservices.getRepos().subscribe(repos =>{
            this.repos = repos;
        })

    }
}
