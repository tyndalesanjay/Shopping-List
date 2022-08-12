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
}
