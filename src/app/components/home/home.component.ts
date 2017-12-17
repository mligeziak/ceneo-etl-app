import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ResultComponent } from './result/result.component';
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [ResultComponent]
})
export class HomeComponent implements OnInit {
  public response: object;
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
        this.response = response;
      });
  }
}
