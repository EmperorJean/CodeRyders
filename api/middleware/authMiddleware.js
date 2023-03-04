const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const verified = jwt.verify(token, "[Code Ryders UserAuth Secret]");
    req.user = verified.user;
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = { requireAuth };
