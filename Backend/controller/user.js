const regSchema = require('../model/RegSchema')


exports.RegController = async(req,res)=>{
    console.log(req.body)
    const {firstName,lastName,email,password} = req.body
    const record =  new regSchema({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
     })
     await record.save()
}


exports.LoginController = async(req,res)=>{
    try {
        const {email,password} = req.body
        const existdata =  await regSchema.findOne({email:email})
        if (existdata.password == password) {
            res.status(201).json({
                message:"login successfully"
            })
        }else{
            res.status(500).json({
                message:"email or password does not match"
            })
        }
    } catch (error) {
        res.json(error)
    }
  
}