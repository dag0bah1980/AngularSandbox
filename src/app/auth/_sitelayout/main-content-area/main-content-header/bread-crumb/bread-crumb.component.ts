import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, distinctUntilChanged, map, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'angsand-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})




export class BreadCrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.breadcrumbs = []; 
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        //set breadcrumbs
        let root: ActivatedRoute = this.activatedRoute.root;
        //console.log(this.activatedRoute.root);
        //console.log(this.activatedRoute.firstChild);
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
    }

  ngOnInit() {

    
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      //console.log(this.activatedRoute.root);
      //console.log(this.activatedRoute.firstChild);
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  /*
   * Returns array of IBreadcrumb objects that represent the breadcrumb
   *
   * @class DetailComponent
   * @method getBreadcrumbs
   * @param {ActivateRoute} route
   * @param {string} url
   * @param {IBreadcrumb[]} breadcrumbs
   */
  private getBreadcrumbs(route: ActivatedRoute, url: string="/auth/", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
  //debugger
    //get the child routes
    let children: ActivatedRoute[] = route.children;
    

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/auth");

      //append route URL to URL
      //url += `/${routeURL}`;
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);
      
      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}