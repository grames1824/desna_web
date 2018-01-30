const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require ('../config/database');

//Travelplan Schema
const TravelPlanschema = mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    cityname:{
        type: String,
        required: true
    },
    citypic: {
        type: String,
        required: true
    },
    personality:{
        type: String,
        required: true
    },
    destinations:{
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }, // Started, Ended
    miles:{
        type: Number,
        required: true
    },
    needs: {
        type: Array,
        required: true
    },
    accomType:  {
        type: Array,
        required: true
    },
    agency_id:{
        type: Array

    }

});


const TravelPlan = module.exports = mongoose.model('travelplans', TravelPlanschema) 



module.exports.getClientByAgencyID = function(agency_id, callback){
    const query = {agency_id: agency_id}
    TravelPlan.findOne(query, callback);
  

}

module.exports.getPendingandStillAvailable = function(status, status2,callback){
    const query =  { $or : [ { status : status }, {  status : status } ] }
    TravelPlan.find(query, callback);
  

}


module.exports.getTravelInfoByID = function(id, callback){
    TravelPlan.findById(id, callback);
  

}


module.exports.UpdateTravelPlanStatus = function(id,status,status1,callback){
    const conditions = {uuid:id, status:status1}
    const update = {$set:{status:status}}
    const options =  {returnNewDocument : true,  upsert: true}

    TravelPlan.findOneAndUpdate(conditions, update, options, callback);
}

