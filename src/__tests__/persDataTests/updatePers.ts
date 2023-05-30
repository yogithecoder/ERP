import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export function updatePersTest(){
    describe('Update Personal Details route', ()=>{
        describe('given sent Personal Detail is updated in database', ()=>{
            it('should return a 200', async ()=>{
                const empId = 2031;
                const emp ={ 
                "emp_address": "Vasant Nagar, Chh. SambhajiNagar"
                }
    
                const {body, statusCode}  = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
                expect(statusCode).toBe(200);
            });
        });
    });
    
    describe('No Personal Data found', ()=>{
        it('should return a 404', async()=>{
            const emp = {};
            const empId = 2155;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(404);
        });
    });
    
    describe('Personal Data missing to be updated ', ()=>{
        it('should return a 422', async()=>{
            const emp = {};
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Id is not a number in Personal Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id" : "asdasd"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee email is not a string in Personal Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_email" : 123123
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee email is not valid in Personal Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_email" : "yogeshgmail.com"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee address is not a string in Personal Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_address" : 123123
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee phone is not a number in Personal Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_phone" : "asdasd"
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee phone is not valid in Personal Detail', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_phone" : 724968
            };
            const empId = 2031;
            const {body, statusCode} = await supertest(app).patch(`/data/api/pers/${empId}`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    
    
}