import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongodbComponent } from './Components/mongodb/mongodb.component';
import { MysqlComponent } from './Components/mysql/mysql.component';

const routes: Routes = [
  {
    path:'',
    component: MysqlComponent, pathMatch: 'full'
  },
  {
    path:'mongoDB',
    component: MongodbComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
