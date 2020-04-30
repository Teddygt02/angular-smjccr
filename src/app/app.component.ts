import { Component } from '@angular/core';
import {GlobServiceService} from './glob-service.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data : String;
  dataskrng : String='';
  constructor(public varglobe: GlobServiceService){
    this.data=this.varglobe.getData();
  }
  ubah(){
    this.varglobe.setData(this.dataskrng);
    this.data = this.varglobe.getData();
  }
}

