import { Exhibition } from "./exhibition";


export class Sponsor{
    constructor(public id:number, 
        public name:string, 
        public description:string, 
        public website:string,
        public exhibition:Exhibition){ }
}
