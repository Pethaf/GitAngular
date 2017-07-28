import { Component } from '@angular/core';
import { GithubService } from './services/github.service'; 

@Component({
  selector: 'my-app',
  providers: [GithubService],
  template: `<profile></profile>
            `,
})
export class AppComponent  { name = 'Angular'; }
