import { Component, OnInit } from '@angular/core';
import { lectura } from 'src/app/models/lectura';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit {

  public pacientes = [];
  public habitaciones = [];
  public generos = [];
  public edades = [];
  public edades2 = [];
  public habitaciones_top = [];
  public habitaciones_less = [];
  public timestampx = [];


  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  public consultaUno(){
    this._httpService.postLectura(1,1).subscribe(
      res=>{
        let lectura = <lectura> res;
        if(lectura.status = true){
          this.pacientes = lectura.message;
        }
      })
  }

  public consultaDos(){
    this._httpService.postLectura(1,2).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        //console.log(lectura.message);
        this.habitaciones = lectura.message;
      }
    })
  }

  public consultaTres(){
    this._httpService.postLectura(1,3).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        this.generos = lectura.message;
      }
    })
  }

  public consultaCuatro(){
    this._httpService.postLectura(1,4).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        //console.log(lectura);
        this.edades = lectura.message;
      }
    })
  }

  public consultaCinco(){
    this._httpService.postLectura(1,5).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        //console.log(lectura);
        this.edades2 = lectura.message;
      }
    })
  }

  public consultaSeis(){
    this._httpService.postLectura(1,6).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        //console.log(lectura);
        this.habitaciones_top = lectura.message;
      }
    })
  }

  public consultaSiete(){
    this._httpService.postLectura(1,7).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        //console.log(lectura);
        this.habitaciones_less = lectura.message;
      }
    })
  }

  public consultaOcho(){
    this._httpService.postLectura(1,8).subscribe(res=>{
      let lectura = <lectura> res;
      if(lectura.status = true){
        //console.log(lectura);
        this.timestampx = lectura.message;
      }
    })
  }

}
