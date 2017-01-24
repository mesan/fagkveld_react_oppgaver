const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    imageUrl: Joi.string().uri({ scheme: ['http', 'https'] }),
    leadText: Joi.string().required(),
    text: Joi.string().required(),
    category: Joi.string().required()
});

module.exports = val => {
    return new Promise((resolve, reject) => Joi.validate(val, schema, (err, schema) => {
        if (err) {
            return reject(err);
        }

        resolve(val);
    }));
};
