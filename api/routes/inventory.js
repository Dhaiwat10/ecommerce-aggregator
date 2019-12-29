//----Handles all operations related to inventory management

const router = require('express').Router()

const Item = require('../models/item')

router.route('/add-new-item').post((req, res) => {
    const payload = {
        ...req.body
    }

    const newItem = new Item(payload)

    //Add validation to check if the price and email is valid

    newItem.save()
        .then(() => {
            console.log('New item added successfully.')
            res.json({message: 'New item added successfully.', code: 200})
        })
        .catch(err => {
            console.log(err)
            res.json({message: 'Unable to add the new item. Please try again.', code: '430', error: err.errmsg, errCode: err.code})
        })
})

router.route('/get-inventory/').post((req, res) => {
    const sellerEmail = req.body.sellerEmail

    Item.find({sellerEmail: sellerEmail}, (err, foundItems) => {
        if(!err) {
            if(foundItems) {
                console.log(foundItems)
                res.json({foundItems: foundItems})
            }
        } else {
            console.log(err)
        }
    })
})

//TODO: Require a token to be able to delete things
router.route('/delete-item').delete((req, res) => {
    const itemId = req.body.id

    Item.findOneAndDelete({id: itemId}, (err, foundItem) => {
        if(!err) {
            if(foundItem) {
                console.log("Found item: " + foundItem)
                res.json({"message": "Successfully deleted the item."})
            } else {
                console.log("Could not find an item with the matching ID.")
                res.json({"message": "Error! Could not find an item with the matching ID."})
            }
        } else {
            console.log(err)
            res.json({"message": err.errmsg})
        }
    })
})

module.exports = router