import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public query: string = '';
  public results;

  constructor(public apiService: ApiService) {
  }

  public search() {
    this.apiService.search(this.query).subscribe((response) => {
      this.results = response;
    });
  }
}
