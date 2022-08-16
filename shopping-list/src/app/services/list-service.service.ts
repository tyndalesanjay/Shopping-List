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

  getItemById(id: any): Observable<any> {
    return this.http.get<Items>(`${this.baseUrl + 'listItem'}/${id}`, id)
  }

  create(data: any): Observable<any> {
    return this.http.post<Items>(this.baseUrl + 'shopping_add', data)
  }

  update(data: Items, id: any): Observable<any>{
    return this.http.patch<Items>(`${this.baseUrl + 'update_item'}/${id}`, data)
  }

  deleteItem(id: any): Observable<any> {
    return this.http.delete<Items>(`${this.baseUrl + 'delete'}/${id}`)
  }

}
