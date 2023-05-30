import supertest from "supertest";
import createServer from "../../server";
import { readDB } from "../../middleware/DBlayer";
const app = createServer();


export function readAllEmpTest(){
    describe('Employee', ()=>{
        describe('Employee get All Route', ()=>{
            it('should return all employees list',async ()=>{
                let employees = readDB();
                const {body, statusCode} = await supertest(app).get('/data/').expect(200);
                expect(body).toStrictEqual(employees);
            });
        });
    });
}


