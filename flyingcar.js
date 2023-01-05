import {Car} from "./car.js";
export class Flyingcar extends Car 
{
    constructor(model, year) {
        super(model,year);
        this.flyingOption=true;
      }
      toString()
    {
        return super.toString()+" THIS CAR CAN FLY";
    } 

}

