import { Component } from '@angular/core';
import { GithubService } from './services/github.service'; 

@Component({
  selector: 'my-app',
  providers: [GithubService],
  template: `<navbar></navbar>
            <div class="container"> <profile></profile></div>
            `,
})
export class AppComponent  { name = 'Angular'; }
