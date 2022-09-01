const { default: mongoose } = require("mongoose");
const { where } = require("../models/users");
const model = require("../models/users");


exports.postUsers = (req, res) => {
    const data = req.body;
    console.log(data)
  
    model.create(data, (err, docs) => {
      if (err) {
        console.log(err)
        res.status(404).send({ error: "Error" });
      } else {
        res.send({ data: docs });
      }
    });
  };

exports.log = (req, res) => {
     model.findOne({
      email: req.body.email,
      password: req.body.password,
     },
     (err, docs) => {
      res.status(200).send({
        docs,
      });
    }
    )
}

exports.getUsers= (req, res) => {
  model.find({}, (err, docs) => {
    res.status(200).send({
      docs,
    });
  });
};