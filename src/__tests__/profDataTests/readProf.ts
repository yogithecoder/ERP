import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export function readProfTest(){
    describe('get Professional Details of one employee route',()=>{
        describe('given the Professional Details does exist' ,()=>{
            it("Should return a 200",async ()=>{
    
                const emp = {
                    "emp_id": 2043,
                    "emp_skills": [
                        "Wordpress",
                        "nodejs",
                        "C"
                    ],
                    "emp_projects": [
                        "Website for Trekking",
                        "cocoon website",
                        "Water DB App"
                    ],
                    "past_experience": [
                        "ADT - 6 months"
                    ],
                    "certifications": [
                        "Udemy- Web development"
                    ]
                }
    
                const {body, statusCode } = await supertest(app).get(`/data/api/prof/${emp.emp_id}/`).expect(200);
                expect(body).toStrictEqual(emp);
            });
        });
    });
    
    describe('Employee Id is not a number', ()=>{
        it('should return a 422', async ()=>{
            const empId  = "asdasd";
    
            const {body,statusCode} = await supertest(app).get(`/data/api/prof/${empId}/`).expect(422);
        });
    });
}