import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent { 
    user:any[];
    repos: any[];
    username: string;
    constructor(private _githubService: GithubService){
    
        }
    
    updateUser():void
        {
            this._githubService.getUser(this.username).subscribe(
            user => {this.user = user}) 
            this._githubService.getRepos(this.username).subscribe(
            repos => {this.repos = repos}) 
            
        }
    
   
}
