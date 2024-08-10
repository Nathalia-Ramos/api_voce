import express from "express";
import * as routes from "./src/routes";

const app = express();
app.use(express.json());

Object.values(routes).map(route => app.use(route));


export default app;