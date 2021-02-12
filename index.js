const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const { getMaxListeners } = require("process");


const app= express ();

// ------------------------------ Connect Database to Mongo Atlas ----------------------- //

// connectDB();

// ------------------------------------------------------------------------------------- //

// ------------------------------ Body Parser inside Express Now ----------------------- //

app.use(express.json({extended: false}));

// ------------------------------------------------------------------------------------- //
var corsOptions ={
  origin: "http://localhost:3000",
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// ------------------------------ Use Routes For backend Server ----------------------- //

app.get("/", (req, res) => res.send("API running"));

// ------------------------------------------------------------------------------------- //

// --------------------------------------- Define Routes ------------------------------- //

// app.use("/api/auth", require("./routes/api/"));

// ------------------------------------------------------------------------------------- //

// Serve Static Assets in production

if (process.env.NODE_ENV === "production") {
  // Set static Folder
  app.use(express.static("client/build"))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

