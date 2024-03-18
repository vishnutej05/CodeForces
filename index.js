const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cfroute = require("./cf-route");
// cors
app.use(
  cors({
    origin: "*",
  })
);
// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// routes
// app.use("/codechef", ccrouter);
// app.use("/leetcode", lcrouter);
// app.use("/hr", hrrouter);
app.use("/cf", cfroute);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
