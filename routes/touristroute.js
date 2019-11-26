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
    res.render("tourist", { informers: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});

router.get("/touristfb/:id", (req, res) => {
  let mongo_id = req.params.id;
  Register.findById(mongo_id).then(
    //query the collection
    item => {
      //{users:items}--variable name users---passes all the items to the next page/for i.e list

      if (item) res.render("touristfb", { informer: item });

      res.render("404");
    }
  );
});

//extracts all data for the database and displays it
// router.post("/", async (req, res) => {
//   const register = new Register(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
//   try {
//     await register.save();
//     console.log("Item has been saved");
//     const items = await Register.find();
//     res.render("ranger", { informers: items });
//   } catch (err) {
//     //.catch promise and used because nodejs asyncronously waits
//     res.status(500).send("unable to save to database");
//   }
// });

module.exports = router;

// router.post("/ranger", async (req, res) => {
//   const register = new Register(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
//   try {
//     await register.save();
//     console.log("Item has been saved");
//     const items = await Register.find();
//     res.render("rangerfb", { informers: items });
//   } catch (err) {
//     //.catch promise and used because nodejs asyncronously waits
//     res.status(500).send("unable to save to database");
//   }
// });

// module.exports = router;
