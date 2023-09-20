const Agency = require("../model/agency");
const maxDistanceInMeters = 5000; 
exports.addAgency = (req, res) => {
  const agency = new Agency(req.body);

  agency.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json({ doc });
    }
  });
};

exports.getAllAgencies = async (req, res) => {
  const agency = await Agency.find();
  res.json(agency);
};

exports.nearbyAgencies = async (req, res) => {
  const alertCoordinates = req.body.coordinates;
  const agency = await Agency.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: alertCoordinates,
        },
        distanceField: "distance",
        maxDistance: maxDistanceInMeters,
        spherical: true,
      },
    },
  ]);
  res.json(agency);
};
