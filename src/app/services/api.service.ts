import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor(public http: HttpClient) {
  }

  public extract(id: number): Observable<{ reviewsCount, pageCount, time }> {
    return this.http.get<{ reviewsCount, pageCount, time }>(environment.extractUrl + '/' + id);
  }

  public transform(): Observable<{ reviewsCount, time }> {
    return this.http.get<{ reviewsCount, time }>(environment.transformUrl);
  }

  public load(): Observable<{ reviewsCount }> {
    return this.http.get<{ reviewsCount }>(environment.loadUrl);
  }
}
