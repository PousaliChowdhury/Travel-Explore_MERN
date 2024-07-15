const ensureAuthencated = require('../Middlewares/Auth')

const router = require('express').Router()


router.get('/', ensureAuthencated, (res, req) =>{
    console.log("--- logged in user details ---", req.user)
    res.status(200).json([
        {
            name:"mobile",
            price: 10000
        },
        {
            name:"tv",
            price: 15000
        },
        {
            name:"laptop",
            price: 50000
        }
    ])
})

module.exports = router

