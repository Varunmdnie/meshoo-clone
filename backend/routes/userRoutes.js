
let express = require('express')
let {register,login}  = require('../controllers/userController')

let router = express.Router()

router.post('/register',register)
router.post('/login',login)

module.exports = router