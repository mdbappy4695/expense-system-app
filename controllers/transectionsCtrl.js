const tranasectionModel = require("../models/transectionModel");
const moment = require("moment");

const getAllTransection = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;

    const transection = await tranasectionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transection);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      messaga: "error in get transection",
      error: error.messaga,
    });
  }
};

const editTransection = async (req, res) => {
  try {
    await tranasectionModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteTransection = async (req, res) => {
  try {
    await tranasectionModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addtransection = async (req, res) => {
  try {
    const newTransection = new tranasectionModel(req.body);
    await newTransection.save();
    res.status(200).json({
      success: true,
      messaga: "Transection Created",
      newTransection,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      messaga: "error in add transection",
      error: error.messaga,
    });
  }
};

module.exports = {
  getAllTransection,
  deleteTransection,
  editTransection,
  addtransection,
};
