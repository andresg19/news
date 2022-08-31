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

exports.postLog = (req, res) => {
    const user = model.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
        return res.json({status: 'ok', user: true})
    } else {
        return res.json({status: 'error', user: false})
    }

}