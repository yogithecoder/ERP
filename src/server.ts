import express, {Express, Request, Response } from "express";
import {router}  from "./routes/erp-routes";
function createServer(){
    const app : Express = express();

     app.use(express.json());

     app.use("/data", router);
     return app;
}


export default createServer;