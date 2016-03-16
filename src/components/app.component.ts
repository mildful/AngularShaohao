import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";
import { HomeComponent, NavComponent } from "./index";

@Component({
    selector: 'app-view',
    directives: [ ROUTER_DIRECTIVES, NavComponent ],
    template: `
        <h1>App</h1>
        <nav-cmp></nav-cmp>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/home',    name: 'Home',   component: HomeComponent }
])
export class AppComponent { }