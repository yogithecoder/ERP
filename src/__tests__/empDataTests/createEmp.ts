import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();

export function createEmpTest(){
    describe('Employee', ()=>{
        describe('post employee route', ()=>{
            describe('given sent employee is inserted in database', ()=>{
                it('should return a 200', async ()=>{
                    const emp = {
                        "emp_id": 2149,
                        "emp_name": "Anuja Jaiswal",
                        "emp_dob": "27/01/01",
                        "emp_skills": [
                            "html",
                            "CSS",
                            "JS",
                            "Python"
                        ],
                        "emp_doj": "26/04/23",
                        "emp_level": "Intern",
                        "supervisor": "Developer"
                    }
    
                    const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
                    expect(statusCode).toBe(200);
                })
            })
        });
    });
    
    describe('Employee is missing the data', ()=>{
        it("should return a 422", async ()=>{
            const emp = {};
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee already exists', ()=>{
        it("should return 409", async ()=>{
            const emp = {
                "emp_id": 2055    
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(409);
        });
    });
    
    describe('Employee id is missing', ()=>{
        it("should return 422", async ()=>{
            const emp = {
                "emp_name": "Anuja Jaiswal",
                "emp_dob": "27/01/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_doj": "26/04/23",
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee id is not a number', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": "2055"   
            };
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee name is missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2150,
                "emp_dob": "27/01/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_doj": "26/04/23",
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee name is not a string', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2151,
                "emp_name" : 2314,
                "emp_dob": "27/01/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_doj": "26/04/23",
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee DOB is missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2152,
                "emp_name": "Anuja Jaiswal",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_doj": "26/04/23",
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee Skills are missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2153,
                "emp_name": "Anuja Jaiswal",
                "emp_dob": "27/01/01",
                "emp_doj": "26/04/23",
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee Skills are missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2154,
                "emp_name": "Anuja Jaiswal",
                "emp_dob": "27/01/01",
                "emp_skills": "cpp,java",
                "emp_doj": "26/04/23",
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee DOB is missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2155,
                "emp_name": "Anuja Jaiswal",
                "emp_dob" : "26/04/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_level": "Intern",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee Level is missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2156,
                "emp_name": "Anuja Jaiswal",
                "emp_dob" : "26/04/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_doj" : "26/04/23",
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee Level is not a string', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2157,
                "emp_name": "Anuja Jaiswal",
                "emp_dob" : "26/04/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_level": 1322,
                "supervisor": "Developer"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee Supervisor is missing', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2156,
                "emp_name": "Anuja Jaiswal",
                "emp_dob" : "26/04/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_doj" : "26/04/23",
                "emp_level": "Intern"
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
    describe('Employee Level is not a string', ()=>{
        it("should return a 422", async ()=>{
            const emp = {
                "emp_id": 2157,
                "emp_name": "Anuja Jaiswal",
                "emp_dob" : "26/04/01",
                "emp_skills": [
                    "html",
                    "CSS",
                    "JS",
                    "Python"
                ],
                "emp_level": "Intern",
                "supervisor": 3213
            }
            const {body, statusCode}  = await supertest(app).post('/data/').send(emp);
    
            expect(statusCode).toBe(422); 
        });
    });
    
}
