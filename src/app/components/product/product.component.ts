import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public extract;
  public transform;
  public load;
  public reviews;
  public ceneoId: number;
  public loading: boolean = false;
  private paramsSubsription;

  constructor(public route: ActivatedRoute, public apiService: ApiService) {
  }
  
  ngOnInit() {
    this.paramsSubsription = this.route.params.subscribe(
      params => {
        this.ceneoId = params['ceneoId'];
      }
    );
  }

  public getExtract(): void {
    this.loading = true;
    this.apiService.extract(this.ceneoId).subscribe((response) => {
      this.extract = response;
      this.loading = false;
    });
  }

  public getTransform(): void {
    this.loading = true;
    this.apiService.transform().subscribe((response) => {
      this.transform = response;
      this.loading = false;
    });
  }

  public getLoad(): void {
    this.loading = true;
    this.apiService.load().subscribe((response) => {
      this.load = response;
      this.loading = false;
    });
  }

  public getReviews(): void {
    this.loading = true;
    this.apiService.getReviews(this.ceneoId).subscribe((response) => {
      this.reviews = response;
      this.loading = false;
    });
  }
}
