import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'angsand-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onNavigateClick(url, activetreenode){
    url='/auth/'+url;
    console.log('went into onNavigateClick');
    document.getElementById(activetreenode).className += " active";
    this._router.navigate([url]);
    console.log(url);
  }
}
