import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({ providedIn: 'root' })
export class GameService {
  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getGame(id: string): Observable<{ cards: Card[] }> {
    return this.http.get<{ cards: Card[] }>(`${this.api}/games/${id}`);
  }
}
