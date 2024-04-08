const Joi = require('joi');

const postSchema = {
    body: Joi.object().keys({
        imageUrl: Joi.string().optional(),
        title: Joi.string().required(),
        body: Joi.string().optional(),
        authorId: Joi.string().optional()
    }),
};

module.exports = postSchema

