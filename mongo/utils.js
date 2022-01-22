require("mongoose");
const User = require("./user");

const addUser = async (req, res) => {
  console.log(req.body);
  const user = {
    user_id: req.body.user_id,
    name: req.body.name,
    cash: req.body.cash,
    credit: req.body.credit,
  };
  try {
    const newUser = new User(user);
    const createdUser = await newUser.save();
    res.send(createdUser);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { addUser };
