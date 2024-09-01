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

router.route('/edit/:id')
  // GET Render Formulario de edición
  .get(crud.showEditView)
  // POST Edición de un usuario
  .post(crud.postEditUser)

// POST Borrar usuarios 
router.get('/delete/:id', crud.postDeleteUser)

module.exports = router