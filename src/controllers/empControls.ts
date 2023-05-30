import { Express , Request, Response } from "express";
import { Employee } from "../models/interfaces";
import { readDB, writeDB,readProf, writeProf, readPersonal, writePersonal } from "../middleware/DBlayer";

// <--------------- Start of Employee controllers ---------------------->

//Create Controller of empData
export const createEmployee = async (req : Request,res : Response) =>{

    try {
        let employees = await readDB();

        const emp_data :Employee = req.body;
        employees.push(emp_data);
        
        //sorting all the employees
        employees = employees.sort((a:{ emp_id: number; }, b:{ emp_id: number; }) => {
            if (a.emp_id < b.emp_id) {
                return -1;
            }
        });

        const newjson = JSON.stringify(employees);
        //writing the whole DB as newjson
        writeDB(newjson);

        res.status(200).send(employees);

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");
    }
    

};

//Read All Employees controller
export const readEmployee = async (req : Request,res : Response) =>{
    try {
        let employees = await readDB();
        res.status(200).send(employees); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");
    }
    
};

// Read One Employee controller
export const readOneEmp = async (req : Request, res : Response) =>{
    try {
        let employees = await readDB();
        const empId = +req.params.id;
        const oneEmp = await employees.find((el: { emp_id: number; }) => el.emp_id===empId);
        
        if(Number.isNaN(empId)){
            return res.status(422).send("Employee Id must be a number!");
        }

        if (!oneEmp){
            return res.status(404).send(`Employee with ID ${empId} not found !`);
        }

        res.status(200).send(oneEmp); 

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");
    }
}

//Update Controller of empData
export const updateEmployee = async (req : Request, res : Response) =>{

    try {
        let employees = await readDB();
        const empId:number = +req.params.id;
        const newEmp = employees.find((el: { emp_id: number;}) => el.emp_id===empId);
    
        let index = employees.indexOf(newEmp);
        Object.assign(newEmp,req.body);
        employees[index] = newEmp;
        const newjson = JSON.stringify(employees);

        //writing the updated DB
        writeDB(newjson);

        res.status(200).json(newEmp);
        console.log(`Employee ${empId} Updated !`)
        

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");

    }
    
 
 };

//delete Controller of empData
export const deleteEmployee = async (req : Request, res : Response)=>{
    try {
        
        let employees = await readDB();
        const empId:number = +req.params.id;
        const newEmp = employees.find((el: { emp_id: number; }) => el.emp_id===empId);
        
        if(Number.isNaN(empId)){
            return res.status(422).send("Employee Id must be a number!");
        }

        if(!newEmp){
            return res.status(404).send(`No Employee with empId ${empId}`);
        }

        let index = employees.indexOf(newEmp);
        employees.splice(index,1);
    
        const newjson = JSON.stringify(employees);
        //writing newjson in DB after deletion
        writeDB(newjson);

        res.status(200).json(employees);
        console.log(`Employee ${empId} Deleted !`);
        

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");    
    }
     
 };

// <--------------- End of Employee controllers ---------------------->

// <--------------- Start of profData controllers ---------------------->

//Create controller of profData
export const createProf = (req : Request,res : Response) =>{

    try {
        return new Promise(function(resolve,reject){
            let profData = readProf();

            const emp_data = req.body;
            profData.push(emp_data);
            
            //sorting all the profData
            profData = profData.sort((a:{ emp_id: number; }, b:{ emp_id: number; }) => {
                if (a.emp_id < b.emp_id) {
                    return -1;
                }
            });

            const newjson = JSON.stringify(profData);
            //writing the whole DB as newjson
            writeProf(newjson);

            if(newjson){
                resolve(profData);
            }else{
                reject(res.status(500).send('Something went wrong !'));
            }
            
        }).then(data => res.status(200).send(data));
        

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");
    }
    
};

//Read Professional Details
export const profDetails = (req: Request,res : Response) =>{

    try {
        return new Promise(function (resolve, reject){
            let profData = readProf();
            const empId:number = +req.params.id;
            const profEmp = profData.find((el: { emp_id: number; }) => el.emp_id===empId);
            
            if(Number.isNaN(empId)){
                return res.status(422).send("Employee Id must be a number!");
            }
            if (!profEmp){
                reject(res.status(404).send(`Employee with ID ${empId} not found !`));
            }
         
            resolve(profEmp);
            
        }).then(data => res.status(200).send(data));

    } catch (error) {
            console.log(error);
            res.status(500).send("Something went Wrong !!");
        
    }
    
}

//Read Professional Details of All Employees
export const allProfessional = (req : Request, res : Response)=>{

    try {
        return new Promise(function(resolve,reject){
            let allProfData = readProf();
            if(allProfData){
                resolve(allProfData);
            }else{
                reject(res.status(500).send("Something went Wrong !!"));
            }
        }).then(data=> res.status(200).send(data));      
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went Wrong !!");
    }
};

//Update controller of Professional Details
export const updateProf = (req : Request, res : Response) =>{

    try {
        return new Promise(function(resolve,reject){
            let profData = readProf();
            const empId:number = +req.params.id;
            const newEmp = profData.find((el: { emp_id: number;}) => el.emp_id===empId);
        
            let index = profData.indexOf(newEmp);
            Object.assign(newEmp,req.body);
            profData[index] = newEmp;
            const newjson = JSON.stringify(profData);

            writeProf(newjson)

            if(newjson){
                resolve(profData);
            }else{
                reject(res.status(500).send("Something went Wrong !!"));
            }
        }).then(data=>{
            const empId:number = +req.params.id;
            res.status(200).send(data);
            console.log(`Employee Professional Details of ID ${empId} Updated !`)
        });
        

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");

    }
    
};

