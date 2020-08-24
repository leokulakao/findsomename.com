import { Component, OnInit } from '@angular/core';
import { AuthSandbox } from '../core/auth/auth.sandbox';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private authSandbox: AuthSandbox,
  ) { }

  ngOnInit(): void {
    this.authSandbox.getUserData$.subscribe(data => console.log(data));
  }

}
