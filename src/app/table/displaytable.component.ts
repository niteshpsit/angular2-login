import { Component, Input } from '@angular/core';

@Component({
  selector: 'display-table',
  template: `
   <h3>Table</h3>
   <my-table [data]="tabledata" [headers]="tableheader"></my-table>
  `
})

export class DisplayTableComponent {
    tabledata = [{name:"nitesh",age:5},{name:"rahul",age:45}]
    tableheader = ["name","age"]
}