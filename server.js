// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
