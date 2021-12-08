import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

constructor(private http: HttpClient) { }
 getCategories(){
   return this.http.get("data/categories.json")
 }
}
