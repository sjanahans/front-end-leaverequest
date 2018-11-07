import { Component, OnInit } from '@angular/core';
import { Leavestatus } from '../modal/leavestatus';
import { LeavestatusService } from '../service/leavestatus.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  constructor(private leaveStatusService: LeavestatusService) { }
  leaveStatusList: Leavestatus[];

  ngOnInit() {
    this.getleaveStatus();
  }
  public getleaveStatus() {
    // alert("test1");
    this.leaveStatusService.viewleaveStatus().subscribe(data => {
      // alert("test2");
      this.leaveStatusList = data;
      console.log(data);
    })

  }
  }
