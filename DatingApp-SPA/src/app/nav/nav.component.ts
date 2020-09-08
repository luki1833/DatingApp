import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log(error);
    });
  }
 // tslint:disable-next-line:typedef
 loggedIn(){
   const token = localStorage.getItem('token');
   return !!token;
 }
 logout(): void{
   localStorage.removeItem('token');
   console.log('logged out');
 }

}
