import Joi from "joi";

export const userValidationSchema = Joi.object({
    fullName: Joi.string(),
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .lowercase()      
        .trim()            
        .pattern(/^\S*$/), 
    password: Joi.string()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$"))
        .required(),
    confirmPassword: Joi.ref('password'),
    gender: Joi.string()
        .valid("male", "female")
        .required()
});


export const loginValidationSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .required(),
});