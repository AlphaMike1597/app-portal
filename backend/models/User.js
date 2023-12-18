import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { uniqueId } from '../utils/index.js';

const userSchema = mongoose.Schema({
    full_name:{type:String,required:true,trim:true},
    position:{type:String},
    email:{type:String,required:true,unique:true,trim:true,lowercase:true},
    phone_number:{type:Number,required:true,trim:true,unique:true},
    password:{type:String,required:true},
    token:{type:String, default:() => uniqueId()},
    verified:{type:Boolean,default:false},
    admin:{type:Boolean, default:false}
});

userSchema.pre('save', async function (next){
    if(this.isModified('passwor')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.checkPassword = async function(inputPassword){
    return await bcrypt.compare(inputPassword, this.password)
}

const User = mongoose.model('User', userSchema);
export default User;