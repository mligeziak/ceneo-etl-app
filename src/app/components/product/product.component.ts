import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from "file-saver";

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterContentInit {
  public extract;
  public transform;
  public load;
  public product;
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

  ngAfterContentInit() {
    this.getProduct();
  }

  public getProduct(): void {
    this.loading = true;
    this.apiService.getProduct(this.ceneoId).subscribe((response) => {
      this.product = response;
      this.loading = false;
    });
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

  public getETL(): void {
    this.loading = true;
    this.apiService.extract(this.ceneoId).subscribe((response) => {
      this.extract = response;
      this.apiService.transform().subscribe((response) => {
        this.transform = response;
        this.apiService.load().subscribe((response) => {
          this.load = response;
          this.loading = false;
        });
      });
    });
  }

  public getReviews(): void {
    this.loading = true;
    this.apiService.getReviews(this.ceneoId).subscribe((response) => {
      this.reviews = response;
      this.loading = false;
    });
  }

  public getCSV(): void {
    this.loading = true;
    this.apiService.getCSV(this.ceneoId).subscribe((blob) => {
      saveAs(blob, 'reviews.csv');
      this.loading = false;
    });
  }

  public dropDatabase(): void {
    this.loading = true;
    this.apiService.dropDatabse().subscribe((response) => {
      this.extract = null;
      this.transform = null;
      this.load = null
      this.product = null;
      this.reviews = null;
      this.loading = false;
      this.getProduct();
    });
  }
}
