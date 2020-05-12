import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import{ MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
  ],
  exports:[

  ]
})
export class DefaultModule { }
