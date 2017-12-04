import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Extract } from '../models/Extract';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor(public http: HttpClient) {
  }

  public extract(id: number): Observable<Extract> {
    return this.http.get<Extract>(environment.extractUrl + '/' + id);
  }
}
