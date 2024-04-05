const Joi = require('joi')

export const validationSchema = Joi.object({
    APP_ENV: Joi.string()
        .valid('development', 'production', 'test', 'local')
        .default('local').required(),
    APP_NAME: Joi.string().required(),
    APP_HOST: Joi.string().required(),
    APP_PORT: Joi.number().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_KEY_EXP: Joi.string().required(),
    APP_CONTEXT: Joi.string().required(),
    APP_ORIGINS: Joi.string().required(),
    APP_ALLOWED_HEADERS: Joi.string().required(),
    APP_ALLOWED_METHODS: Joi.string().required(),
    APP_CORS_ENABLED: Joi.boolean().required(),
    APP_SWAGGER_ENABLED: Joi.boolean().required(),
    APP_SWAGGER_PATH: Joi.string().required(),
    BACKEND_URL: Joi.string().required(),
    AUTHORIZATOR_URL: Joi.string().required(),
})