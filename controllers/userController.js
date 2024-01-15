const userModel = require("../models/userModel");

//register controller
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(200).json({
      success: true,
      messaga: "register is successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      messaga: "error in register",
      error: error.messaga,
    });
  }
};

//register
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).json({
        success: false,
        messaga: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      messaga: "Login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      messaga: "error in register",
      error: error.messaga,
    });
  }
};

module.exports = { registerController, loginController };
