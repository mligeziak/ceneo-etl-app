import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public extract;
  public transform;
  public load;

  public id: number = 50851295;

  constructor(public apiService: ApiService) {
  }

  public getExtract(): void {
    this.apiService.extract(this.id).subscribe((response) => {
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
