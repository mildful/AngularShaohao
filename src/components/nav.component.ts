import { Component } from "angular2/core";

@Component({
    selector: 'nav-cmp',
    template: `
        <nav>
            <a [routerLink]="['Home']">Home</a>
        </nav>
    `
})
export class NavComponent { }