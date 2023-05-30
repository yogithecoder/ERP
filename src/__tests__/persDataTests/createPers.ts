import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();

export function createPersTest(){
    describe('professional', ()=>{
        describe('given sent details is inserted in database', ()=>{
            it('should return a 200', async ()=>{
                    const emp = {
                        "emp_id": 2149,
                        "emp_email": "anuja@gmail.com",
                        "emp_address": "Bidkin, Maharashtra",
                        "emp_phone": 9312311231
                    }
    
                    const {body, statusCode}  = await supertest(app).post('/data/api/pers/').send(emp);
                    expect(statusCode).toBe(200);
                });
            });
    });
    
    describe('Personal Data is missing', ()=>{
        it('should return a 422', async()=>{
            const emp = {};
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        }),9000
    });
    
    describe('Employee Id is missing from Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_email": "anuja@gmail.com",
                "emp_address": "Bidkin, Maharashtra",
                "emp_phone": 9312311231
            }
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    }); 
    
    describe('Employee Id is not a number in Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": "Asdasd",
                "emp_email": "anuja@gmail.com",
                "emp_address": "Bidkin, Maharashtra",
                "emp_phone": 9312311231
            }
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Details already exists in Personal Data', ()=>{
        it('should return a 409', async()=>{
            const emp = {
                "emp_id" : 2031,
                "emp_email": "yogesh@gmail.com",
                "emp_address": "Chh. SambhajiNagar, Maharashtra",
                "emp_phone": 9823953432
            };
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(409);
        });
    });
    
    describe('Employee email is missing from Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2150,
                "emp_address": "Bidkin, Maharashtra",
                "emp_phone": 9312311231
            }
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    }); 
    
    describe('Employee email is not valid Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2151,
                "emp_email": "anujagmail.com",
                "emp_address": "Bidkin, Maharashtra",
                "emp_phone": 9312311231
            }
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee address is missing from Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2152,
                "emp_email": "anuja@gmail.com",
                "emp_phone": 9312311231
            }
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee address is not a string in Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2153,
                "emp_email": "anuja@gmail.com",
                "emp_address": 13132123,
                "emp_phone": 9312311231
            }
    
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee phone no is missing from Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2154,
                "emp_email": "anuja@gmail.com",
                "emp_address": "Bidkin, Maharashtra",
                
            }
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee phone no is not a number in Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2155,
                "emp_email": "anuja@gmail.com",
                "emp_address": "Bidkin, Maharashtra",
                "emp_phone" : "123123131"
            }
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee phone no is not a 10 digit Personal Data', ()=>{
        it('should return a 422', async()=>{
            const emp = {
                "emp_id": 2156,
                "emp_email": "anuja@gmail.com",
                "emp_address": "Bidkin, Maharashtra",
                "emp_phone" : 724972345
            }
            const {body,statusCode} = await supertest(app).post(`/data/api/pers/`).send(emp);
            expect(statusCode).toBe(422);
        });
    });
}