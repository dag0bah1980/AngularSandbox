import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'angsand-authhome',
  templateUrl: './authhome.component.html',
  styleUrls: ['./authhome.component.css']
})
export class AuthhomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    console.log(activatedRoute.snapshot.data['breadcrumb']);
  }

  ngOnInit() {
    
  }

}
