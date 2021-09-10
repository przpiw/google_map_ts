import faker from 'faker'
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  constructor(){
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase();
    this.location={
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())

    }
  }
  color: string='red'
  name:string;
  catchPhrase:string;
  location:{
    lat:number;
    lng:number
  }
  markerContent():string{
    return`<div><h1> ${this.name}<h1></div>`
  }
}