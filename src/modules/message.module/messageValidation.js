import Joi from "joi";

export const messageValidationSchema = Joi.object({
    message: Joi.string().required()
});

