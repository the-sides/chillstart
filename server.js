var http = require("http");
const express = require("express");
const path = require("path");
// const pug = require("pug");
const sass = require("node-sass");
const port = 3000;

let app = express();

// Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set public director
app.use(express.static(path.join(__dirname, "dist")));
// Set styles
// app.use(
//   sass.middleware({
//       src: __dirname + '/sass', //where the sass files are 
//       dest: __dirname + '/public/main.css', //where css should go
//       debug: true // obvious
//   })
// );

// Basic route
let router = express.Router();
app.use(
  "/",
  router.get("/", function(req, res) {
    res.render("home");
  })
);

app.set("port", port);

//create a server object:
let server = http.createServer(app);
server.listen(port); //the server object listens on port 8080
