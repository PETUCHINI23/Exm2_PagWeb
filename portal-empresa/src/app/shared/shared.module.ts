import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../dashboard/pipes/capitalize.pipe';



@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
