import { Component, OnInit } from '@angular/core';
import { LeaverqService } from '../service/leaverq.service';
import { Leaverq } from '../modal/leaverq';
import { LeavestatusService } from '../service/leavestatus.service';
import { Leavestatus } from '../modal/leavestatus';
import { LeavetypeService } from '../service/leavetype.service';
import { Leavetype } from '../modal/leavetype';


@Component({
  selector: 'app-leave-rq',
  templateUrl: './leave-rq.component.html',
  styleUrls: ['./leave-rq.component.css']
})
export class LeaveRqComponent implements OnInit {

  constructor(private leaverqService: LeaverqService, private leaveStatusService: LeavestatusService,private leaveTypeService:LeavetypeService){ }
  leaverqList: Leaverq[];
  leaveStatusList: Leavestatus[];
  leaveTypeList:Leavetype[];
  

  ngOnInit() {
    this.viewLeaverq();
    this.getleaveStatus();
    this.getleaveType();
  }
  public viewLeaverq(){
    this.leaverqService.viewleaverq().subscribe(data =>{
      this.leaverqList =data;
      console.log(data);
    })
  }

  public getleaveStatus() {
    this.leaveStatusService.viewleaveStatus().subscribe(data => {
      this.leaveStatusList = data;
      console.log(data);
    })

  }
  public getleaveType() {
    this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypeList = data;
      console.log(data);
    })
  }

}
