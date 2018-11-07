import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leavetype } from '../modal/leavetype';


@Injectable({
  providedIn: 'root'
})
export class LeavetypeService {

  constructor(private http:HttpClient) { }
leaveTypeapi="http://localhost:8080/leavety";

public getLeaveType(){
  return this.http.get<Leavetype[]>(this.leaveTypeapi);
}
}

