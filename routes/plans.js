const express = require('express');
const router = express.Router();
const Plan = require('../models/plans');
const config = require('../config/database');

// Register
router.get('/client/agency/:id', (req, res, next) => {
 const agency_id = req.params.id;

    Plan.getClientByAgencyID(agency_id, (err,travelplans) => {
       res.json(travelplans);
       console.log("your clients has been retrieved");

    });
});
router.get('/client/available', (req, res, next) => {
    const status = "Pending";
    const status1 = "Still Available";
   
       Plan.getPendingandStillAvailable(status,status1, (err,travelplans) => {
          res.json(travelplans);
          console.log("available clients has been retrieved");
   
       });
   });

router.get('/client/info/:id', (req, res, next) => {
    const id = req.params.id;
   
       Plan.getTravelInfoByID(id, (err,travelplans) => {
          res.json(travelplans);
          console.log("clients info has been retrieved");
   
       });
   });
   router.get('/personality/top/', (req, res, next) => {

   
       Plan.countPersonality( (err,top) => {
          res.json(top);
          console.log("ITO NA YUN TOP 10 PER PERSONALITY LANG WALA DI MO KASI NILAGYAN NG ID UN CITY, HIRAP NA AKO MAG RETRIEVED. IKAW SERVER AKO DEVELOPER DALIIII ");
   
       });
   });
   


   router.post('/update/status', (req, res, next) => {
    const id = req.body.uuid;
   const status1 = req.body.status1;
   const status = req.body.status;
   
       Plan.UpdateTravelPlanStatus(id,status1,status, (err,travelplans) => {
        if(err){
            res.send(err);
        } else{
         return res.json({ message: "travelplan status has been updated!"});
    
        }
       });
   });


module.exports = router;
