const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());
// routes

//  register and login routes
app.use("/auth", require("./routes/jwtAuth"));
// dashboard route
app.use("/dashboard", require("./routes/Dashboard"));

app.listen(5000, () => {
  console.log("server running on port 5000");
});
