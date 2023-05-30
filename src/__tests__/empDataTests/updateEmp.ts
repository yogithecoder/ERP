import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();

export function updateEmpTest(){
  describe('Employee', ()=>{
    describe('update employee route', ()=>{
        describe('given sent employee is updated in database', ()=>{
            it('should return a 200', async ()=>{
                const empId = 2031;
                const emp ={ 
                "emp_skills": [
                  "C",
                  "Javascript"
                ],
                "emp_level": "Intern",
                "supervisor": "Developer"
              }

                const {body, statusCode}  = await supertest(app).patch(`/data/${empId}`).send(emp);
                expect(statusCode).toBe(200);
            });
        });
    });
});

describe('Employee does not exists',  ()=>{
  it('should return a 404', async()=>{
    const empId = 2131;
    const emp ={};
    
   const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

   expect(statusCode).toBe(404);
  })
});

describe('Employee whole data is missing',  ()=>{
      it('should return a 422', async()=>{
        const empId = 2031;
        const emp ={};
        
       const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

       expect(statusCode).toBe(422);
      })
});

describe('Employee id is not a number',  ()=>{
      it('should return a 422', async()=>{
        const empId = 2031;
        const emp ={
          "emp_id": '2031'
          };
        
      const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

      expect(statusCode).toBe(422);
      })
});

describe('Employee name is not a string',  ()=>{
  it('should return a 422', async()=>{
    const empId = 2031;
    const emp ={
      "emp_name": 2031
      };
    
  const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

  expect(statusCode).toBe(422);
  })
});

describe('Employee skill is not an array',  ()=>{
  it('should return a 422', async()=>{
    const empId = 2031;
    const emp ={
      "emp_skills": 'cpp,Java'
      };
    
  const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

  expect(statusCode).toBe(422);
  })
});

describe('Employee level is not a string',  ()=>{
  it('should return a 422', async()=>{
    const empId = 2031;
    const emp ={
      "emp_level": 2031
      };
    
  const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

  expect(statusCode).toBe(422);
  })
});

describe('Employee supervisor is not a string',  ()=>{
  it('should return a 422', async()=>{
    const empId = 2031;
    const emp ={
      "supervisor": 231231
      };
    
  const {body, statusCode} = await supertest(app).patch(`/data/${empId}`).send(emp);

  expect(statusCode).toBe(422);
  })
});


}