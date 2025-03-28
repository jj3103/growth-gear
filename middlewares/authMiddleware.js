import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const DEV_TOKEN = jwt.sign({ id: "test-user", role: "admin" }, JWT_SECRET);

console.log("\nDevelopment Token (for testing):\n", DEV_TOKEN, "\n");

export default function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token format" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      throw new Error("Invalid token");
    }
  } catch (error) {
    next(error);
  }
}
