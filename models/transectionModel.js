const { default: mongoose } = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const tranasectionModel = mongoose.model("transections", transectionSchema);

module.exports = tranasectionModel;
