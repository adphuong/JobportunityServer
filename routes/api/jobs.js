const express = require('express');
const router = express.Router();


// Load Job model
// const Job = require('../../models/Job');
const mongoose = require("mongoose");
const Job = mongoose.model("Job");

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
    const jobs = await Job.find().sort({ date_applied: -1 })
    .catch(err => res.status(404).json({ nojobsfound: 'No Jobs found' }));
});


// @route GET api/jobs/:id
// @description Get single job by id
// @access Public
router.get('/:id', (req, res) => {
    Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(404).json({ nojobsfound: 'No Job found' }));
});


// @route GET api/jobs
// @description add/save kpn
// @access Public
router.post('/add-job', async (req, res) => {
    var {company, position, stage, next_step, date_applied, notes} = req.body
    const job = new Job({
        company, position, stage, next_step, date_applied, notes
    })
    try {
        await job.save()
        res.status(201).json({
            status: 'Success',

            data : {
                company,
                position,
                stage,
                next_step,
                date_applied,
                notes
            }
        })
    } catch(err) {
        res.status(500).json({
            status: 'Failed',
            message: 'Error in /routes/api/jobs.js'
        })
    }
});


// // @route GET api/jobs/:id
// // @description Update book
// // @access Public
// router.put('/:id', (req, res) => {
//     Job.findByIdAndUpdate(req.params.id, req.body)
//     .then(job => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });


// // @route GET api/jobs/:id
// // @description Delete book by id
// // @access Public
// router.delete('/:id', (req, res) => {
//     Job.findByIdAndRemove(req.params.id, req.body)
//     .then(job => res.json({ mgs: 'Job entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a job' }));
// });

module.exports = router;