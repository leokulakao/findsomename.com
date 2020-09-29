import { Component, OnInit } from '@angular/core';
import { AuthSandbox } from '../core/auth/auth.sandbox';
import { LabelSandbox } from '../core/label/label.sandbox';
import { Subscription } from 'rxjs';
import { ModalService } from 'angular-modal-library';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {

  public user;

  selectedUser;

  changePasswordForm: FormGroup;
  changePasswordPassword: FormControl;
  changePasswordPasswordRepite: FormControl;

  USERS;
  LABELS;

  STATUS = [];

  pageLabels = 1;
  pageUsers = 1;

  private subscriptions: Subscription[] = [];

  constructor(
    public authSandbox: AuthSandbox,
    public labelSandbox: LabelSandbox,
    public formBuilder: FormBuilder,
    public modal: ModalService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllLabels();
    this.initForm();
    this.subscriptions.push(this.authSandbox.getUserData$.subscribe(data => {
      if (data) {
          this.user = data;
      } else {
        this.authSandbox.getUserData();
      }
    }));
    // this.subscriptions.push(this.authSandbox.getUserData$.subscribe(data => console.log(data)));
    this.subscriptions.push(this.authSandbox.getAllUsers$.subscribe(data => {
      if (data) {
        this.USERS = data;
        this.USERS = this.USERS.users;
        if (this.USERS) {
          this.STATUS = [];
          this.USERS.forEach(user => {
            this.STATUS.push({id: user.id, permission: user.permission});
          });
        }
      }
      // console.log(this.USERS);
      // console.log(this.STATUS);
    }));

    this.subscriptions.push(this.labelSandbox.getAllLabels$.subscribe(data => {
      if (data) {
        this.LABELS = data;
        console.log(data);
      }
    }));

  }

  public initForm() {
    this.changePasswordPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.changePasswordPasswordRepite = new FormControl('', [Validators.required, Validators.minLength(6)]);

    this.changePasswordForm = this.formBuilder.group({
      password: this.changePasswordPassword,
      passwordRepite: this.changePasswordPasswordRepite
    });
  }

  public onSubmitModalChangePasswordForm() {
    const params: any = {};
    params.id = this.selectedUser.id;
    params.password = this.changePasswordPassword.value;
    this.authSandbox.editUser(params);
    this.authSandbox.editUserLoaded$.subscribe(data => data ? this.closeSettings() : null);
  }

  public getAllUsers() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    this.authSandbox.getAllUsers(params);
  }

  public getAllLabels() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    this.labelSandbox.getAllLabels(params);
  }

  public deleteUser(id) {
    const params: any = {};
    params.id = id;
    this.authSandbox.deleteUser(params);
    this.authSandbox.deleteUserLoaded$.subscribe(data => {
      if (data) {
        this.getAllUsers();
      }
    });
  }

  public openSettings(user) {
    this.selectedUser = user;
    this.modal.open('modal-user-settings');
    this.initForm();
    console.log(user);
  }

  public closeSettings() {
    this.selectedUser = null;
    this.modal.close('modal-user-settings');
  }

  public changeSelect(event, user) {
    const oldValue = this.STATUS.find(elem => elem.id === user.id).permission;
    const newValue = event.target.value !== oldValue ? event.target.value : oldValue;

    if (newValue !== oldValue) {
      const params: any = {};
      params.id = user.id;
      params.permission = newValue;
      this.authSandbox.editUser(params);
      this.authSandbox.editUserLoaded$.subscribe(data => {
        if (data) {
          event.target.value = newValue;
        }
      });
      this.authSandbox.editUserFail$.subscribe(data => {
        if (data) {
          event.target.value = oldValue;
        }
      });
    }
    console.log('OldValue', oldValue);
    console.log('NewValue', newValue);
    console.log(user);
  }

}
