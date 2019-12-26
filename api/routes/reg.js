//---------------Handles registration-------------

const router = require('express').Router()

const User = require('../models/user')

router.route('/add-new').post((req, res) => {
    console.log(req.body)

    let newUserData = req.body

    const newUser = new User({
        ...newUserData
    })

    newUser.save()
            .then(() => {
                console.log('New user saved successfully.')
                res.status(200).json({message: 'New user saved successfully.'})
            })
            .catch(err => {
                console.log('Unable to save the new user.')
                res.status(522).json({message: 'Unable to save the new user.', errorCode: err.code, errorMessage: err.errmsg})
            })
})

module.exports = router