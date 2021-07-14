const express = require("express");
const  Patient = require("../models/patient")
const router = new express.Router();

//Insert patient api
router.post("/patient",async(req,res)=>{
    try{

      var newPatient =new Patient();
      newPatient.name= req.body.name;
      newPatient.phone = req.body.phone;
      newPatient.Status = req.body.Status;

     console.log(req.body)
     const inserPatient = await newPatient.save();
     res.send(inserPatient)
    }catch(e){
      res.status(400).send(e)
    }
})

// Read Patient api
router.get("/patient",async(req,res)=>{
    try{
       const getPatient = await Patient.find({});
   res.send(getPatient)
 
    }catch(e){
      res.status(201).send(e)
    }
})

router.get("/patient/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getPatient = await Patient.findById(_id);
   res.send(getPatient)
    }catch(e){
      res.status(201).send(e)
    }
})

// update patient list api
router.patch("/patient/:_id",async(req,res)=>{
    try{
       const  _id = req.params._id;
       console.log(req.body)
       const getPatient = await Patient.findByIdAndUpdate(_id,req.body, { new : true  
       });
   res.send(getPatient)
    }catch(e){
      res.status(500).send(e)
    }
})

// delete patient list api
router.delete("/patient/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getPatient = await Patient.findByIdAndDelete(req.params.id);
   res.send(getPatient)
 
    }catch(e){
      res.status(500).send(e)
    }
})

router.get("/patients",async(req,res)=>{
  try{
     const getPatient = await Patient.find({});
 res.send(getPatient)

  }catch(e){
    res.status(201).send(e)
  }
})

module.exports = router;












