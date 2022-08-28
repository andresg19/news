const { default: mongoose } = require("mongoose");
const { where } = require("../models/news");
const model = require("../models/news");

//obtener data de la db
exports.getNews= (req, res) => {
  model.find({}, (err, docs) => {
    res.status(200).send({
      docs,
    });
  });
};

//obtener paciente por id
exports.getNewsId = (req, res) => {
  const { id } = req.params;
  model.findById(
    {
      _id: parseId(req.params.id),
    },
    (err, docs) => {
      err ? res.send(err) : res.send(docs);
    }
  );
};


// exports.getNewsDate = async (req, res) => {
//   const { lastName } = req.query;
//   console.log(lastName);
//   await model.find({ lastName }, (err, docs) => {
//     err ? res.send(err) : res.send(docs);
//   });
// };

//insertar pacientes a la db
exports.postNews = (req, res) => {
  const data = req.body;

  model.create(data, (err, docs) => {
    if (err) {
      res.status(404).send({ error: "Error" });
    } else {
      res.send({ data: docs });
    }
  });
};

//Funcion para convertir el id que llega por params a un objectId, sirve para modificar y eliminar pacientes.
const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

//Modificar un paciente
exports.putNews = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log(body);
  model.updateOne({ _id: parseId(req.params.id) }, body, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};



exports.deleteNews = (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(req.params.id) }, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};
