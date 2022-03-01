import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: any;
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    const email=this.loginForm.get('email')?.value;
    const password=this.loginForm.get('password')?.value;
    this.authservice.signInUser(email,password).then(
      () =>{
        this.router.navigate(['/peoplelist']);
      },
      (error) =>{
        this.errorMessage=error
      }
    )
  }

}
