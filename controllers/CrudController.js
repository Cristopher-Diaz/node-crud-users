const connection = require('../database/db')

exports.showIndexView = (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    } else {
      console.log(results)
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


