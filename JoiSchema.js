const Joi = require("joi");

module.exports.diarySchema = Joi.object({
  diary: Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    cost: Joi.number().required().min(0),
    location: Joi.string().required(),
    description: Joi.string().required().min(50),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports.likeSchema = Joi.object({
  like: Joi.object({
    count: Joi.number().min(0),
  }).required(),
});
