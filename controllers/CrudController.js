const connection = require('../database/db')
const { use } = require('../routes/router')

exports.showIndexView = (req, res) => {
  connection.query('SELECT * FROM users WHERE deleted_at IS NULL', (error, results) => {
    if (error) {
      throw error
    } else {
      res.render('index', { results })
    }
  })
}

exports.showCreateView = (req, res) => {
  res.render('create')
}

exports.postCreateUser = (req, res) => {
  const name = req.body.userName
  const role = req.body.userRole

  const query = 'INSERT INTO users (name, role) VALUES (?, ?)'
  connection.query(query, [name, role], (err, results) => {
    if (err) {
      console.error('Error al insertar usuario:', err)
      return res.status(400).json({
        message: 'Faltan datos necesarios',
      })
    }
    res.redirect('/')
  })
}

exports.showEditView = (req, res) => {
  const userID = req.params.id
  const query = 'SELECT * FROM users WHERE id=?'
  connection.query(query, [userID], (err, results) => {
    if (err) {
      console.error('Error al consultar el usuario:', err)
      return res.status(400).json({
        message: 'Faltan datos necesarios',
      })
    }
    res.render('edit', { user: results[0] })
  })
}

exports.postEditUser = (req, res)  => {
  const userID = req.params.id
  const { userName, userRole } = req.body
  const query = 'UPDATE users SET name = ?, role = ? WHERE id = ?'
  connection.query(query, [userName, userRole, userID], (err, results) => {
    if (err) {
      console.error('Error al actualizar el usuario:', err)
      return res.status(500).send('Error al actualizar el usuario.')
    }

    res.redirect('/')
  })
}


exports.postDeleteUser = (req, res) => {
  const userID = req.params.id
  const query = 'UPDATE users SET deleted_at = NOW() WHERE id = ?'
  console.log(userID)
  connection.query(query, [userID],  (err, results) => {
    if (err) {
      console.error('Error al actualizar deleted_at:', err)
      return res.status(500).send('Error al actualizar el usuario.')
    }
  
    res.redirect('/')
  })
}


