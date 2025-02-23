import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsComponent } from './commits.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CommitsComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    TableModule,
    ToastModule
  ]
  
})
export class CommitsModule { }
