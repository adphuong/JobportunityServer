const express = require('express');
const router = express.Router();
const jobSchema = require('../../models/Job');
const requireAuth = require('../../middleware/requireAuth');


router.use(express.json());

// Require authorization for all job routes
router.use(requireAuth);

// @route GET api/jobs
// @description Get all jobs
// @access Public
router.get('/', async (req, res) => {
    const user_id = req.user._id
    
    const jobs = await jobSchema.find({ user_id }).sort({ date_found: -1 })
    res.status(200).json(jobs)
});

// @route GET api/jobs
// @description add/save kpn
// @access Public
router.post('/add-job', async (req, res) => {
    const user_id = req.user._id
    let job = jobSchema.create({
        company: req.body.company,
        position: req.body.position,
        job_link: req.body.job_link,
        stage: req.body.stage,
        next_step: req.body.next_step,
        date_found: req.body.date_found,
        date_applied: req.body.date_applied,
        notes: req.body.notes,
        user_id: user_id
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
        job_link: req.body.job_link,
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