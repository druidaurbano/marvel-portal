import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  apiMarvelUrl = 'https://gateway.marvel.com:443/v1/public';
  ts = 1;
  publicKey = 'dbcb35bc44466328d022b755596ef8be';
  privateKey = 'bf57ddc3fa543723cd9f18f0c9257716d22fb269';
  hash: any = '';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any[]> {
    const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
    console.log('show me the encrypted hash', this.hash);
    /* let comics = this.http.get<any>(`${this.apiMarvelUrl}/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`); */
    return this.http.get<any>(`${this.apiMarvelUrl}/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`)
  }

  getComics(): Observable<any[]> {
    const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
    console.log('show me the encrypted hash', this.hash);
    return this.http.get<any>(`${this.apiMarvelUrl}/comics?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`)
  }

  getCreators(): Observable<any[]> {
    const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
    console.log('show me the encrypted hash', this.hash);
    return this.http.get<any>(`${this.apiMarvelUrl}/creators?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`)
  }

  getEvents(): Observable<any[]> {
    const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
    console.log('show me the encrypted hash', this.hash);
    return this.http.get<any>(`${this.apiMarvelUrl}/events?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`)
  }


}
