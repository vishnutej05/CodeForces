const router = require("express").Router();
const { fetchSubmissions } = require("./codeforces.js");

router.get("/:handle", fetchSubmissions);

module.exports = router;
