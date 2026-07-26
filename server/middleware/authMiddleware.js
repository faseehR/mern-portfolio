import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No token provided.",
      });
    }

    
    const jwtToken = token.replace("Bearer ", "");

   
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;