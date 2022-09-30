const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const jobSchema = require('../../models/Job');

router.use(express.json());

// @route GET api/jobs/test
// @description Tests jobs route
// @access Public
router.get('/test', (req, res) => res.send('job route testing!'));


// @route GET api/jobs
// @description Get all jobs
// @access Public
router.get('/', async (req, res) => {
    res.send("Jobs Homepage");

    jobSchema.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ nojobsfound: 'No Jobs found' }))
    // const jobs = await Job.find().sort({ date_applied: -1 })
    // .catch(err => res.status(404).json({ nojobsfound: 'No Jobs found' }));
});



// @route GET api/jobs
// @description add/save kpn
// @access Public
router.post('/add-job', async (req, res) => {
    // var {company, position, stage, next_step, date_applied, notes} = req.body
    // const job = new Job({
    //     company, position, stage, next_step, date_applied, notes
    // })
    jobSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
    // try {
    //     await job.save()
    //     res.status(201).json({
    //         status: 'Success',

    //         data : {
    //             company,
    //             position,
    //             stage,
    //             next_step,
    //             date_applied,
    //             notes
    //         }
    //     })
    // } catch(err) {
    //     res.status(500).json({
    //         status: 'Failed',
    //         message: 'Error in /routes/api/jobs.js'
    //     })
    // }
});



module.exports = router;