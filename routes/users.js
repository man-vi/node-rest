const express = require('express')
const User = require('../models/user')
const router = express.Router();

router.post('/', async (req, res) => {

    let user = new User({
        name: req.body.name,
        dob: req.body.dob,
        descriptoin: req.body.descriptoin,
        address: req.body.address
    })
    user = await user.save()
    return res.send(user)

})

module.exports = router 