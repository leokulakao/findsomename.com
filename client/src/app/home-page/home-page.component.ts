import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NamesSandbox } from '../core/names/names.sandbox';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

    public searchForm: FormGroup;
    public keyword: FormControl;

    private subscriptions: Subscription[] = [];

    ALL_NAMES;

    constructor(
        public namesSandbox: NamesSandbox,
        public formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.getAllNames();
        this.subscriptions.push(this.namesSandbox.getAllNames$.subscribe(data => {
            if (data) {
                this.ALL_NAMES = data;
                this.ALL_NAMES = this.ALL_NAMES.names;
            }
        }));
    }

    private initForm(): void {
        this.keyword = new FormControl('', [Validators.required, Validators.minLength(3)]);

        this.searchForm = this.formBuilder.group({
            keyword: this.keyword,
        });
    }

    public getAllNames() {
        const params: any = {};
        params.limit = '10';
        this.namesSandbox.getAllNames(params);
    }

    public onSubmit() {
        const params: any = {};
        params.keyword = this.keyword.value ? this.keyword.value : '';
        this.namesSandbox.getAllNames(params);
    }

}
