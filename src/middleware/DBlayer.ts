import * as fs from 'fs';
import * as test from "../config/testing";
import * as dev from "../config/development";
// import { DBPath, personalDBPath, profDBPath } from '../variables';

if(process.env.NODE_ENV = "testing"){
    var DBPath = test.testEmpDBPath;
    var profDBPath = test.testProfDBPath;
    var personalDBPath = test.testPersonalDBPath;
}
if(process.env.NODE_ENV = "development"){
    var DBPath = dev.empDBPath;
    var profDBPath = dev.profDBPath;
    var personalDBPath = dev.personalDBPath;
}


// empData functions
export function readDB(){
    return JSON.parse(fs.readFileSync(DBPath,'utf-8'))
};

export function writeDB(newjson :any){
    fs.writeFile(DBPath, newjson, async(err) =>{
        if(err) throw err;
        console.log("Done writing in empData");
    });
};

//profData functions
export function readProf(){
    return JSON.parse(fs.readFileSync(profDBPath,'utf-8'));
};

export function writeProf(newjson :any){
    fs.writeFile(profDBPath, newjson, async(err) =>{
        if(err) throw err;
        console.log("Done writing in profData");
    });
};

//personalData functions
export function readPersonal(){
    return JSON.parse(fs.readFileSync(personalDBPath,'utf-8'));
};

export function writePersonal(newjson :any){
    fs.writeFile(personalDBPath, newjson, async(err) =>{
        if(err) throw err;
        console.log("Done writing in personalData");
    });
};