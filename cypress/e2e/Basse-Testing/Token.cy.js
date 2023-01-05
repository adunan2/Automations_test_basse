var jwt = require('jsonwebtoken')

export function generateToken(user) {
  var u = {
   username: user.username,
   id: user.id
  }

  let tokenSecret = require('crypto').randomBytes(64).toString('hex')

  return jwt.sign({user}, tokenSecret, {expiresIn: '1800s' })
}
// router.use('/secure',function(req, res, next) {
//     var token = req.headers['authorization']
//     if (!token) {
//       res.status(401).send({
//         ok: false,
//         message: 'Toket inválido'
//       })
//     }
  
//     token = token.replace('Bearer ', '')
  
//     jwt.verify(token, password, function(err, token) {
//       if (err) {
//         return res.status(401).send({
//           ok: false,
//           message: 'Toket inválido'
//         });
//       } else {
//         req.token = token
//         next()
//       }
//     });
//   });