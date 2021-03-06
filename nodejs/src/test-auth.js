const PORT = process.env.PORT || 4000;
const server = require("./server");

async function main() {
  server.listen(PORT, () => {
    console.log("server is listening on port", PORT);
  });
}

main().catch(async (error) => {
  console.log(error);
  await MongoDB.close();
  process.exit(1);
});

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.model");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/test", function (req, res) {
  res.send("ok");
});

module.exports = app;
