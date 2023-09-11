const Joi = require("joi");

const personSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).max(150).required(),
});

const validatePerson = (req, res, next) => {
  const { error } = personSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validatePerson;
