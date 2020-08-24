const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//sending post request to postgresqp database
router.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
        ` //sql sanitizing from injection 
    let feedback = req.body; //this is an object coming from the client
    console.log(feedback);
    const values = [feedback.feeling, feedback.understanding, feedback.supported, feedback.comments]
    pool.query(queryText, values).then((result) => {
            res.sendStatus(201); //created
        }).catch((error) => {
            console.log('error in POST', error);
            res.sendStatus(500); //internal server error
        })
})

//getting feedback history from database
router.get('/', (req,res) => {
    console.log('GET /api/feedback');
    pool.query(`SELECT * from "feedback" ORDER BY "id" DESC;`).then((result) => {
        res.send(result.rows); //.rows is array or history of feedback from DB
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500); //internal server error
    })
})

//deleting selected row from database
router.delete('/:id', (req, res) => {
    let id = req.params.id; //id of the thing to delete comes through params
    console.log('deleting feedback id of:', id);
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`; //injection sanitization
    pool.query(queryText, [id]).then((result) => {
        res.sendStatus(202); //Accepted
    }).catch((error) => {
        console.log('error in DELETE', error);
        res.sendStatus(500); //internal server error
    })
})


//exporting router
module.exports = router;