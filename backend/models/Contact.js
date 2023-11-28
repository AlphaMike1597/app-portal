import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
     full_name:{type:String,required:true},
     email:{type:String,required:true},
     position:{type:String,required:true},
     phone_number:{type:String,required:true},
     password:{type:String,required:true},
})

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;