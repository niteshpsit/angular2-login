import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'table-data',
  template: `
  <tr *ngFor="let row of tabledata">
    <td *ngFor="let value of values">{{row[value]}}</td>
  </tr>
  `
})

export class TableDataComponent {
  @Input() tabledata :[object]
  @Input() values:[string]
}