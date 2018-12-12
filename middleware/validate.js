const joi = require('joi');

const schema = {
    userName: joi.string().required(),
    password: joi.string().required().min(5).max(15)
};

module.exports = schema;