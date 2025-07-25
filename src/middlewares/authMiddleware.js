import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

export const auth = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No Token Provided" })
        }

        const verifyToken = jwt.verify(token, "51dae3a097f8ab5708d4b8094e2d3540684a150cd02fa0863dc0c685c93808b4")
        if (!verifyToken) {
            return res.status(401).json({ message: "Invalid Token" })
        }

        req.user = verifyToken;

    } catch (error) {
        return res.status(400).json({ message: "Authentication error", error: error.message });
    }
    next();
};