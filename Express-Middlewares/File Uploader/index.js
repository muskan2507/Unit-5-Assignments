let fs=require("fs");
let express=require("express")
const app = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
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
app.post('/', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    console.log(req)
    // req.body will hold the text fields, if there were any
  })
  
  app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
  
  const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
  })
app.listen(8080,()=>{
    console.log("Server started at port http://localhost:8080/*")
})