import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export  function updateProfTest(){
    describe('Update Professional Details route', ()=>{
        describe('given sent Professional Detail is updated in database', ()=>{
            it('should return a 200', async ()=>{
                const empId = 2031;
                const emp ={ 
                "emp_skills": [
                    "C",
                    "Javascript"
                ]
                }
    
                const {body, statusCode}  = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
                expect(statusCode).toBe(200);
            });
        });
    });
    
    describe('No Professional Data found', ()=>{
        it('should return a 404', async()=>{
            const emp = {};
            const empId = 2155;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(404);
        });
    });
    
    describe('Professional Data missing to be updated ', ()=>{
        it('should return a 422', async()=>{
            const emp = {};
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Id is not a number in Professional Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id" : "asdasd"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee skill is not an array in Professional Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_skills" : "cpp,java"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee projects is not an array in Professional Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_projects" : "MGM website"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee past experience is not an array in Professional Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "past_experience" : "ADT - 3 Months"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Certifications is not an array in Professional Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "certifications" : "Udemy - Web Development"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/prof/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
} 

