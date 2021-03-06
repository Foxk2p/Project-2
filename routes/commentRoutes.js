const router = require('express').Router()
const { User, Post, Comment } = require('../models')

// GET all posts
router.get('/comments', (req, res) => {
  Comment.findAll()
    .then(posts => res.json(posts))
    .catch(err => console.error(err))
})

// GET specific post
router.get('/comments/:id', (req, res) => {
  Comment.findOne({ commentId: req.params.id })
    .then(post => res.json(post))
    .catch(err => console.error(err))
})

//POST new post
router.post('/comments', (req, res) => {
  Comment.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT one post
router.put('/comments/:id', (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one post
router.delete('/comments/:id', (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router