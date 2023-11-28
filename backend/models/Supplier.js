import mongoose from "mongoose";

const supplierSchema = mongoose.Schema({
name:{type:String,required:true},
industry:{type:String,required:true},
address:{type:String,required:true},
city:{type:String,required:true},
state:{type:String,required:true},
country:{type:String,required:true},
zip_code:{type:Number,required:true},
rfc:{type:String,required:true},
tax_regime:{type:String,required:true},
main_contact:{type:mongoose.Schema.Types.ObjectId, ref:'Contact'},
cif_document:{type:String,required:true},
proof_address:{type:String,required:true},
document_id:{type:String,required:true},
bank_data:{type:String,required:true},
terms_conditions:{type:String,required:true},
d32_format:{type:String,required:true},
constitutive_act:{type:String}
});

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier;    