const express = require("express");
const router = express.Router();
const User = require("../models/user");

// get a list of users from the database
router.get("/", function (req, res, next) {
  User.find({})
    .then(function (users) {
      res.send(users);
    })
    .catch(next);
});

router.get("/:id", function (req, res, next) {
  User.findOne({ _id: req.params.id })
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

// add a new user to database
router.post("/", function (req, res, next) {
  User.create(req.body)
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

// update a user in the database
router.put("/:id", function (req, res, next) {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
    User.findOne({ _id: req.params.id }).then(function (user) {
      res.send(user);
    });
  });
});

// delete a user in the database
router.delete("/:id", function (req, res, next) {
  User.findOneAndDelete({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

module.exports = router;
