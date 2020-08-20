import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  getDataByID(userId) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" +userId )
  }
}
