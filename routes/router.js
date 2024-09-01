const express = require('express')
const router = express.Router()

const crud = require('../controllers/CrudController')

// GET Mostrar registros
router.get('/', crud.showIndexView)

router.route('/create')
  // GET Render Formulario de creación
  .get(crud.showCreateView)
  // POST Crear usuario
  .post(crud.postCreateUser)

module.exports = router