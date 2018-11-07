import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leaverq } from '../modal/leaverq';

@Injectable({
  providedIn: 'root'
})
export class LeaverqService {

  constructor( private http:HttpClient) { }

  leaverqapi="http://localhost:8080/leaverq";

  public viewleaverq(){
    return this.http.get<Leaverq[]>(this.leaverqapi);
  }
}
