require("dotenv").config();
// const server = require("express")();
const server = require("./api/server");

const port = process.env.PORT || 3300;

// server.get("/", (req, res) => {
//   res.send("welcome");
// });
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
