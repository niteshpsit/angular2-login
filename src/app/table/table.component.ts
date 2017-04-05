import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-table',
  template: `
   <h3>Table</h3>
   <table style="width:100%">
   <table-header [tableheader]="headers"></table-header>
   <table-data [tabledata]="data" [values]="headers"></table-data>
   </table>
  `
})

export class TableComponent {
  @Input() data : [object]
  @Input() headers : [string] 
}