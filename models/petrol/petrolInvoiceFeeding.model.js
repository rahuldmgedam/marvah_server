const mongoose = require("mongoose")

const petrolInvoiceFeddingSchema = mongoose.Schema({
    ProductName:{type:String, required:true},
    Value:{type:String, required:true},
    cess:{type:Number},
    // gstrate:{type:Number, required:true},
    invoiceNumber:{type:String, required:true},
    klQty:{type:String, required:true},
    // lfrRate:{type:Number, required:true},
    productAmount:{type:Number, required:true},
    rate:{type:Number, required:true},
    serialNumber:{type:Number, required:true},
    taxamount:{type:Number, required:true},
    tcs:{type:Number},
    totalAmount:{type:Number, required:true},
    vat:{type:Number, required:true},
    vatlst:{type:Number, required:true},
    vatPercent:{type:Number,},
    date:{type:String, default:new Date()},
    show:{type:Boolean, default:false},
    productAmountSumTds:{type:Number},
    tds:{type:Number},
    totTaxAmount:{type:Number}, 
    lfrPerKl:{type:Number},
    TotPayableTds:{type:Number},
    lfrTotal:{type:Number},
    cgst:{type:Number},
    sgst:{type:Number},
    tdsLfr:{type:Number},
    totalLfrValue:{type:Number},//all above single prodict value and total
    totCgst:{type:Number},//below sum total of all products
    totSgst:{type:Number},
    TotTdsLfrPayable:{type:Number},
    totInvoiceAmt:{type:Number},
    total:{type:Number},
    totaSum:{type:Number},
    totCgstSum:{type:Number},
    totSgstSum:{type:Number},
    totalLfrValueSum:{type:Number},
    InvTotSum:{type:Number},


},
{
    versionKey:false
},{
timestamps:true
})

const ProductPetrolFeedingModel = mongoose.model("petrolInvoiceFedding", petrolInvoiceFeddingSchema) 

module.exports = {
    ProductPetrolFeedingModel
}