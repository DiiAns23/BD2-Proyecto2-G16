import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { MysqlComponent } from './Components/mysql/mysql.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MongodbComponent } from './Components/mongodb/mongodb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MysqlComponent,
    MongodbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
