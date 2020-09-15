import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.sass']
})
export class LinkPageComponent implements OnInit {

  id;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id !== 'lev-arsen') {
        this.router.navigate(['/404']);
      }
    }

  ngOnInit(): void {
  }

}
