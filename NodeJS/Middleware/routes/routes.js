const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log('middleware from router');
    next();
})
// router.get('/',(req, res, next)=>{
//     console.log('middleware from router 2');
//     next();
// })
router.get('/',(req, res)=>{
res.send("hello from router")
})
module.exports = router;