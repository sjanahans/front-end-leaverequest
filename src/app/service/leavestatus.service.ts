import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Leavestatus } from '../modal/leavestatus';


@Injectable({
  providedIn: 'root'
})
export class LeavestatusService {

  constructor( private http:HttpClient) { }
  leaveStatusapi="http://localhost:8080/status";

  public viewleaveStatus(){
    return this.http.get<Leavestatus[]>(this.leaveStatusapi);
  }
  
}
