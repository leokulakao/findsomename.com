import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NamesSandbox } from '../core/names/names.sandbox';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

    private subscriptions: Subscription[] = [];

    ALL_NAMES;

    constructor(
        private namesSandbox: NamesSandbox,
    ) { }

    ngOnInit(): void {
        this.getAllNames();
        this.subscriptions.push(this.namesSandbox.getAllNames$.subscribe(data => {
            if (data) {
                this.ALL_NAMES = data;
                this.ALL_NAMES = this.ALL_NAMES.names;
            }
        }));
    }

    public getAllNames() {
        const params: any = {};
        this.namesSandbox.getAllNames(params);
    }

}
