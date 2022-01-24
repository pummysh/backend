const express=require('express');

const app=express();

const user=require('./Controllers/user');

app.use(express.json());

app.use("/user",user);

app.listen(3333);