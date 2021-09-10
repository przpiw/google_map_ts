import faker from 'faker'
import { Mappable } from './CustomMap';

export class User implements Mappable{
  constructor(){
    this.name = faker.name.firstName();
    this.location ={
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }
  color: string='red'
  name:string;
  location:{
    lat:number;
    lng:number;
  };
  markerContent():string{
    return`<div><h1> ${this.name}<h1></div>`
  }
 

}

