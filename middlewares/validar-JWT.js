const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
    // Leer el token
    const token = req.header("x-token");
    
    if (!token) {
        return res.status(401).json({
        msg: "No hay token en la petición",
        });
    }

    // check if token has expired
    
    const payload = jwt.decode(token, process.env.SECRETORPRIVATEKEY);
    const now = Date.now() / 1000;
    const exp = payload.exp;
    if (now > exp) {
        return res.status(401).json({
        msg: "Token expirado",
        });
    }
    
    try {
        const {email, img, name} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.email = email;
        req.img = img;
        req.name = name;
        next();
    } catch (error) {
        return res.status(401).json({
        msg: "Token no válido",
        });
    }
 
    }

module.exports = {
    validarJWT,
};