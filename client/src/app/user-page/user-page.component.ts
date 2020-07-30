import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NamesSandbox } from '../core/names/names.sandbox';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.sass']
})
export class UserPageComponent implements OnInit {

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
              console.log(this.ALL_NAMES)
          }
      }));
      this.subscriptions.push(this.keyword.valueChanges.subscribe(value => {
        if (value.length >= 2) {
            this.getAllNames(value);
        }
      }));
  }

  private initForm(): void {
      this.keyword = new FormControl('', [Validators.required, Validators.minLength(3)]);

      this.searchForm = this.formBuilder.group({
          keyword: this.keyword,
      });
  }

  public getAllNames(keyword = '', limit = '100', offset = '') {
      const params: any = {};
      params.keyword = keyword;
      params.limit = limit;
      params.offset = offset;
      this.namesSandbox.getAllNames(params);
  }

  public onSubmit() {
      const params: any = {};
      params.keyword = this.keyword.value ? this.keyword.value : '';
      this.namesSandbox.getAllNames(params);
  }

}
