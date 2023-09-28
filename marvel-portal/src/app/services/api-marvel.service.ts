import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  apiMarvelUrl = 'https://gateway.marvel.com:443/v1/public';
  apiMarvelClient = 'https://developer.marvel.com';
  ts = 1;
  publicKey = 'dbcb35bc44466328d022b755596ef8be';
  privateKey = 'bf57ddc3fa543723cd9f18f0c9257716d22fb269';
  hash: any = '';
  baseUrl:string = 'https://gateway.marvel.com:443/v1/public/comics?limit=10&ts=1&apikey=dbcb35bc44466328d022b755596ef8be&hash=1391D8E3D2E3BF9CDC4D16E7FF591ED8';

  constructor(
    private http: HttpClient
  ) {
    //this.hash = md5(this.ts+this.privateKey+this.publicKey);
    /* const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
    console.log('show me the encrypted hash', this.hash); */
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/posts`)
  }

  getComics(): Observable<any[]> {
    /* const md5 = new Md5();
    this.hash = md5.appendStr(this.publicKey).end();
    console.log('show me the encrypted hash', this.hash); */
    const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
    console.log('show me the encrypted hash', this.hash);
    return this.http.get<any>(`${this.apiMarvelUrl}/comics?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`)
    //return this.http.get<any>(this.baseUrl);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}
