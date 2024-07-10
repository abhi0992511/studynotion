const express=require("express");
const router=express.Router();
const{contactData}=require("../controllers/ContactUs");
router.post("/createContact",contactData);
module.exports=router;