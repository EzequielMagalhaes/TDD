//Final version of test class//
import { LeadEntity } from "./LeadEntity";
const db = new Array<LeadEntity>();

export class LeadF{
    public get(email:string): LeadEntity{
        let result = new LeadEntity();

        db.forEach(f=>{
            if(f.email == email){
                return result = f;
            }
        });
        return result;
    }
    
    public getAll(): LeadEntity[]{
        return db;
    }

    public add(name:string, email:string, phone:string): boolean{
        let lead = new LeadEntity;
        lead.name = name;
        lead.email = email;
        lead.phone = phone;
        db.push(lead);

        return true;
    }

    public del(email:string): boolean{
        let result = false;
        db.forEach(f=>{
            if(f.email==email){
                db.pop();
                result = true;
            }
        })
        return result;
    }
}