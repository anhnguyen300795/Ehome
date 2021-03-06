import { Router } from 'express'
import path from 'path'
import fs from 'fs'

import orderController from './orders.js'

import Posts from '../models/posts.js'
import authMiddleWare from '../middlewares/authMiddleware.js'

import { buildQueryOpts } from "../utils/helpers.js";

const router = Router()

router.get('/', (req, res, next) => {
  const newQuery = buildQueryOpts(req.query)
  Posts.find(newQuery, (err, posts) => {
    console.log(err);
    return res.json(posts)
  })
})

router.route('/:id')

.get((req, res) => {
  const { id } = req.params
  Posts.findOne({ id }, (err, post) => {
    if (!post) return res.status(404).send()
    res.json(post)
  })
})

.put((req, res) => {
  const { id } = req.params
  Posts.findOneAndUpdate({ id }, req.body, { new: true }, (err, post) => {
    res.json(post)
  })

})

.delete((req, res) => {
  const { id } = req.params
  Posts.findOneAndRemove({ id }, (err, offer) => {
    res.send(id + "is deleted successfully")
  })
})

router.use('/orders', orderController)

export default router
