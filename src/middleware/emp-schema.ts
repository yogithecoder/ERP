import { Express, Request, Response, NextFunction, raw} from "express"
import * as fs from 'fs';
import { Employee } from "../models/interfaces";
import { readDB } from "./DBlayer";
let employees = readDB();
const Joi = require('joi')
    .extend(require('@joi/date'));

export const validateEmp = (employee : Employee)=>{
    const empSchema = Joi.object({
        emp_id : Joi.number().required(),
        emp_name : Joi.string().max(100).required(),
        emp_dob : Joi.date().format('DD-MM-YYYY').raw().required(),
        emp_skills : Joi.array().items(Joi.string()),
        emp_doj : Joi.date().format('DD-MM-YYYY').raw().required(),
        emp_level : Joi.string().max(100).required(),
        supervisor : Joi.string().max(100).required()

    }); 

    return empSchema.validate(employee);
}