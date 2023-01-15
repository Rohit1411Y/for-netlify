const express = require("express");
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
router.get('/',(req,res)=>{
    res.json({
        "king":"has Queen"
    })
})
router.get('/contact',(req,res)=>{
    res.json({
       "contact":"Info not available"
    })
})
app.use('/.netlify/functions/api',router)
module.exports.handler = serverless(app);
