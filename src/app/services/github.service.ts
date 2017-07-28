import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService
{
    private username: string;
    private client_id: string = "";
    private client_secret = "";
    constructor(private _http:Http)
    {
        console.log("Github service ready");
        this.username = "octocat";
    }
    getUser(): Observable<Object>
    {
        return this._http.get("https://api.github.com/users/" + this.username).
        map(res => res.json());
    }

}