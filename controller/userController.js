const User = require('../model/user');


exports.createUser= (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
      console.log({ err, doc });
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json({doc});
      }
    });
};

exports.getAllUsers= async (req, res) => {
const users = await User.find();
  res.json(users);
};
  