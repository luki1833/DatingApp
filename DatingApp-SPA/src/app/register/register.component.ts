import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.model).subscribe(() => {
     this.alertify.success('registration succesful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

}
