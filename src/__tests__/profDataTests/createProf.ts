import supertest from 'supertest';
import createServer from '../../server';
const app = createServer();


export function createProfTest(){
    describe('professional Details create route', ()=>{
        describe('given sent details is inserted in database', ()=>{
            it('should return a 200', async ()=>{
                    const emp = {
                        "emp_id": 2149,
                        "emp_skills": [
                            "nodejs",
                            "express",
                            "Cpp"
                        ],
                        "emp_projects": [
                            "Website for Clothing", "IOT project"
                        ],
                        "past_experience": [
                            "MGM - 3 months"
                        ],
                        "certifications": [
                            "Udemy- Python development"
                        ]
                    }
    
                    const {body, statusCode}  = await supertest(app).post('/data/api/prof/').send(emp);
    
                    expect(statusCode).toBe(200);
                });
            });
    });
    
    describe('Professional Data is missing', ()=>{
        it('should return 422', async()=>{
            const emp = {};
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        }),9000
    });
    
    describe('Employee Id is missing from Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_skills": [
                    "nodejs",
                    "express",
                    "Cpp"
                ],
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        }), 9000
    });
    
    describe('Employee Id is not a number from Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id":"asdada",
                "emp_skills": [
                    "nodejs",
                    "express",
                    "Cpp"
                ],
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Details already exists in Professional Details', ()=>{
        it('should return 409', async()=>{
            const emp = {
                "emp_id":2031,
                "emp_skills": [
                    "nodejs",
                    "express",
                    "Cpp"
                ],
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(409);
        });
    });
    
    describe('Employee Skill is missing from Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2151,
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Skill is not an array in Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2152,
                "emp_skills": "nodejs",
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee projects is missing from Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2153,
                "emp_skills": [
                    "nodejs",
                    "express",
                    "Cpp"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Project is not an array in Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2154,
                "emp_skills": ["nodejs"],
                "emp_projects": "Website for Clothing", 
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee past experience is missing from Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2155,
                "emp_skills": [
                    "nodejs",
                    "express",
                    "Cpp"
                ],
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Past Experience is not an array in Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2156,
                "emp_skills": ["nodejs"],
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": "MGM - 3 months",
                "certifications": [
                    "Udemy- Python development"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Certifications is missing from Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2157,
                "emp_skills": [
                    "nodejs",
                    "express",
                    "Cpp"
                ],
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ]
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
    
    describe('Employee Certifications is not an array in Professional Details', ()=>{
        it('should return 422', async()=>{
            const emp = {
                "emp_id" : 2152,
                "emp_skills": "nodejs",
                "emp_projects": [
                    "Website for Clothing", "IOT project"
                ],
                "past_experience": [
                    "MGM - 3 months"
                ],
                "certifications": 
                    "Udemy- Python development"
                
            }
            const {body, statusCode} = await supertest(app).post('/data/api/prof/').send(emp);
            expect(statusCode).toBe(422);
        });
    });
}