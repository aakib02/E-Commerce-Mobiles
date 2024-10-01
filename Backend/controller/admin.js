const adminProductSchema = require('../model/adminProductSchema')

exports.addProductController = async(req,res)=>{
    try {
        const {AddProduct} = req.body
        const record = new adminProductSchema({
        Pname:AddProduct.Pname,
        Pprice:AddProduct.Pprice,
        Pdesc:AddProduct.Pdesc,
        })
        await record.save()  
        res.status(201).json({
            message:'product added successfully'
        })
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.showProductController =  async(req,res)=>{
   const record =  await adminProductSchema.find()
   res.status(200).json({
    data: record,
    message:'successfully data received'
   })
}