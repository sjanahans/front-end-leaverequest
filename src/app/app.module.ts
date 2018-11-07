import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeaveRqComponent } from './leave-rq/leave-rq.component';
import { LeaverqService } from './service/leaverq.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeavestatusService } from './service/leavestatus.service';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { LeavetypeService } from './service/leavetype.service';

@NgModule({
  declarations: [
    AppComponent,
    LeaveRqComponent,
    LeaveStatusComponent,
    LeavetypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LeaverqService,LeavestatusService,LeavetypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
