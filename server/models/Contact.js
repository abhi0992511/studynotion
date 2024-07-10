const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  firstname: {
    type: "String",
    required: true,
  },
  lastname: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  countrycode: {
    type: "String",
    required: true,
  },
  phonenumber: {
    type: "String",
    required: true,
  },
  message: {
    type: "String",
    required: true,
  },
  createdAt: {
		type: Date,
		default: Date.now,
		expires: 2*24*60* 60, 
	}
});
module.exports = mongoose.model("Contact", contactSchema);
