const Joi = require('joi')
const pick = require('../utils/pick')
const validate = (schema) => (req, res, next) =>{
    console.log('it is work')
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    
    const {value, error} = Joi.compile(validSchema).prefs({errors: {label: 'key'}, abortEarly: false}).validate(object);

    if(error){
        const errorMessage = error.details.map((detail)=> detail.message).join(', ');
        return next();
    }

    Object.assign(req, value);

    return next();
}

module.exports = validate