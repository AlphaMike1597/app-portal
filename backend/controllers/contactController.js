import Contact from "../models/Contact.js";
import { validateObjectId, handleNotFoundError } from "../utils/index.js";


//Crear Contacto principal
const createContact = async(req,res) => {
    if(Object.values(req.body).includes("")){
        const error = new Error("Todos los campos son obligatorios");

        return res.status(400).json({
            msg: error.message
        });
    }
    try {
        const contact = new Contact(req.body);
        await contact.save()
        res.json({
            msg: "Registro Exitoso",
        })
    } catch (error) {
        console.log(error);
    }
};

//Obtener contacto principal
const getContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        res.json(contact)
    } catch (error) {
        console.log('El contacto no existe');
    }
}


//Obtener contacto por id
const getContactById = async (req, res) => {
    const { id } = req.params;
    
    //validar id
    if(validateObjectId(id,res)) return

    //validar existencia
    const contact = await Contact.findById(id)
    if (!contact){
        return handleNotFoundError('El usuario no existe', res)
    }

    //mostrar id
    res.json(contact)
}

//Actualizar contacto
const updateContact = async (req,res) => {
    const { id } = req.params

    //validar id
    if(validateObjectId(id,res)) return

    //validar existencia
    const contact = await Contact.findById(id)
    if (!contact){
        return handleNotFoundError('El ID no existe', res)
    }

    //valores nuevos
    contact.full_name = req.body.full_name || contact.full_name
    contact.email = req.body.email || contact.email
    contact.position = req.body.position || contact.position
    contact.phone_number = req.body.phone_number|| contact.phone_number
    contact.password = req.body.password|| contact.password

    try {
        await contact.save()
        res.json({
            msg: 'El contacto principal se actualizó correctamente'
        })
    } catch (error) {
        console.log(error);
    }
}

//eliminar usuario
const deleteContact = async(req,res) =>{
    const {id} = req.params

    //validar id
    if(validateObjectId(id,res)) return

    //validar existencia
    const contact = await Contact.findById(id)
    if(!contact){
        return handleNotFoundError('El contacto no existe', res)
    }
    try {
        await contact.deleteOne()
        res.json({
            msg: 'El usuario se eliminó correctamente'
        })
    } catch (error) {
        console.log(error);
    }
}

export { createContact, getContact, getContactById, updateContact, deleteContact }