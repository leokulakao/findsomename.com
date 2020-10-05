import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LinkSandbox } from '../core/link/link.sandbox';
import { LabelSandbox } from '../core/label/label.sandbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.sass']
})
export class LinkPageComponent implements OnInit, OnDestroy {

  id;

  LABEL;
  page = 1;

  private subscriptions: Subscription[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public linkSandbox: LinkSandbox,
    public labelSandbox: LabelSandbox,
    public router: Router
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.linkSandbox.getLinkById({id: this.id});
      this.linkSandbox.getLinkById$.subscribe(data => {
        if (data && data.length !== 0) {
          this.labelSandbox.getLabelById({id_label: data[0].labelId});
        }
      });
      this.linkSandbox.getLinkByIdFail$.subscribe(data => data ? this.router.navigate(['/404']) : null);
    }

  ngOnInit(): void {
    this.subscriptions.push(this.labelSandbox.getLabelById$.subscribe(data => {
      if (data) {
        this.LABEL = data;
        this.LABEL = this.LABEL[0];
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.map(sub => sub.unsubscribe());
  }

}
