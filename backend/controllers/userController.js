import User from "../models/User.js";
import { validateObjectId, handleNotFoundError } from "../utils/index.js";

//Crear usuario
const createUser = async (req, res) => {
  if (Object.values(req.body).includes("")) {
    const error = new Error("Todos los campos son obligatorios");

    return res.status(400).json({
      msg: error.message,
    });
  }
  try {
    const user = new User(req.body);
    await user.save();

    res.json({
      msg: "Registro exitoso",
    });
  } catch (error) {
    console.log(error);
  }
};

//Obtener usuario
const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log("El usuario no existe");
  }
};

//Obtener usuario por id
const getUserById = async (req, res) => {
  const { id } = req.params;

  //validar id
  if (validateObjectId(id, res)) return;

  //validar existencia
  const user = await User.findById(id);
  if (!user) {
    return handleNotFoundError("El usuario no existe", res);
  }

  //Mostrar el ID
  res.json(user);
};

//Actualizar usuario
const updateUser = async (req, res) => {
  const { id } = req.params;

  //validar id
  if (validateObjectId(id, res)) return;

  //validar existencia
  const user = await User.findById(id);
  if (!user) {
    return handleNotFoundError("El ID no existe", res);
  }

  //Valores nuevos
  user.full_name = req.body.full_name || user.full_name;
  user.email = req.body.email || user.email;
  user.phone_number = req.body.phone_number || user.phone_number;
  user.password = req.body.password || user.password;

  try {
    await user.save();
    res.json({
      msg: "El usuario se actualizó correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

//Eliminar usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  //validar id
  if (validateObjectId(id, res)) return;

  //validar existencia
  const user = await User.findById(id);
  if (!user) {
    return handleNotFoundError("El usuario no existe", res);
  }

  try {
    await user.deleteOne();
    res.json({
      msg: "El usuario se eliminó correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, getUser, getUserById, updateUser, deleteUser };
