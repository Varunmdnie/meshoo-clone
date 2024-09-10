let User = require('../model/user')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')



let register = async (req,res) =>{
    let {firstName,lastName,email,password,phoneNumber} = req.body

    let salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    
    let user = new User({firstName,lastName,email,password,phoneNumber})

    await user.save()
    res.send(user)

}

let login = async (req,res) =>{
    let {email,password} = req.body
    let user = await User.findOne({"email":email})
    if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
    }
    let payload = {id:user.id}

      let isValidPwd = await bcrypt.compare(password,user.password)
      if(!isValidPwd){
        res.status(400).send('password not valid')
      }
      else{
        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            (err, token) => {
                if (err){
                    throw err
                }
                else{
                    res.send(token)
                }
            })
     
}
}

module.exports = {login,register}