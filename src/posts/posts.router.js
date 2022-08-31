const router = require('express').Router()
const { session } = require('passport')
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const PostServices = require("./posts.http")

router.route('/posts')
.get(PostServices.getAll)
.post(passport.authenticate('jwt', {session: false}), PostServices.register)

router.route('/posts/:id')

.get(PostServices.getById)



router.route('/users/me')
.put(passport.authenticate('jwt', {session: false}), PostServices.edit)


router.route('/users/me/post/:id')
.get(passport.authenticate('jwt', {session: false}), PostServices.getByUser)
.get(passport.authenticate('jwt', {session: false}), PostServices.getByUserId)
.delete(passport.authenticate('jwt', {session: false}), PostServices.deleteP)
