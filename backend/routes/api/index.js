const router = require('express').Router();
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.get('/test', (req, res) => {
  res.json({ message:"Hello World" });
});

module.exports = router;
