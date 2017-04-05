import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-header',
  template: `
   <tr>
    <th *ngFor="let head of tableheader">{{head}}</th>
   </tr>
  `
})

export class TableHeaderComponent {
  @Input() tableheader :[string]
}