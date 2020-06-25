const express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const router = express.Router();
const { getGrocerySections, addGrocerySection, deleteGrocerySection, setDefaultGrocerySection } = require("../controlers/Settings");

// Preserve this order
router.route("/grocerySections").all(ensureAuthenticated).get(getGrocerySections);
router.route("/grocerySections/add").all(ensureAuthenticated).post(addGrocerySection);
router.route("/grocerySections/delete").all(ensureAuthenticated).post(deleteGrocerySection);

router.route("/grocerySections/default").all(ensureAuthenticated).post(setDefaultGrocerySection);

module.exports = router;
