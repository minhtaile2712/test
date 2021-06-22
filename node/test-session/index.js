require("dotenv").config();

const express = require("express");
const app = express();

var morganLogger = require("morgan");
app.use(morganLogger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session = require("express-session");
const MongoStore = require("connect-mongo");

const SECRET = process.env.SECRET || "topsecret";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
const sessionOptions = {
  cookie: { maxAge: 1000 * 60 * 60 },
  resave: false,
  saveUninitialized: true, //should be false
  secret: SECRET,
  store: new MongoStore({ mongoUrl: MONGODB_URI }),
};
app.use(session(sessionOptions));

app.get("/", (req, res, next) => {
  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }
  res.send(`<h1>hello world ${req.session.viewCount} times</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
