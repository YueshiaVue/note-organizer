const express = require("express");
const app = express();
const PORT = process.env.PORT || 1000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });