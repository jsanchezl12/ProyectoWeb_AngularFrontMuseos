import{Movement} from "./movement.js";
import { Artwork } from "./artwork";

export class Artist{
    constructor(public id:number, public name:string, public birthplace:string, public birthdate:string,
        public image:string, public movements:Movement[], public artworks:Artwork[]){ }
}
