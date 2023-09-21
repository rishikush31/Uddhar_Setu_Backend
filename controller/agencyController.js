const Agency = require("../model/agency");

exports.addAgency = (req, res) => {
  try {
    const agency = new Agency(req.body);
    agency.save((err, doc) => {
      console.log({ err, doc });
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json({ doc });
      }
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateAgency = async (req, res) => {
  try {
    const agency = Agency.findByIdAndUpdate(req.params.id, req.body);
    res.json(agency);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteAgency = async (req, res) => {
  try {
    await Agency.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAgencybyId = async (req, res) => {
  try {
    const agency = await Agency.findById(req.params.id);
    res.json(agency);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllAgencies = async (req, res) => {
  try {
    const agencies = await Agency.find();
    res.json(agencies);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.nearbyAgencies = async (req, res) => {
  try {
    const alertCoordinates = req.body.coordinates;
    const agency = await Agency.aggregate([
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
    res.json(agency);
  } catch (err) {
    res.status(400).json(err);
  }
};
