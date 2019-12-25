//---------------Handles registration-------------

const router = require('express').Router()

const User = require('../models/user')

router.route('/add-new').post((req, res) => {
    console.log(req.body)

    let newUserData = req.body

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        gstin: req.body.gstin,
        phone: req.body.gstin,
        password: req.body.password,
        building: req.body.address.building,
        street: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
        pin: req.body.address.pin,
    })

    newUser.save()
            .then(() => console.log('New user saved successfully.'))
            .catch(err => console.log(err))

    res.json({message: 'Request received. New user added successfully.'})
})

module.exports = router