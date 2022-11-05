import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit {

  public numPediatrico:any;
  public numMediana:any;
  public numGeriatico:any;


  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  public consultaUno(){
    this.numPediatrico = 'Hizo click';
  }

}
