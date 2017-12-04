import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Extract } from '../models/extract';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor(public http: HttpClient) {
  }

  public extract(id: number): Observable<Extract> {
    return this.http.get<Extract>(environment.extractUrl + '/' + id);
  }

  // NOTE: Generic type of Observable<...> is temporary. To future change.
  public transform(): Observable<{ reviewsCount, time }> {
    return this.http.get<{ reviewsCount, time }>(environment.transformUrl);
  }

  public load(): Observable<{ reviewsCount }> {
    return this.http.get<{ reviewsCount }>(environment.loadUrl);
  }
}
