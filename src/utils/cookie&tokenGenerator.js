import jwt from "jsonwebtoken";

export const cookieAndtokenGenerator = (userId, res) => {
    try {
        const token = jwt.sign({ id: userId }, "51dae3a097f8ab5708d4b8094e2d3540684a150cd02fa0863dc0c685c93808b4", { expiresIn: "15d" });
        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: false, 
            sameSite: "strict",
        });
        return token;

    } catch (err) {
        console.error("Error generating token:", err.message);
        res.status(500).json({ message: "Error generating authentication token" });
    }
}