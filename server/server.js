import express from "express";
import "./config/instrument.js"
import "dotenv/config"
import cors from "cors";
import connectDb from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebHook } from "./controller/webHooks.js";
const app=express()
await connectDb();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to the Job Application Tracker API");
})
app.get("", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhook",clerkWebHook);
const PORT=process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})