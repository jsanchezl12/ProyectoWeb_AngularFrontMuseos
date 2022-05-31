import {Image} from './image';

export enum ArtworkType {
  PAINTING = "Painting",
  SCULPTURE = "Sculpture",
  OBJECT = "Object"
}

export class Artwork{
  constructor(public id:number, public name:string, public year:number, public description:string, public type:ArtworkType, public images:Image[]){ }
}
