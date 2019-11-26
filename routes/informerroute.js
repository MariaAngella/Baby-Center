const express = require("express");
const router = express.Router();
const Register = require("../models/informermodel");




/* Routes */
//Get reads the registerform.pug and displays it on the path
router.get("/", (req, res) => {
  res.render("informer");
  res.sendFile(__dirname + '/informer')
});


//extracts all data for the database and displays it
router.post("/", async (req, res) => {
  const register = new Register(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await Register.find();
    res.render("informerfb", { informers: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});

module.exports = router;