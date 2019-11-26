const express = require("express");
const router = express.Router();
const Register = require("../models/informermodel");

const mongoose = require("mongoose");

/* Routes */
//Get reads the registerform.pug and displays it on the path

// const Informer = mongoose.model("Register", registerSchema);

router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("landingpage", { informers: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});


module.exports = router;
