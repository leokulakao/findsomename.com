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
  public keywordControl: FormControl;
  public limitControl: FormControl;
  public offsetControl: FormControl;

  keyword = '';
  limit = '10';
  offset = '';

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
      this.limitControl = new FormControl('');
      this.offsetControl = new FormControl('');

      this.searchForm = this.formBuilder.group({
          keyword: this.keywordControl,
          offset: this.offsetControl,
          limit: this.limitControl
      });
  }

  public getAllNames(keyword = this.keyword, limit = this.limit, offset = this.offset) {
      const params: any = {};
      params.keyword = keyword;
      params.limit = limit;
      params.offset = offset;
      this.namesSandbox.getAllNames(params);
  }

  public onSubmit() {
      const params: any = {};
      params.keyword = this.keywordControl.value ? this.keywordControl.value : '';
      this.namesSandbox.getAllNames(params);
  }

}
