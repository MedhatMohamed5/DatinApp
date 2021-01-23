import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
      console.log(error);
    });
  }

  loggedIn(): boolean
  {
    return this.authService.loggedIn();
  }


  logout(): void{
    localStorage.removeItem('token');
    console.log('Logged out');
    this.alertify.message('Logged out');
  }
}
