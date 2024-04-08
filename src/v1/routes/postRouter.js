const express = require('express')
const {createAuthor, createPost, getPosts}  = require('../../controller/postController')
const postValidate = require('../../validator/postValidation')
const authorValidate = require('../../validator/authorSchema')
const validate = require('../../middleware/validate')
const router = express.Router();

router.post('/createAuthor', validate(authorValidate) ,createAuthor);
router.post('/createPost', validate(postValidate) ,createPost);
router.get('/get-post-all', getPosts)

module.exports = router;