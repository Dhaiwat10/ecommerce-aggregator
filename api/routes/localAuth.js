const router = require('express').Router()

const User = require('../models/user')

router.route('/sign-in').post((req, res) => {
    const query = req.body
    User.findOne({email: query.email}, (err, foundUser) => {
        if(!err) {
            if(foundUser) {
                if(query.password === foundUser.password) {
                    console.log('Successfully authenticated ' + query.email + '.')
                    res.json({message: 'Sign-in successful.', code: 200})
                } else {
                    console.log('Password did not match.')
                    res.json({message: 'Wrong password. Please enter the correct password.', code: 420})
                }
            } else {
                console.log('User not found.')
                res.json({message: 'Invalid email address. Please enter a vaild email address.', code: 421})
            }
        } else {
            console.log(err)
            res.json({message: 'Unable to authenticate. Please try again in a few minutes.', code: err.code, errorMessage: err.errmsg})
        }
    })
})

module.exports = router