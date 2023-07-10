const express = require("express");
const apiRouter = require("./routes/route")

const app =  express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', apiRouter);
app.listen(PORT, ()=>{
    console.log('el puerto es', PORT);
})