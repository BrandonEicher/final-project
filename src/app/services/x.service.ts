import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { X } from '../models/x';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XService {
  baseURL: string = "http://localhost:5087/api/x";
  tokenKey: string = "authToken";

  constructor(private http: HttpClient) { }

  getAllX(): Observable<X[]> {
    return this.http.get<X[]>(this.baseURL);
  }

  getX(xId: string): Observable<X> {
    return this.http.get<X>(`${this.baseURL}/${xId}`);
  }

  createX(newX: X) {
    let reqHeaders = {
        Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(this.baseURL, newX, { headers: reqHeaders });
  }

  updateX(updatedX: X): Observable<void> {
    let reqHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    });
    return this.http.put<void>(`${this.baseURL}/${updatedX.xId}`, updatedX, { headers: reqHeaders });
  }

  getUserPosts(username: string): Observable<X[]> {
    const token = localStorage.getItem(this.tokenKey);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<X[]>(`${this.baseURL}/user/${username}`, { headers });
  } 

  deleteX(xId: string): Observable<void> {
    let reqHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    });
    return this.http.delete<void>(`${this.baseURL}/${xId}`, { headers: reqHeaders });
  }
}