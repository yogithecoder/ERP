import { Express, Request, Response, NextFunction} from "express"
import { Employee } from "../models/interfaces";
import { validateEmp } from "./emp-schema";
import { readDB, readPersonal, readProf } from "./DBlayer";



export const empValidate = async (req : Request,res : Response, next: NextFunction)=>{
    let employees = await readDB();
    const emp_data :Employee = req.body;

    //Joi Validation
    // const value = await validateEmp(emp_data);
    // if(value.error){
    //     res.send(value.error.details[0].message);
    // }else{
    //     next();
    // }
    
        var count : number = 0;
        var feedback : string = "";
        const oldEmp = await employees.find((el: { emp_id: number;}) => el.emp_id===emp_data.emp_id);

        //validation start

        if(Object.keys(emp_data).length === 0) {
            return res.status(422).send('Employee Data to be inserted is missing');
        }
        
        if(!emp_data.emp_id) {
            count++; 
            feedback += "Employee ID is missing !\n";

        }else if(typeof oldEmp != "undefined"){
            
            return res.status(409).send(`Employee with ID ${oldEmp.emp_id} exists`);

        }else if(typeof emp_data.emp_id != "number") {
            count++;
            feedback += "emp_id should be a number\n";
        }
        
        if(!emp_data.emp_name){ 
            count++;
            feedback += "Employee Name is missing !\n";
        }else if(typeof emp_data.emp_name != "string"){ 
            count++;
            feedback += "emp_name should be a string\n";
        }

        if(!emp_data.emp_dob){
            count++;
            feedback += "Employee DoB is missing !\n"; 
        }
        // if(typeof emp_data.emp_dob != 'function') count++; res.send(`${typeof emp_data.emp_dob}`);

        if(!emp_data.emp_skills){
            count++;
            feedback += "Employee Skills are missing !\n";
        }else if(typeof emp_data.emp_skills != "object"){
            count++;
            feedback += "emp_skills is not an array of string\n"; 
        }

        if(!emp_data.emp_doj){
            count++;
            feedback += "Employee DoJ is missing !\n";
        }// if(typeof emp_data.emp_doj != 'function') count++; res.send(`${typeof emp_data.emp_dob}`);

        if(!emp_data.emp_level){
            count++;
            feedback += "Employee Level is missing !\n";
        }else if(typeof emp_data.emp_level != "string"){
            count++;
            feedback += "emp_level should be a string\n"; 
        }    
        if(!emp_data.supervisor){
            count++;
            feedback += "Supervisor is missing !\n";
        }else if(typeof emp_data.supervisor != "string"){
            count++;
            feedback += "supervisor should be a string\n";
        }

        if(count > 0){
            return res.status(422).send(feedback);
        }else{
            next();
        }    
    
}

export const profValidate = async(req:Request, res:Response, next : NextFunction)=>{
    
    const emp_data = req.body;
    let profData = readProf();

    const oldEmp = await profData.find((el: { emp_id: number;}) => el.emp_id===emp_data.emp_id);
    //validation start

    if(Object.keys(emp_data).length === 0) {
        return res.status(422).send('Employee Data to be inserted is missing');
    }
           
    if (!emp_data.emp_id){
        return res.status(422).send("emp_id missing in Professional Details\n")
    }else if(typeof oldEmp != "undefined"){
            
        return res.status(409).send(`Employee with ID ${oldEmp.emp_id} exists in Professional Details`);

    }else if(typeof emp_data.emp_id != "number"){
        return res.status(422).send("emp_id should be a number in Professional Details\n")
    }
    
    if(!emp_data.emp_skills){
        return res.status(422).send("emp_skills is missing from Professional Details");
    }
    else if (typeof emp_data.emp_skills != "object"){
        return res.status(422).send("emp_skills should be an array of string in Professional Details");
    }     
    
    if(!emp_data.emp_projects){
        return res.status(422).send("emp_projects is missing from Professional Details");
    }
    else if (typeof emp_data.emp_projects != "object"){
        return res.status(422).send("emp_projects should be an array of string in Professional Details");
    }
    
    if(!emp_data.past_experience){
        return res.status(422).send("past_experience is missing from Professional Details");
    }
    else if (typeof emp_data.past_experience != "object"){
        return res.status(422).send("past_experience should be an array of string in Professional Details");
    }
    
    if(!emp_data.certifications){
        return res.status(422).send("certifications is missing from Professional Details");
    }
    else if (typeof emp_data.certifications != "object"){
        return res.status(422).send("certifications should be an array of string in Professional Details");
    }
    next();
};

export const personalValidate = async (req : Request, res: Response, next : NextFunction)=>{
    const emp_data = req.body;
    let personalData = readPersonal();

    const oldEmp = await personalData.find((el: { emp_id: number;}) => el.emp_id===emp_data.emp_id);
    //validation start

    if(Object.keys(emp_data).length === 0) {
        return res.status(422).send('Employee Data to be inserted is missing');
    }
           
    if (!emp_data.emp_id){
        return res.status(422).send("emp_id missing in Personal Details\n")
    
    }else if(typeof oldEmp != "undefined"){       
        return res.status(409).send(`Employee with ID ${oldEmp.emp_id} exists in Personal Details`);

    }else if(typeof emp_data.emp_id != "number"){
        return res.status(422).send("emp_id should be a number in Personal Details\n")
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emp_data.emp_email){
        return res.status(422).send("emp_email is missing from Personal Details\n")
    }else if(typeof emp_data.emp_email != "string"){
        return res.status(422).send("emp_email should be a string in Personal Details\n")
    }else if(!emp_data.emp_email.match(validRegex)){
        return res.status(422).send("emp_email is not valid\n")
    }

    if(!emp_data.emp_address){
        return res.status(422).send("emp_address is missing from Personal Details\n")
    }
    else if(typeof emp_data.emp_address != "string"){
        return res.status(422).send("emp_address should be a string in Personal Details\n")
    }
    if(!emp_data.emp_phone){
        return res.status(422).send("emp_phone is missing from Personal Details\n");
    }else if(typeof emp_data.emp_phone != "number"){
        return res.status(422).send("emp_phone should be a number in Personal Details\n");    
    }else if(Object.keys(emp_data.emp_phone.toString()).length != 10){
        return res.status(422).send("emp_phone should have 10 digits in Personal Details\n");
    }

    next();
};