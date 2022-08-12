import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Items } from '../interfaces/items';
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Items>(this.baseUrl + 'shoppingList')
  }

  create(data: any): Observable<any> {
    return this.http.post<Items>(this.baseUrl + 'shopping_add', data)
  }

}
