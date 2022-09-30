const express = require('express');
const router = express.Router();


// Load Job model
// const Job = require('../../models/Job');
const mongoose = require("mongoose");
const User = mongoose.model("Job");


// @route GET api/jobs/test
// @description Tests jobs route
// @access Public
router.get('/test', (req, res) => res.send('job route testing!'));


// @route GET api/jobs
// @description Get all jobs
// @access Public
router.get('/', (req, res) => {
    res.send("Jobs Homepage");
    Job.find()
    .then(jobs => res.json(jobs))
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
router.post('/', (req, res) => {
    Job.create(req.body)
    .then(job => res.json({ msg: 'Job added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Job' }));
});


// @route GET api/jobs/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Job.findByIdAndUpdate(req.params.id, req.body)
    .then(job => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


// @route GET api/jobs/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Job.findByIdAndRemove(req.params.id, req.body)
    .then(job => res.json({ mgs: 'Job entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a job' }));
});

module.exports = router;