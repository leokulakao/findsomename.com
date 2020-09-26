import { Component, OnInit } from '@angular/core';
import { LabelSandbox } from '../core/label/label.sandbox';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LinkSandbox } from '../core/link/link.sandbox';
import { LinkModel } from '../core/link/models/link.model';
import { UrlService } from '../shared/url.service';
import { ClipboardService } from 'ngx-clipboard';

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
    public linkSanbox: LinkSandbox,
    public urlService: UrlService,
    private clipboardService: ClipboardService,
    public router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params.id_label;
    this.getLabelById();
    this.labelSandbox.getAllLabelsFail$.subscribe(data => data ? this.router.navigate(['/home']) : null);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.labelSandbox.getLabelById$.subscribe(data => {
      if (data) {
        this.LABEL = data;
        this.LABEL = this.LABEL[0];
        if (!!this.LABEL.link) {
          this.initForm();
        }
        console.log(data);
      }
    }));
  }

  private initForm(): void {
    this.linkControl = new FormControl(this.urlService.getUrl() + '/link/' + this.LABEL.link.id);

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

  public generateLink() {
    const params: any = {};
    params.id_label = this.LABEL.id;
    this.linkSanbox.addLink(params);
    this.linkSanbox.addLinkLoaded$.subscribe(data => data ? this.getLabelById() : null);
  }

  public copyLink() {
    this.clipboardService.copyFromContent(this.linkControl.value);
  }

  public openLink() {
    window.open(this.linkControl.value);
  }

  public deleteLink() {
    const params: any = {};
    params.id_link = this.LABEL.link.id;
    this.linkSanbox.deleteLink(params);
    this.linkSanbox.deleteLinkLoaded$.subscribe(data => data ? this.getLabelById() : null);
  }
}
