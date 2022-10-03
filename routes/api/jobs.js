const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const jobSchema = require('../../models/Job');

router.use(express.json());

// @route GET api/jobs
// @description Get all jobs
// @access Public
router.get('/', async (req, res) => {
    // res.send("Jobs API Homepage");

    // jobSchema.find()
    // .then(items => res.json(items))
    // .catch(err => res.status(404).json({ nojobsfound: 'No Jobs found' }))
    
    const jobs = await jobSchema.find().sort({ date_found: -1 })
    res.send(jobs);
});



// @route GET api/jobs
// @description add/save kpn
// @access Public
router.post('/add-job', async (req, res) => {
    let job = jobSchema.create({
        company: req.body.company,
        position: req.body.position,
        job_link: '//' + req.body.job_link,
        stage: req.body.stage,
        next_step: req.body.next_step,
        date_found: req.body.date_found,
        date_applied: req.body.date_applied,
        notes: req.body.notes
    })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));

});


router.delete("/delete/:id", (req, res) => {
    jobSchema.findByIdAndDelete({_id: req.params.id})
    .then(doc => console.log(doc))
    .catch(err => console.log(err))
})

router.put("/update/:id", (req, res) => {
    jobSchema.findByIdAndUpdate({_id: req.params.id}, {
        company: req.body.company,
        position: req.body.position,
        job_link: '//' + req.body.job_link,
        stage: req.body.stage,
        next_step: req.body.next_step,
        date_found: req.body.date_found,
        date_applied: req.body.date_applied,
        notes: req.body.notes
    })
    .then(doc => console.log(doc))
    .catch(err => console.log(err))
})

module.exports = router;