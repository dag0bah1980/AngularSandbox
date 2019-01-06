import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'angsand-top-info-bar',
  templateUrl: './top-info-bar.component.html',
  styleUrls: ['./top-info-bar.component.css']
})
export class TopInfoBarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private user: UserService) { }


  ngOnInit() {

  }

  tryLogout() {    
    console.log("Logout!");
    this.auth.doNewLogout()
    this.router.navigate(['/login']);
  }

  getCurrentUser(){
    console.log("Current User:");
    console.log(this.user.getCurrentUser());
  }
}
