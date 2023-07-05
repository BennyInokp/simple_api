const express = require("express"); 
const app = express();
const path = require("path");

//This is the middle well
app.use(express.json())

const result = []
app.get("/getAll", function (req, res) {
    res.send({result})
});

app. get("", function (req, res) {
     const dir = path.join(__dirname + "/public/index.html")
     return response.sendFile(dir);
});


app.post ("/addition", function(req, res){
    const{value1, value2} = req.body;
    const answer = value1 + value2
    const message = `the sum of ${value1} and ${value2} is ${answer}`
    result.push(message)
    res.json({message})
})

app.post ("/division", function(req,res){
    const {value1, value2} = req.body;
    const answer = value1 / value2
    message= `the sum of ${value1} and ${value2} is ${answer}`
    result.push(message)
    res.json({message})   
})

app.post ("/multiplication", function(req,res){
    const {value1, value2} = req.body;
    const answer = value1 * value2
    message = `the sum of ${value1} and ${value2} is ${answer}`
    result.push(message)
    res.json({message})
    
})

app.post ("/substraction", function(req,res){
    const {value1, value2} = req.body;
    const answer = value1 - value2
    message = `the sum of ${value1} and ${value2} is ${answer}`
    result.push(message)
    res.json({message})
    
})

app.listen(5000, function(){
    console.log("server running on port 5000")
});










