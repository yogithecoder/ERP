import { Express, Request, Response, NextFunction} from "express"
import { readDB, readPersonal, readProf } from "./DBlayer";

let employees = readDB();


export const updateValidate = (req :Request, res :Response, next : NextFunction)=>{
        const emp_data = req.body;
        var count:number = 0;
    
        let employees = readDB();
        const empId:number = +req.params.id;
        const newEmp = employees.find((el: { emp_id: number;}) => el.emp_id===empId);
    
        if(!newEmp){
            return res.status(404).send(`No Employee with empId ${empId}`);
        }

        if(Object.keys(emp_data).length === 0){
            return res.status(422).send('Employee data to be updated is missing !');
        }
        if(emp_data.emp_id && typeof emp_data.emp_id != "number"){
            return res.status(422).send("emp_id should be a number\n")
        }
        
        if(emp_data.emp_name && typeof emp_data.emp_name != "string"){
            return res.status(422).send("emp_name should be a string\n")
        }
        
        if (emp_data.emp_skills && typeof emp_data.emp_skills != "object"){
            return res.status(422).send("emp_skills should be an array of string");
        }     
        
        if(emp_data.emp_level && typeof emp_data.emp_level != "string"){
            return res.status(422).send("emp_level should be a string");
        }

        if(emp_data.supervisor && typeof emp_data.supervisor != "string"){
            return res.status(422).send("supervisor should be a string");
        }
        next();
        
};

export const updateProfValidate = (req :Request, res :Response, next : NextFunction)=>{
    const emp_data = req.body;
    var count:number = 0;

    let profData = readProf();
    const empId:number = +req.params.id;
    const newEmp = profData.find((el: { emp_id: number;}) => el.emp_id===empId);

    if(!newEmp){
        return res.status(404).send(`No Professional Details of Employee with empId ${empId} found`);
    }
    
    if(Object.keys(emp_data).length === 0){
        return res.status(422).send('Employee data to be updated is missing !');
    }

    if(emp_data.emp_id && typeof emp_data.emp_id != "number"){
        return res.status(422).send("emp_id should be a number in Professional Details\n")
    }
    
    
    if (emp_data.emp_skills && typeof emp_data.emp_skills != "object"){
        return res.status(422).send("emp_skills should be an array of string in Professional Details");
    }     
    
    if (emp_data.emp_projects && typeof emp_data.emp_projects != "object"){
        return res.status(422).send("emp_projects should be an array of string in Professional Details");
    } 

    if (emp_data.past_experience && typeof emp_data.past_experience != "object"){
        return res.status(422).send("past_experience should be an array of string in Professional Details");
    } 

    if (emp_data.certifications && typeof emp_data.certifications != "object"){
        return res.status(422).send("certifications should be an array of string in Professional Details");
    } 
    next();
    
};

export const updatePersonalValidate = (req :Request, res :Response, next : NextFunction)=>{
    const emp_data = req.body;
    var count:number = 0;

    let personalData = readPersonal();
    const empId:number = +req.params.id;
    const newEmp = personalData.find((el: { emp_id: number;}) => el.emp_id===empId);

    if(!newEmp){
        return res.status(404).send(`No Professional Details of Employee with empId ${empId} found`);
    }

    if(Object.keys(emp_data).length === 0){
        return res.status(422).send('Employee data to be updated is missing !');
    }
    
    if(emp_data.emp_id && typeof emp_data.emp_id != "number"){
        return res.status(422).send("emp_id should be a number in Personal Details\n")
    }
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emp_data.emp_email && typeof emp_data.emp_email != "string"){
        return res.status(422).send("emp_email should be a string in Personal Details\n")
    }else if(emp_data.emp_email && !emp_data.emp_email.match(validRegex)){
        return res.status(422).send("emp_email is not valid\n")
    }
    
    if(emp_data.emp_address && typeof emp_data.emp_address != "string"){
        return res.status(422).send("emp_address should be a string in Personal Details\n")
    }

    if(emp_data.emp_phone && typeof emp_data.emp_phone != "number"){
            return res.status(422).send("emp_phone should be a number in Personal Details\n");    
    }else if(emp_data.emp_phone && Object.keys(emp_data.emp_phone.toString()).length != 10){
        return res.status(422).send("emp_phone should have 10 digits in Personal Details\n");
    }
    
    next();
};