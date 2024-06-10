import express from "express";
import { createClient } from "redis";

const client=createClient();

const app=express();
app.use(express.json());


