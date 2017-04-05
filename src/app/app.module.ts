import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }       from './app.component';
import { LoginComponent }     from './login.component';
import { HomeComponent }      from './home.component';
import { TableComponent } from './table/table.component';
import { TableHeaderComponent } from './table/tableHeader.component';
import { TableDataComponent } from './table/tableData.component';
import { DisplayTableComponent } from './table/displaytable.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TableComponent,
    TableHeaderComponent,
    TableDataComponent,
    DisplayTableComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
