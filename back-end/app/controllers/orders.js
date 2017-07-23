import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  res.json('Message saved!')
})

export default router
