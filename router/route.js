const express = require("express");
const router = express.Router();
const multer = require("multer");
// Configure Multer to store files in memory
const upload = multer({ storage: multer.memoryStorage() });

// Debug API
router.get("/debug", (_, res) => {
  let data = "😍";
  return res.send({ data: data });
});

module.exports = router;