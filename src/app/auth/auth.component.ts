import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'angsand-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'skin-blue');
    this.renderer.addClass(document.body, 'sidebar-mini'); 
    this.renderer.removeClass(document.body, 'login-page');
  }

  ngOnInit() {
    
  }

}
