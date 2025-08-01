import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EmployeeComponent } from './employee/employee.component';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

// Pipe
import { CapitalizePipe } from './pipes/capitalize.pipe';

// Directive
import { HighlightDirective } from './directives/highlight.directive';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [
  DashboardComponent,
  EmployeeComponent,
  CapitalizePipe,
  HighlightDirective,
  ItemCardComponent
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule
  ]
})
export class DashboardModule { }
