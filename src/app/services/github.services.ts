import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class GithubService {
    private username:string;
    private clientId="828d25dbd6568dcdd37c";
    private clientSecret="2f274997d2caf6c32e6b6787312493ec30f1921a";

    constructor(private _http: Http){
        console.log("Github services ready...");
        this.username="rohitgbg";
    }

    getUser(){
        return this._http.get("http://api.github.com/users/"+this.username+'?client_id'+this.clientId+'&client_secret'+this.clientSecret)
        .pipe(map(res => res.json()));
    }

    getRepos(){
        return this._http.get("http://api.github.com/users/"+this.username+'/repos?client_id'+this.clientId+'&client_secret'+this.clientSecret)
        .pipe(map(res => res.json()));
    }

    updateUser(username:string){
        this.username =username;
    }
}

