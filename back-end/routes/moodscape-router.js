const express = require('express');
const router = express.Router();
const moodscapeQueries = require('../db/queries/moodscape-queries')

// /:startDate&:endDate&:userId
// 'yyyy-mm-dd'

router.get(`/summary/:startDate/:endDate/:userId`, (req, res) => {
  //displays the graph for a user based on the start and end date 

  const userId = req.params.userId;
  const startDate = req.params.startDate;
  const endDate = req.params.endDate;


  //returns an array of moodInfo objects with an id and name
  moodscapeQueries.getMoodNameId()
    .then(moodInfo => {
      console.log("moodInfo:", moodInfo);
      const ids = moodInfo.map(e => e.id.toString());
      const labels = moodInfo.map(e => e.name);
      console.log("ids", ids)
      console.log("labels", labels)
      
      return { ids, labels};
    })
    .then((moodInfo) => {

      const { ids, labels } = moodInfo;

      const moodCountPromises = ids.map(id => {
        return moodscapeQueries.getOccurenceOfMood(id, startDate, endDate, userId)
      });

      Promise.all(moodCountPromises)
      .then((results) => {
        const moodSummary = {
          ids,
          labels,
          data: results
        }
        return res.json({ moodSummary })
        //returns an object with ids: [mood id's], labels: [names], data:[ mood occurences] 
      })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  
});

module.exports = router;
