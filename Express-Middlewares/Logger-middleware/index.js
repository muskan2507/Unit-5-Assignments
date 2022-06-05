const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

morgan.token('body',(req)=> JSON.stringify(req.body));

app.use(morgan(' Method :method,Status :status, Content-length :res[content-length], Time :response-time ms, Date :date[clf], HTTP_version HTTP/:http-version, URL_accessed :url '))


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,()=>{
    console.log("Server started at port http://localhost:8080/*")
})