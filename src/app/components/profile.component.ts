import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit { 
    user:any[];
    repos: any[];
    constructor(private _githubService: GithubService){
        }
    ngOnInit(): void
    {
        this._githubService.getUser().subscribe(user => {
            this.user = user;})
        
        this._githubService.getRepos().subscribe(repo => {
            this.repos = repo;})
    }
    searchUser():void
        {
          
        }
   
}
