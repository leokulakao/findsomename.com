import { Component, OnInit } from '@angular/core';
import { LabelSandbox } from '../core/label/label.sandbox';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label-page',
  templateUrl: './label-page.component.html',
  styleUrls: ['./label-page.component.sass']
})
export class LabelPageComponent implements OnInit {

  label;
  labelId = this.route.snapshot.params.id_label;
  page = 1;
  private subscriptions: Subscription[] = [];

  constructor(
    public labelSandbox: LabelSandbox,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getLabelById();
    this.subscriptions.push(this.labelSandbox.getLabelById$.subscribe(data =>
      this.label = data
    ));
  }

  public getLabelById() {
    const params: any = {};
    params.id_label = this.labelId;
    this.labelSandbox.getLabelById(params);
  }
}
