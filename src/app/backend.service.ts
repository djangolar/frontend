import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}); 

  constructor(private http: HttpClient) { }
  getAllPosts(): Observable<any>{
    return this.http.get(this.baseurl + '/posts/',
    {headers: this.httpHeaders})
  }
}
