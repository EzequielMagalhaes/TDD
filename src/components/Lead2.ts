//Second version of test class with the implementation of minimal assertiveness//
import { LeadEntity } from "./LeadEntity";

export class Lead2{
    public get(name:string): LeadEntity{
        let fake = new LeadEntity();
        fake.email = 'carlos';
        fake.email = 'teste@gmail.com';
        fake.phone = '(99) 9.1234-5678';

        return fake;
    }
    
    public getAll(): LeadEntity[]{
        let fake = new Array<LeadEntity>();
        fake.push(new LeadEntity());
        return fake;
    }

    public add(name:string, email:string, phone:string): boolean{
        return true;
    }

    public del(name:string): boolean{
        return true;
    }
}