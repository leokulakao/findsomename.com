import { Component, OnInit } from '@angular/core';
import { AuthSandbox } from '../core/auth/auth.sandbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {

  public user;

  selectUser;

  USERS;

  STATUS = [];

  page = 1;

  private subscriptions: Subscription[] = [];

  constructor(
    public authSandbox: AuthSandbox,
  ) { }

  ngOnInit(): void {
    this.authSandbox.getUserData();
    this.getAllUsers();
    this.subscriptions.push(this.authSandbox.getUserData$.subscribe(data => {
      if (data) {
          this.user = data;
          console.log(this.user);
      }
    }));
    // this.subscriptions.push(this.authSandbox.getUserData$.subscribe(data => console.log(data)));
    this.subscriptions.push(this.authSandbox.getAllUsers$.subscribe(data => {
      if (data) {
        this.USERS = data;
        this.USERS = this.USERS.users;
        if (this.USERS) {
          this.USERS.forEach(user => {
            this.STATUS.push({id: user.id, permission: user.permission});
          });
        }
      }
      console.log(this.USERS);
    }));

  }

  public getAllUsers() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    this.authSandbox.getAllUsers(params);
  }

  public changeSelect(event, name) {
    const oldValue = this.STATUS.find(elem => elem.id === name.id).permission;
    const newValue = event.target.value !== oldValue ? event.target.value : oldValue;
    console.log('OldValue', oldValue);
    console.log('NewValue', newValue);
    console.log(name.email);
  }

}
