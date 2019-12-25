//---------------Handles registration-------------

const router = require('express').Router()

const User = require('../models/user')

router.route('/add-new').post((req, res) => {
    console.log(req.body)

    const newUser = new User(req.body)

    newUser.save()
            .then(() => console.log('New user saved successfully.'))
            .catch(err => console.log(err))

    res.json({message: 'Request received.'})
})

module.exports = router