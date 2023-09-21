const Request = require("../model/request");
exports.createRequest = (req, res) => {
  try {
    const request = new Request(req.body);

    request.save((err, doc) => {
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

exports.getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.updateRequest = async (req, res) => {
    try {
      const request = Request.findByIdAndUpdate(req.params.id, req.body);
      res.json(request);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.deleteRequest = async (req, res) => {
    try {
      await Request.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.getRequestbyId = async (req, res) => {
    try {
      const request = await Request.findById(req.params.id);
      res.json(request);
    } catch (err) {
      res.status(400).json(err);
    }
  };