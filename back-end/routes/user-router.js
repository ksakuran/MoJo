const express = require('express');
const router = express.Router();

router.get(`/`, (req, res) => {
  // const mapId = req.params.mapid;
  // pointQueries.getPointsDetailsByMapId(mapId)
  //   .then(results => {
  //     console.log("results:", results);
  //     return res.json({ results });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
});

module.exports = router;
