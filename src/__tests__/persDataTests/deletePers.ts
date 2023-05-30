import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export function deletePersTest(){
    describe('delete Personal Details route', ()=>{
        describe('given sent Detail is deleted from database', ()=>{
            it('should return a 200', async ()=>{
                const empId = 2024;
                const {body, statusCode}  = await supertest(app).delete(`/data/api/pers/${empId}`);
                expect(statusCode).toBe(200);
            });
        });
    });
    
    describe('Employee Id is not a number', ()=>{
        it('should return a 422', async ()=>{
            const empId  = "asdasd";
    
            const {body,statusCode} = await supertest(app).delete(`/data/api/pers/${empId}/`).expect(422);
        });
    });
}