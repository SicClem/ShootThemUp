import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'https://hackathon-wild-hackoween.herokuapp.com/monsters';

  constructor(private http: HttpClient) {}

  getZombies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
