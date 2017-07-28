import { Component } from '@angular/core';
import { GithubService} from '../services/github.service';
@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: "profile.component.html"
})
export class ProfileComponent 
 { 
   constructor(private _githubsevice: GithubService)
   {
      this._githubsevice.getUser().subscribe(user => 
      console.log(user));
   }
 }