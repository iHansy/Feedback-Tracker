const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//sending post request to postgresqp database
router.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
        ` //sql sanitizing from injection 
    console.log(req.body); //this is an object coming from the client
    const feedback = req.body;
    const values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]
    pool.query(queryText, values).then((result) => {
            console.log(result);
            res.sendStatus(201); //created
        }).catch((error) => {
            console.log('error in POST', error);
            res.sendStatus(500); //internal server error
        })
})


//exporting router
module.exports = router;