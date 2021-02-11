import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = sessionStorage.getItem('login');
  
  constructor(private router: Router) {
  }

  public logout() {
    sessionStorage.removeItem('tokenId');
    sessionStorage.removeItem('login');
    this.user = '';
    this.router.navigate(['/login']);
  }

  public canDeco(){
    if (sessionStorage.getItem('tokenId')) {
      return true;
    }
    return false;
  }
}
