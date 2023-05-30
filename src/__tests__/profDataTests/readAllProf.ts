import supertest from "supertest";
import createServer from "../../server";
import { readProf} from "../../middleware/DBlayer";
const app = createServer();


export function readAllProfTest(){
    describe('Professional Details get All Route', ()=>{
        it('should return all employees list',async ()=>{
            let profData = readProf();
            const {body, statusCode} = await supertest(app).get('/data/api/prof/').expect(200);
            expect(body).toStrictEqual(profData);
        }),9000
    });
}