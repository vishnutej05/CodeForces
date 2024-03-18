const router = require("express").Router();
const { codeforcesStats } = require("./codeforces.js");

router.get("/:handle", codeforcesStats);

module.exports = router;
