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

router.post("/login", async function (req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const result = req.body.password === user.password;
      if (result) {
        res.status(200).send();
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get("/:id", function (req, res, next) {
  User.findOne({ _id: req.params.id })
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

router.post("/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
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
