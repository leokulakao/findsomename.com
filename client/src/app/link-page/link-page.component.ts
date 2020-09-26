import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LinkSandbox } from '../core/link/link.sandbox';
import { LabelSandbox } from '../core/label/label.sandbox';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.sass']
})
export class LinkPageComponent implements OnInit {

  id;

  constructor(
    public activatedRoute: ActivatedRoute,
    public linkSandbox: LinkSandbox,
    public labelSandbox: LabelSandbox,
    public router: Router
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.linkSandbox.getLinkById({id: this.id});
      this.linkSandbox.getLinkById$.subscribe(data => data ? this.labelSandbox.getLabelById({id_label: data.data.id_label}) : null);
      this.linkSandbox.getLinkByIdFail$.subscribe(data => data ? this.router.navigate(['/404']) : null);
    }

  ngOnInit(): void {
  }

}
