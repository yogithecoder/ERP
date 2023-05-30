import express, {Express, Request, Response } from "express";
import { Employee } from "./models/interfaces";
import createServer from "./server";
import config from "config" 

const port  = 8080;
const app = createServer();

app.listen(port, ()=> {
    console.log(`Listening to port ${port}`);

});