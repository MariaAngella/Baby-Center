const express = require("express");
const router = express.Router();
const Register = require("../models/informermodel");

const mongoose = require("mongoose");

router.get("/:id", async (req, res) => {
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

module.exports = router;
