import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    ReposComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    InputTextModule,
    ToastModule
  ]
})
export class ReposModule { }
