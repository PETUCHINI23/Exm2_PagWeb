import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../services/employee.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() employee!: Employee;
  @Output() edit = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.employee);
  }

  onDelete() {
    this.delete.emit(this.employee.id);
  }
}
