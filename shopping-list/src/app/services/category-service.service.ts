import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private baseUrl = "http://localhost:3000/category/"

  constructor(private http: HttpClient) { }

  getCat(): Observable<Categories> {
    return this.http.get<Categories>(this.baseUrl)
  }

  getCatList(id: any): Observable<any> {
    return this.http.get<Categories>(`${this.baseUrl + 'catList'}/${id}`)
  }

  createCate(data: any): Observable<Categories> {
    return this.http.post<Categories>(`${this.baseUrl + 'createCate'}`, data)
  }

  getCatId(id: any): Observable<Categories> {
    return this.http.get<Categories>(`${this.baseUrl + 'getById'}/${id}`)
  }

  updateCate(id: any, data: any): Observable<any> {
    return this.http.put<Categories>(`${this.baseUrl + 'updateCate'}/${id}`, data)
  }

  deleteItem(id: any): Observable<Categories> {
    return this.http.delete<Categories>(`${this.baseUrl + 'delete'}/${id}`)
  }
}
