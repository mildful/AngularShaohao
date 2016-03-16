import { Component } from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'nav-cmp',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav>
            <a [routerLink]="['Home']">Home</a>
        </nav>
    `
})
export class NavComponent { }