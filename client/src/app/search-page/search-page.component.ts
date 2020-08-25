import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NamesSandbox } from '../core/names/names.sandbox';
import { AuthSandbox } from '../core/auth/auth.sandbox';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

    public user;

    public searchForm: FormGroup;
    public keywordControl: FormControl;
    public showAllNames: FormControl;
    public limitControl: FormControl;
    public offsetControl: FormControl;

    keyword = '';
    limit = '10';
    offset = '';
    hided = false;

    private subscriptions: Subscription[] = [];

    ALL_NAMES;

    BUTTON_STATUS;

    page = 1;

    constructor(
        public namesSandbox: NamesSandbox,
        public authSandbox: AuthSandbox,
        public formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.authSandbox.getUserData();
        this.initForm();
        this.subscriptions.push(this.namesSandbox.getAllNames$.subscribe(data => {
            if (data) {
                this.BUTTON_STATUS = [];
                this.ALL_NAMES = data;
                this.ALL_NAMES = this.ALL_NAMES.names;
                if (this.ALL_NAMES) {
                    this.ALL_NAMES.forEach(name => {
                        this.BUTTON_STATUS.push({id: name.id, status: name.hide});
                    });
                }
                console.log(this.ALL_NAMES);
                console.log(this.BUTTON_STATUS);
            }
        }));
        this.subscriptions.push(this.authSandbox.getUserData$.subscribe(data => {
            if (data) {
                this.user = data;
                this.getAllNames();
                console.log(data);
            }
        }));
        //   this.subscriptions.push(this.keywordControl.valueChanges.subscribe(value => {
        //     if (value.length >= 2) {
        //         this.keyword = value;
        //         this.getAllNames();
        //     }
        //   }));
        //   this.subscriptions.push(this.offsetControl.valueChanges.subscribe(value => {
        //       if (value) {
        //           this.offset = value;
        //           this.getAllNames();
        //       }
        //   }));
    }

    private initForm(): void {
        this.keywordControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
        this.showAllNames = new FormControl(false),
        this.limitControl = new FormControl('');
        this.offsetControl = new FormControl('');

        this.searchForm = this.formBuilder.group({
            keyword: this.keywordControl,
            showAllNames: this.showAllNames,
            offset: this.offsetControl,
            limit: this.limitControl
        });
    }

    public triggerShowAllNames(): void {
        this.hided = !this.showAllNames.value;
    }

    public showName(name) {
        this.namesSandbox.editName({id: name.id, hide: false});
        this.BUTTON_STATUS[this.ALL_NAMES.indexOf(name)].status = false;
    }

    public hideName(name) {
        this.namesSandbox.editName({id: name.id, hide: true});
        this.BUTTON_STATUS[this.ALL_NAMES.indexOf(name)].status = true;
    }

    public getAllNames(keyword = this.keyword, limit = this.limit, offset = this.offset, hided = this.hided) {
        const params: any = {};
        params.keyword = keyword;
        params.limit = limit;
        params.offset = offset;
        if (this.user.permission === 'root' || this.user.permission === 'admin') {
            params.hided = hided;
        }
        console.log(params);
        this.namesSandbox.getAllNames(params);
    }

    public onSubmit() {
        const params: any = {};
        params.keyword = this.keywordControl.value ? this.keywordControl.value : '';
        params.limit = this.limitControl.value ? this.limitControl.value : '';
        params.offset = this.offsetControl.value ? this.offsetControl.value : '';
        if (this.user.permission === 'root' || this.user.permission === 'admin') {
            params.hided = !this.showAllNames.value;
        }
        console.log(params);
        this.namesSandbox.getAllNames(params);
    }

}
