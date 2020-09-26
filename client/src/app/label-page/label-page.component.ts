import { Component, OnInit } from '@angular/core';
import { LabelSandbox } from '../core/label/label.sandbox';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-label-page',
  templateUrl: './label-page.component.html',
  styleUrls: ['./label-page.component.sass']
})
export class LabelPageComponent implements OnInit {

  LABEL;
  // labelId = this.route.snapshot.params.id_label;
  id;
  page = 1;

  linkForm: FormGroup;
  linkControl: FormControl;

  private subscriptions: Subscription[] = [];

  constructor(
    public labelSandbox: LabelSandbox,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params.id_label;
    this.getLabelById();
    this.labelSandbox.getAllLabelsFail$.subscribe(data => data ? this.router.navigate(['/home']) : null);
  }

  ngOnInit(): void {
    this.initForm();
    this.subscriptions.push(this.labelSandbox.getLabelById$.subscribe(data => {
      if (data) {
        this.LABEL = data;
        this.LABEL = this.LABEL[0];
        console.log(data);
      }
    }));
  }

  private initForm(): void {
    this.linkControl = new FormControl('');

    this.linkForm = this.formBuilder.group({
      link: this.linkControl
    });
  }

  public getLabelById() {
    const params: any = {};
    params.id_label = this.id;
    this.labelSandbox.getLabelById(params);
  }

  public deleteLabel() {
    const params: any = {};
    params.id_label = this.id;
    this.labelSandbox.deleteLabel(params);
    this.labelSandbox.deleteLabelLoaded$.subscribe(data => data ? this.router.navigate(['/dashboard']) : null);
  }
}
