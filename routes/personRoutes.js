const express=require('express');
const router=express.Router();
const Person=require('./../models/person')
/*Now writing post method to save information of people*/
router.post('/',async(req,res)=>
    {
        try{
            /*Assuming data is stored in req.body*/
            const data=req.body;
            const newPerson=new Person(data);
            const response=await newPerson.save();
            console.log("Data Saved Successfully");
            res.status(200).json(response);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Now fetching person data using get method*/
    router.get('/',async(req,res)=>
    {
        try{
            const response=await Person.find();
            console.log("Data fetched Successfully");
            res.status(200).json(response);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Paramterized Url*/
    router.get('/:workType',async(req,res)=>
    {
        try
        {
            const workType=req.params.workType;
            if(workType=='owner'||workType=='chef'||workType=='waiter')
            {
                const response=await Person.find({work:workType});
                console.log("Data Fetched successfully");
                return res.status(200).json(response);   
            }
            
               return res.status(400).json({error:"Internal Server Error"});
            
    
        }
        catch(err)
        {
            return res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Update person Information*/
    /*Update of person's Information can be held only by object id because it is unique*/
    router.put('/:id',async(req,res)=>
    {
            try
            {
                const personId=req.params.id;
                const updatedPersonData=req.body;
                const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
                    new:true,
                    runValidators:true
                })
                if(!response)
                {
                    res.status(404).json("User not Found");
                }
                console.log("Person Updated SuccessFully");
                res.status(200).json(response);
            }
            catch(err)
            {
                res.status(500).json({error:"Internal Server Error"});
            }
    })
    /*Now deleting a route*/
    router.delete('/:id',async(req,res)=>
    {
        try{
            const personId=req.params.id;
            const response=await Person.findByIdAndDelete(personId);
            if(!response)
            {
                res.status(404).json({error:"Person not found"});
            }
            console.log("Data Deleted");
            res.status(200).json({message:"Person Deleted"});
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    module.exports=router;