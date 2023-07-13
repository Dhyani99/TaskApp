const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// get a list of tasks from the database
router.get("/", function (req, res, next) {
  Task.find({})
    .then(function (tasks) {
      console.log("reaching correct path");
      res.send(tasks);
    })
    .catch(next);
});

router.get("/:id", function (req, res, next) {
  Task.findOne({ _id: req.params.id })
    .then(function (task) {
      res.send(task);
    })
    .catch(next);
});

router.get("/user/:userId", function (req, res, next) {
  Task.find({ userid: req.params.userId })
    .then((result) => {
      res.status(200).json({ result: result });
    })
    .catch(next);
});

// add a new task to database
router.post("/", function (req, res, next) {
  Task.create(req.body)
    .then(function (task) {
      res.send(task);
    })
    .catch(next);
});

// update a task in the database
router.put("/:id", function (req, res, next) {
  Task.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (task) {
    Task.findOne({ _id: req.params.id }).then(function (task) {
      res.send(task);
    });
  });
});

// delete a task in the database
router.delete("/:id", function (req, res, next) {
  Task.findOneAndDelete({ _id: req.params.id }).then(function (task) {
    res.send(task);
  });
});

module.exports = router;
