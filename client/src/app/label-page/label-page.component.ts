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
  labelId = this.route.snapshot.params.id;
  page = 1;
  private subscriptions: Subscription[] = [];

  constructor(
    public labelSandbox: LabelSandbox,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllLabels();
    this.subscriptions.push(this.labelSandbox.getAllLabels$.subscribe(data => {
      if (data) {
        this.label = data.filter(item => item.id === this.labelId );
        this.label = this.label[0];
      }
    } ));
  }

  public getAllLabels() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    this.labelSandbox.getAllLabels(params);
  }

}
