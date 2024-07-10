const Contact = require("../models/Contact");
exports.contactData = async (req, res) => {
  try {
    const { firstname, lastname, phonenumber, email, message,countrycode } = req.body;
    if (!firstname || !lastname || !phonenumber || !email || !message||!countrycode) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const contactData = await Contact.create({
      firstname,
      lastname,
      phonenumber,
      email,
      message,
      countrycode
    });
    res.status(200).json({
      success: true,
      message: "Contact saved successfully.",
      data: contactData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
