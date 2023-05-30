import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export function deleteProfTest(){
    describe('delete Professional Details route', ()=>{
        describe('given sent Details is deleted from database', ()=>{
            it('should return a 200', async ()=>{
                const empId = 2024;
                const {body, statusCode}  = await supertest(app).delete(`/data/api/prof/${empId}`);
                expect(statusCode).toBe(200);
            });
        });
    });
    
    describe('Employee Id is not a number', ()=>{
        it('should return a 422', async ()=>{
            const empId  = "asdasd";
    
            const {body,statusCode} = await supertest(app).delete(`/data/api/prof/${empId}/`).expect(422);
        });
    });
}