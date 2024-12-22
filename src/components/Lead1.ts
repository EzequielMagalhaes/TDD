//First version of test class with the minimal failure implementation//
import { LeadEntity } from "./LeadEntity";

export class Lead1{
    public get(name:string): LeadEntity{
        throw "Não implementado";
    }
    
    public getAll(): LeadEntity[]{
        throw "Não implementado";
    }

    public add(name:string, email:string, phone:string): boolean{
        throw "Não implementado";
    }

    public del(name:string): boolean{
        throw "Não implementado";
    }
}