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
  public ceneoId: number;
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
    this.apiService.extract(this.ceneoId).subscribe((response) => {
      this.extract = response;
    });
  }

  public getTransform(): void {
    this.apiService.transform().subscribe((response) => {
      this.transform = response;
    });
  }

  public getLoad(): void {
    this.apiService.load().subscribe((response) => {
      this.load = response;
    });
  }

  public getReviews(): void {
  }
}
