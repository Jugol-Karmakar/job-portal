const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

const userRoute = require("./routes/user.route");
const adminRoute = require("./routes/admin.route");
const generalRoute = require("./routes/general.route");
const candidateRoute = require("./routes/candidate.route");
const hiringManagerRoute = require("./routes/hiringManager.route");

app.use(cors());
app.use(express.json());

app.use("/api/", generalRoute);
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/", candidateRoute);
app.use("/api/", hiringManagerRoute);

require("./config/dbConfig");

app.get("/", (req, res) => {
  res.send("Job Portal");
});

app.listen(port, () => {
  console.log(`Job Portal listening on port ${port}`);
});
