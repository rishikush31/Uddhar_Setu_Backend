const Alert = require("../model/alert");
exports.createAlert = (req, res) => {
  const alert = new Alert(req.body);

  alert.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json({ doc });
    }
  });
};

exports.getAllAlerts = async (req, res) => {
  const alerts = await Alert.find();
  res.json(alerts);
};



