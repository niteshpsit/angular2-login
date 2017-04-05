import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }     from './login.component';
import { HomeComponent }      from './home.component';
import { TableComponent } from './table/table.component';
import { DisplayTableComponent } from './table/displaytable.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: DisplayTableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}