
const express = require('express');
const router = express.Router();


router.get('/',(req,res) => {
    res.render("index")
});

router.get('/servicios', (req,res) => {
    res.render('services', {titulo: 'Mis servicios'})  
});
//Req es lo

router.post('/' , (req,res) => {
    console.log(req.body)
});



module.exports = router;