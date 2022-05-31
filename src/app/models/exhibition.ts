import {Artwork} from './artwork';
import { Sponsor } from "./sponsor";

export class Exhibition{
  constructor(public id:number,
    public name:string,
    public description:string,
    public sponsor:Sponsor){
    }
}
