
const express = require ('express');
const  Mongoose = require('mongoose');

const PatientSchema = new Mongoose.Schema({

       name:{
           type : String  
       },
    
        phone:{
            type : String
        },

        Status :{
            type : String
        }
})

const Patient = new Mongoose.model("Patient", PatientSchema )
module.exports =  Patient;