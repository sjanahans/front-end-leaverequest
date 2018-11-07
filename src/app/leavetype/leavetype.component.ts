import { Component, OnInit } from '@angular/core';
import { Leavetype } from '../modal/leavetype';
import { LeavetypeService } from '../service/leavetype.service';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.css']
})
export class LeavetypeComponent implements OnInit {

  constructor(private leaveTypeService: LeavetypeService) { }
  leaveTypeList: Leavetype[];

  ngOnInit() {
    this.getleaveType();
  }
  public getleaveType() {
    this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypeList = data;
      console.log(data);
    })
  }

}
