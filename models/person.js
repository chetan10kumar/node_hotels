/*Now creating person schema*/
const mongoose=require('mongoose');
const personSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    work:{
        type:String,
        enum:["chef","owner","waiter"],
        require:true

    },
    address:{
        type:String,
        require:true
    },
    salary:
    {
        type:Number
    }
})
/*Added comment for testing*/
const Person=mongoose.model("Person",personSchema);
module.exports=Person;