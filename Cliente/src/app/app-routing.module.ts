import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MysqlComponent } from './Components/mysql/mysql.component';

const routes: Routes = [
  {
    path:'',
    component: MysqlComponent, pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
