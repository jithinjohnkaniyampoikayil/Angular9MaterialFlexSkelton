import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/post/post.component';
import {ExpenditureComponent} from 'src/app/modules/expenditure/expenditure.component';
import { SharedModule } from 'src/app/shared/shared.module';
import{ MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent,
    ExpenditureComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  exports:[

  ]
})
export class DefaultModule { }
