let fs=require("fs");
let express=require("express")
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get("/",(req,res)=>{
    fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.end(err)
            console.log('err occur')
        }
        res.setHeader("content-type","text/html")
        res.send(data)
    })

})
app.listen(8080,()=>{
    console.log("Server started at port http://localhost:8080/*")
})