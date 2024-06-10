import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:5087/api/auth";

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    return this.http.post(`${this.baseURL}/register`, newUser);
  }

  login(username: string, password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/login`,  { params: queryParams, responseType: 'text' })
      .pipe(tap((response: any) => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('authToken', response);
        }
      }));
  }
  
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }

  getUserProfile(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/profile/${username}`);
  }
}