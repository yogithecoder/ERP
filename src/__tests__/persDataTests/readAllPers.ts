import supertest from "supertest";
import createServer from "../../server";
import { readPersonal } from "../../middleware/DBlayer";
const app = createServer();


export function readAllPersTest(){
    describe('Personal Details get All Route', ()=>{
        it('should return all personal Details list',async ()=>{
            let persData = readPersonal();
            const {body, statusCode} = await supertest(app).get('/data/api/pers/').expect(200);
            expect(body).toStrictEqual(persData);
        });
    });
}