const express = require('express')
const User = require('../models/user')
const joi = require('joi')
const router = express.Router();

router.post('/', async (req, res) => {
    let user = new User({
        name: req.body.name,
        dob: req.body.dob,
        descriptoin: req.body.descriptoin,
        address: req.body.address
    })
    try {
        user = await user.save()
        return res.send(user)
    } catch (e) {
        return res.status(500).send({ error: 'Internal Server', errorCode: 100, error: e })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user || user.length == 0) return res.status(404).send({ error: 'User id not found', errorCode: 10 })
        return res.send(user)
    } catch (e) {
        return res.status(500).send({ error: 'Internal Server', errorCode: 100 })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        user = await User.findByIdAndRemove(req.params.id)
        if (!user) return res.status(404).send({ error: 'User id not found', errorCode: 10 })
        return res.send(user)
    } catch (e) {
        return res.status(500).send({ error: 'Internal Server', errorCode: 100 })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            dob: req.body.dob,
            descriptoin: req.body.descriptoin,
            address: req.body.address
        })
        if (!user) return res.status(404).send({ error: 'User id not found', errorCode: 10 })
        return res.send(user)
    } catch (e) {
        return res.status(500).send({ error: 'Internal Server', errorCode: 100 })
    }
})

module.exports = router 