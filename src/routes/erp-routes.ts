import express, {Express, Request, Response } from "express";
export const router = express.Router();
import { allPersonal, allProfessional, createPersonal, 
        createProf, deletePersonal, deleteProf, personalDetails, 
        profDetails, readEmployee, updatePersonal, updateProf } from "../controllers/empControls";
import { createEmployee } from "../controllers/empControls";
import { deleteEmployee } from "../controllers/empControls";
import { updateEmployee } from "../controllers/empControls";
import { readOneEmp } from "../controllers/empControls";
import { empValidate, personalValidate, profValidate } from "../middleware/createValidation";
import { updatePersonalValidate, updateProfValidate, updateValidate } from "../middleware/updateValidation";

router.get('/', readEmployee);
router.get('/:id/',readOneEmp);
router.post('/',empValidate, createEmployee);
router.delete('/:id/', deleteEmployee);
router.patch('/:id/', updateValidate, updateEmployee);
router.get('/api/prof/', allProfessional);  
router.get('/api/prof/:id/', profDetails);
router.post('/api/prof/',profValidate, createProf);
router.patch('/api/prof/:id',updateProfValidate, updateProf);
router.delete('/api/prof/:id', deleteProf);
router.get('/api/pers/',allPersonal);
router.get('/api/pers/:id/', personalDetails);
router.post('/api/pers/' ,personalValidate ,createPersonal);
router.patch('/api/pers/:id', updatePersonalValidate, updatePersonal);
router.delete('/api/pers/:id', deletePersonal);