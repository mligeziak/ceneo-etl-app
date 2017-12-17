import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public results;
  public queryFormControl = new FormControl();

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.queryFormControl.valueChanges
      .debounceTime(400)
      .subscribe(value => this.search(value));
  }

  public search(value: string) {
    this.apiService.search(value)
      .subscribe((response) => {
        this.results = response;
      });
  }
}
