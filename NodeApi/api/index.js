var express = require('express');
var app =  express();
const bodyparser =require('body-parser');
const users =[
    {"id":"1","name":"priyanka","address":"ghaziabad"},
    {"id":"2","name":"Rahul","address":"baoli"},
    {"id":"3","name":"sonam","address":"dabana"},
    {"id":"4","name":"devta","address":"swarg"}
];
app.use(bodyparser.json());
app.get('/',(req,res)=>{
res.json({"status":"read"});
});

app.get("/users",(req,res)=>{
res.json({"data":users});
});

app.post("/users",(req,res)=>{
  console.log(req.body); 
  users.push(req.body);
  res.json({"status":"true"}); 
});

app.delete("/users/:id",(req,res)=>{
const ide  = req.params['id'];
for (var x in users){
   if(users[x].id == ide){
       console.log(x);
       users.splice(x,1);
res.send(ide);
    }  
}
});
app.listen(5000,()=>{
    console.log("server is listening on port 5000..");
});
