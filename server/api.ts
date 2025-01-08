import express from "express";
import cors from "cors";

import  { initTRPC } from "@trpc/server"

const t = initTRPC.create();

t.router({
    sayHi 
})

const app = express();

app.use(cors({ origin: "*" }));


app.listen(3000)

console.log("Server running on port 3000")