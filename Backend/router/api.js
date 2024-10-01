const router = require('express').Router()
const userC = require('../controller/user')
const adminC = require('../controller/admin')

router.post('/register',userC.RegController)
router.post('/login',userC.LoginController)
router.post('/addProduct',adminC.addProductController)
router.get('/showproduct',adminC.showProductController)










module.exports = router