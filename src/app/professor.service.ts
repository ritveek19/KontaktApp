import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from "./posts";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private url1: string = '/assets/demo/questions.json';
  private url2: string = '';

  constructor( private http: HttpClient) { }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.url1);
  }

  getAnswers() : Observable<any> {
    return this.http.get(this.url2);
  }
}