//Delete Controller of Professional Details
export const deleteProf = (req : Request, res : Response)=>{
    try {
        
       return new Promise(function(resolve,reject){
            let profData = readProf();
            const empId:number = +req.params.id;
            const newEmp = profData.find((el: { emp_id: number; }) => el.emp_id===empId);
            
            if(Number.isNaN(empId)){
                return res.status(422).send("Employee Id must be a number!");
            }

            if(!newEmp){
                return res.status(404).send(`No Professional details of Employee with empId ${empId} found !`);
            }

            let index = profData.indexOf(newEmp);
            profData.splice(index,1);
        
            const newjson = JSON.stringify(profData);
            //writing newjson in DB after deletion
            writeProf(newjson);

            if(newjson){
                resolve(profData);
            }else{
                reject(res.status(500).send("Something went Wrong !!"));
            }
        }).then(data=>{
                const empId:number = +req.params.id;
                res.status(200).send(data);
                console.log(`Employee Professional Details of ID ${empId} Deleted !`);
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");    
    }
     
 };


// <--------------- End of profData controllers ---------------------------->

// <--------------- Start of personalData controllers ---------------------->

//Create controller of personalData
export const createPersonal = (req : Request,res : Response) =>{

    try {
        return new Promise(function(resolve,reject){
            let personalData = readPersonal();

            const emp_data = req.body;
            personalData.push(emp_data);
            
            //sorting all the personalData
            personalData = personalData.sort((a:{ emp_id: number; }, b:{ emp_id: number; }) => {
                if (a.emp_id < b.emp_id) {
                    return -1;
                }
            });

            const newjson = JSON.stringify(personalData);
            //writing the whole DB as newjson
            writePersonal(newjson);
            if(newjson){
                resolve(personalData);
            }else{
                reject(res.status(500).send('Something went wrong !'));
            }
            
        }).then(data => res.status(200).send(data));

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");
    }
    
};

//Read Personal Details of All Employees
export const allPersonal = (req : Request, res : Response)=>{
    try {
        return new Promise(function(resolve,reject){
            let allPersonalData = readPersonal();
            if(allPersonalData){
                resolve(allPersonalData);
            }else{
                reject(res.status(500).send("Something went Wrong !!"));
            }
        }).then(data=> res.status(200).send(data));      
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went Wrong !!");
    }
};

//Read Personal Details
export const personalDetails = (req : Request, res : Response)=>{
    try {
        return new Promise(function (resolve, reject){
            let personalData = readPersonal();
            const empId:number = +req.params.id;
            const personEmp = personalData.find((el: { emp_id: number; }) => el.emp_id===empId);
            
            if(Number.isNaN(empId)){
                return res.status(422).send("Employee Id must be a number!");
            }

            if (!personEmp){
                reject(res.status(404).send(`Employee with ID ${empId} not found !`));
            }   
                
            resolve(personEmp); 
                
        }).then(data => res.status(200).send(data));

    } catch (error) {
            console.log(error);
            res.status(500).send("Something went Wrong !!");
        
    }
};

//Update Controller of Personal Details
export const updatePersonal = (req : Request, res : Response) =>{

    try {
        return new Promise(function(resolve,reject){
            let personalData = readPersonal();
            const empId:number = +req.params.id;
            const newEmp = personalData.find((el: { emp_id: number;}) => el.emp_id===empId);
        
            let index = personalData.indexOf(newEmp);
            Object.assign(newEmp,req.body);
            personalData[index] = newEmp;
            const newjson = JSON.stringify(personalData);
            //writing in DB after updation
            writePersonal(newjson);

            if(newjson){
                resolve(personalData);
            }else{
                reject(res.status(500).send("Something went Wrong !!"));
            }
        }).then(data=>{
            const empId:number = +req.params.id;
            res.status(200).send(data);
            console.log(`Employee Personal Details of ID ${empId} Updated !`)
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");

    }
};

//Delete controller of Personal details
export const deletePersonal = (req : Request, res : Response)=>{
    try {
        
       return new Promise(function(resolve,reject){
            let personalData = readPersonal();
            const empId:number = +req.params.id;
            const newEmp = personalData.find((el: { emp_id: number; }) => el.emp_id===empId);
            
            if(Number.isNaN(empId)){
                return res.status(422).send("Employee Id must be a number!");
            }
            
            if(!newEmp){
                return res.status(404).send(`No Personal details of Employee with empId ${empId} found !`);
            }

            let index = personalData.indexOf(newEmp);
            personalData.splice(index,1);
        
            const newjson = JSON.stringify(personalData);
            //writing newjson in DB after deletion
            writePersonal(newjson);

            if(newjson){
                resolve(personalData);
            }else{
                reject(res.status(500).send("Something went Wrong !!"));
            }
        }).then(data=>{    
                const empId:number = +req.params.id;
                res.status(200).send(data);
                console.log(`Employee Personal Details of ID ${empId} Deleted !`);
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong !!");    
    }
     
 };

// <--------------- End of personalData controllers ---------------------->

