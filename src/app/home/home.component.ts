import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Extract } from '../models/Extract';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public extract: Extract;

  public id: number = 50851295;

  constructor(public apiService: ApiService) {
  }

  public getExtract(): void {
    this.apiService.extract(this.id).subscribe((response: Extract) => {
      this.extract = response;
    });
  }

  public transform(): void {

  }

  public load(): void {

  }
}
