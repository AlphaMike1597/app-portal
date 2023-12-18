import User from '../models/User.js'
import { sendEmailVerification } from '../email/authEmailService.js';

const register = async(req,res) => {
    //Validar Campos
    if(Object.values(req.body).includes("")){
        const error = new Error("Todos los campos son obligatorios");
        return res.status(400).json({msg: error.message});  
    }

    const { email, password, full_name } = req.body
    //Evitar registros duplicados
    const userExist = await User.findOne({ email })
    if(userExist){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }


    //Validar extensión del password
    const MIN_PASSWORD_LENGTH = 12
    if(password.trim().length < MIN_PASSWORD_LENGTH){
        const error = new Error(`El password debe de contener al menos ${MIN_PASSWORD_LENGTH} carateres`)
        return res.status(400).json({msg: error.message})
    }
    try {
        const user = new User(req.body)
        const result = await user.save()

        const { full_name, email, token }  = result
        sendEmailVerification({full_name,email,token})

        res.json({
            msg:'El usuario se creó exitosamente, favor de confirmar el email'
        })
    } catch (error) {
        console.log(error);
    }
}

const verifyAccount = async (req,res) => {
    const { token } = req.params

    const user = await User.findOne({token})
    if(!user){
        const error = new Error('Token no válido') 
        return res.status(401).json({msg:error.message})
    }

    //Si el token es válido, confirmar cuenta
    try {
        user.verified = true 
        user.token = ' '
        await user.save()
        res.json({msg: 'Usuario confirmado correctamente'})
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const {email, password } = req.body

    //Comprobar existencia del usuario
    const user = await User.findOne({email})
    if(!user){
        const error = new Error('El usuario no existe') 
        return res.status(401).json({msg:error.message})
    }

    //Comprobar si el usuario confirmó su cuenta
    if(!user.verified){
        const error = new Error('Cuenta no verificada') 
        return res.status(401).json({msg:error.message})
    }

    //Comprobar el password
    if(await user.checkPassword(password) ){
        res.json({
            msg:"Usuario Autentificado"
        })
    } else {

        const error = new Error('Contraseña incorrecta') 
        return res.status(401).json({msg:error.message})

    }
}

export {

    register,
    verifyAccount,
    login
    
}