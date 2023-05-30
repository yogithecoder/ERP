import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export function readPersTest(){
    describe('get Personal Details of one employee route',()=>{
        describe('given the Personal Details does exist' ,()=>{
            it("Should return a 200",async ()=>{
    
                const emp = {
                    "emp_id": 2043,
                    "emp_email": "shreya@gmail.com",
                    "emp_address": "Chh. SambhajiNagar, Maharashtra",
                    "emp_phone": 9154953432
                }
                const {body, statusCode } = await supertest(app).get(`/data/api/pers/${emp.emp_id}/`).expect(200);
                expect(body).toStrictEqual(emp);
            });
        });
    });
    
    describe('Employee Id is not a number', ()=>{
        it('should return a 422', async ()=>{
            const empId  = "asdasd";
    
            const {body,statusCode} = await supertest(app).get(`/data/api/pers/${empId}/`).expect(422);
        });
    });
}