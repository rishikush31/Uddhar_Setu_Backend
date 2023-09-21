const Response = require("../model/response");
exports.createResponse = (req, res) => {
  try {
    const response = new Response(req.body);

    response.save((err, doc) => {
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

exports.getAllResponses = async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateResponse = async (req, res) => {
    try {
      const response = Response.findByIdAndUpdate(req.params.id, req.body);
      res.json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.deleteResponse = async (req, res) => {
    try {
      await Response.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.getResponsebyId = async (req, res) => {
    try {
      const response = await Response.findById(req.params.id);
      res.json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  };