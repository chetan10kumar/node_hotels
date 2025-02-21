/*Mongoose act as a bridge in connection of node js server and mongo db server*/
const mongoose=require('mongoose');
/*Defining mongoDB url*/
const mongoUrl="mongodb://localhost:27017/restaurants";
/*Establishing connection*/
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true      /*These parameters re showing that we are working on updated version of mongoDb*/
})
/*MongoDb maintains a object that performs in connection*/
const db=mongoose.connection;
/*Event listener reacts to different states of mongoDb connection*/
db.on('connected',()=>
{
    console.log("Connected to MongoDb server");
})
db.on('error',()=>
{
    console.log("Error while connecting to MongoDb server");
})
db.on('disconnected',()=>
{
    console.log("Diconnected from mongoDb server");
})
module.exports=db;
