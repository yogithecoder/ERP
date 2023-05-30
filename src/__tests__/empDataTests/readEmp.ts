import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();

export function readEmpTest(){
    describe('Employee', ()=>{
        describe('get Employee route',()=>{
            describe('given the employee does exist' ,()=>{
                it("Should return a 200",async ()=>{
    
                    const emp =   {
                        "emp_id": 2043,
                        "emp_name": "Shreya Bende",
                        "emp_dob": "14-08-01",
                        "emp_skills": [
                          "Wordpress",
                          "nodejs",
                          "C"
                        ],
                        "emp_doj": "26-04-23",
                        "emp_level": "Intern",
                        "supervisor": "Developer"
                      }
    
                    const {body, statusCode } = await supertest(app).get(`/data/${emp.emp_id}`).expect(200);
                    expect(body).toStrictEqual(emp);
                });
            });
        });
    });
    
    describe('Employee Id is not a number', ()=>{
        it('should return a 422', async ()=>{
            const empId  = "asdasd";
    
            const {body,statusCode} = await supertest(app).get(`/data/${empId}/`).expect(422);
        });
    });
}
