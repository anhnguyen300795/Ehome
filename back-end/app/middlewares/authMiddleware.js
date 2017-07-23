import jwt from 'jsonwebtoken';
import { redisInstance } from '../models/db.js'
import { unAuthorizeUser } from '../utils/helpers.js'

const checkAuth = (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) {
    return unAuthorizeUser(res)
  }

  redisInstance.sismember('logOutTokens', token, (err, reply) => {
    if (err) throw err;
    if (reply) return unAuthorizeUser(res)

    jwt.verify(token, req.app.get('secret'), function(err, decoded) {
      if (err) {
        return unAuthorizeUser(res)
      } else {
        req.currentUser = decoded
        next();
      }
    })

  })

}

export default checkAuth
