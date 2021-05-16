const express = require('express')
const User = require('../models/user')
const crypto = require("crypto");

const router = express.Router();

router.post('/', async (req, res) => {
    const id = crypto.randomBytes(16).toString("hex");
    let user = new User({
        id:id,
        name: req.body.name,
        dob: req.body.dob,
        descriptoin: req.body.descriptoin,
        address: req.body.address
    })
    user = await user.save()
    return res.send(user)

})


router.get('/:id', async (req, res) => {
    const user = await User.find({id:req.params.id})
    return res.send(user)
})

router.delete('/:id', async (req, res) => {
    let user = await User.find({id:req.params.id})
    user = await User.findOneAndDelete(user)
    return res.send(user)
})
module.exports = router 