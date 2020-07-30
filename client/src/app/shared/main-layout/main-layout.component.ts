import { Component, OnInit } from '@angular/core';
import { AuthSandbox } from 'src/app/core/auth/auth.sandbox';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public authSandbox: AuthSandbox
  ) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.authSandbox.logOut();
}

}
