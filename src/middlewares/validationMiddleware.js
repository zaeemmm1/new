export default function validationMiddleWare(schema) {
    return async (req, res, next) => {
        try {
            const data = await schema.validateAsync(req.body);
            req.body = data
        } catch (err) {
            if (err.isJoi) {
                return res.status(400).json({message:`Validation error`});
            }
        }
        next()
    }
}