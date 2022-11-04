const express = require("express")
const userSchema = require("../models/user")

const router = express.Router()

// Aqui creo un usuario

router.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

// Aqui obtengo todos los usuarios creados previamente

router.get("/users", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // muestro un usuario en especifico
  router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // aqui borro un usuario 
  
  router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
// Actualizacion de informacion de un usuario 

  router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, username, fechanac, email, contraseña } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { nombre, username,fechanac, email, contraseña} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router
