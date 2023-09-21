const Alert = require("../model/alert");

exports.createAlert = (req, res) => {
  try{
  const alert = new Alert(req.body);
  alert.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json({ doc });
    }
  });
}catch (err) {
  res.status(400).json(err);
}

};

exports.getAllAlerts = async (req, res) => {
  try{
  const alerts = await Alert.find();
  res.json(alerts);
  }catch (err) {
    res.status(400).json(err);
  }
};

exports.nearbyAlerts = async (req, res) => {
  try{
  const alertCoordinates = req.body.coordinates;
  const alerts = await Alert.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: alertCoordinates,
        },
        distanceField: "distance",
        maxDistance: req.body.maxDistanceInMeters,
        spherical: true,
      },
    },
  ]);
  res.json(alerts);
}catch (err) {
  res.status(400).json(err);
}
};

exports.updateAlert = async (req, res) => {
  try {
    const alert = Alert.findByIdAndUpdate(req.params.id, req.body);
    res.json(alert);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteAlert = async (req, res) => {
  try {
    await Alert.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAlertbyId = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);
    res.json(alert);
  } catch (err) {
    res.status(400).json(err);
  }
};