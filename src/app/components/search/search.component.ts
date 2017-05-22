import { Component, OnInit } from '@angular/core';
import { FacebService } from '../../services/faceb.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  termino:string = "";


  constructor( private _facebService:FacebService) { }

  ngOnInit() {

}


buscarCliente(){
  this._facebService.getClientes( this.termino )
  .subscribe();

  }


}
