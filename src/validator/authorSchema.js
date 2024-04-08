const Joi = require('joi');


const authorSchema = {
    body: Joi.object().keys({
        name: Joi.string().required()
    })
}

module.exports = authorSchema;