import { Router } from 'express'
import jwt from 'jsonwebtoken'
import R from 'ramda'

import Users from '../models/users.js'
import authMiddleWare from '../middlewares/authMiddleware.js'
import { redisInstance } from '../models/db.js'
import { getToken, unAuthorizeUser } from '../utils/helpers.js'

const router = Router()

router.post('/login', async(req, res, next) => {
  const { username, password } = req.body
  try {
    const user = await Users.findOne({ username })

    if (!user) throw { message: "Your credentials is not right!" }

    const isMatched = await user.comparePassword(password)

    if (!isMatched) throw { message: "Your credentials is not right!" }

    const refinedUser = R.omit(['password'], user.toObject())

    const token = jwt.sign(refinedUser, req.app.get('secret'), { expiresIn: '30m' })

    res.setHeader('x-access-token', token)
    return res.json(refinedUser)

  } catch (err) {
    console.log(err);
    res.status(401).json(err)
  }
})




router.post('/signup', async(req, res, next) => {
  const { username, password } = req.body

  try {
    const existingUser = await Users.findOne({ username })

    if (existingUser) return res.status(409).json({ err: 'Username already exists!' })


    const newUser = new Users({ username, password })

    newUser.save((err) => {
      if (err) res.send(err)
      res.json({ 'message': 'Account created!' })
    })

  } catch (err) {
    res.status(500).send(err)
  }

})



router.get('/currentUser', authMiddleWare, (req, res, next) => {
  res.json(req.currentUser)
})




router.get('/logout', (req, res) => {
  const token = getToken(req)
  redisInstance.sadd(['logOutTokens', token], (err, reply) => {
    if (err) throw err
    return unAuthorizeUser(res)
  })
})

export default router
