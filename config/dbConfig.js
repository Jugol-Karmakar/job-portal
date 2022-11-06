const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tsszmfv.mongodb.net/acc-server?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
