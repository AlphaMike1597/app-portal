import Supplier from '../models/Supplier.js';
import { validateObjectId, handleNotFoundError } from "../utils/index.js";

//CREAR PROVEEDOR
const createSupplier = async (req,res) =>{
    if (Object.values(req.body).includes("")){
        const error = new Error("Todos los campos son obligatorios");

        return res.status(400).json({
            msg: error.message,
        });
    }
    try {
        const supplier = new Supplier(req.body); 
        await supplier.save();
        res.json({
            msg: "Registro exitoso"
        })
    } catch (error) {
        console.log(error);
    }
};

//OBTENER PROVEEDOR
const getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.find()
        res.json(supplier)
    } catch (error) {
        console.log('El proveedor no existe');
    }
};

//OBTENER USUARIO POR ID
const getSupplierId = async (res,req) => {
    const { id } =req.params;

    //validar id
    if(validateObjectId(id,res)) return

    //validar existencia
    const supplier = await Supplier.findById(id);
    if(!supplier){
        return handleNotFoundError('El proveedor no existe', res)
    }

    //mostrar el id
    res.json(supplier)
}

//ACTUALIZAR PROVEEDOR
const updateSupplier = async (req, res) =>{
    const  {id}  = req.params

    //validar id 
    if(validateObjectId(id, res))return;

    //validar existencia 
    const supplier = await Supplier.findById(id);
    if(!supplier){
        return handleNotFoundError('El ID no existe', res);
    }

    //valores nuevos
    supplier.name = req.body.name || supplier.name;
    supplier.industry = req.body.industry ||supplier.industry;
    supplier.address = req.body.address || supplier.address;
    supplier.city = req.body.city || supplier.city;
    supplier.state = req.body.state || supplier.state;
    supplier.country = req.body.country || supplier.country;
    supplier.zip_code = req.body.zip_code || supplier.zip_code;
    supplier.rfc = req.body.rfc || supplier.rfc;
    supplier.tax_regime = req.body.tax_regime || supplier.tax_regime;
    supplier.main_contact = req.body.main_contact || supplier.main_contact;
    supplier.cif_document = req.body.cif_document || supplier.cif_document;
    supplier.proof_address = req.body.proof_address || supplier.proof_address;
    supplier.document_id = req.body.document_id || supplier.document_id;
    supplier.bank_data = req.body.bank_data || supplier.bank_data;
    supplier.terms_conditions = req.body.terms_conditions || supplier.terms_conditions;
    supplier.d32_format = req.body.d32_format || supplier.d32_format;
    supplier.constitutive_act = req.body.constitutive_act || supplier.constitutive_act;

    try {
        await supplier.save();
        res.json({
            msg: 'El usuario se actualizó correctamente'
        })
    } catch (error) {
        console.log(error);
    }
}


//ELIMINAR PROVEEDOR
const deleteSupplier = async (req,res) => {
    const { id } = req.params

    //validar id
    if (validateObjectId(id,res)) return

    //validar existencia
    const supplier = await Supplier.findById(id)
    if(!supplier){
        return handleNotFoundError('El proveedor no existe', res)
    }
    try {
        await supplier.deleteOne()
        res.json({
            msg: 'El proveedor se eliminó correctamente'
        })
    } catch (error) {
        console.log(error);
    }
}

export { createSupplier, getSupplier, getSupplierId, updateSupplier, deleteSupplier}