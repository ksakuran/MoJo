const express = require('express');
const { addCustomChecklistItem } = require('../db/queries/checklist-queries');
const router = express.Router();
const checklistQueries = require('../db/queries/checklist-queries');

router.get('/item/:userId', (req, res) => {
  const userId = req.params.userId;
  const activeChecklist = checklistQueries.getChecklistItemsByUserId(userId, true);
  const inActiveChecklist = checklistQueries.getChecklistItemsByUserId(userId, false);
  Promise.all([activeChecklist, inActiveChecklist])
    .then(checklistItems => {
      return res.json({ checklistItems });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//add default checklist items upon registration or custom items from user input
router.post('/item/new', (req, res) => {
  const body = req.body;
  const { isInitial, checklistItemDesc, userId } = body;
  const query = isInitial === 'true'
    ? checklistQueries.addChecklistItem(userId)
    : checklistQueries.addCustomChecklistItem(checklistItemDesc, userId);
  query
    .then(checklistItem => {
      res.json({ checklistItem });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/item/status/', (req, res) => {
  const body = req.body;
  checklistQueries.updateChecklistItemStatus(body)
    .then(checklistItem => {
      res.json({ checklistItem });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//get checklist selection for current user for selected date
router.get('/selection/:daySelectionId', (req, res) => {
  const daySelectionId = req.params.daySelectionId;
  checklistQueries.getSelectedChecklistItemsByUserId(daySelectionId)
    .then(checklistSelections => {
      return res.json({ checklistSelections });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//create new checklist selection info for current user
router.post('/selection/new', (req, res) => {
  const body = req.body;
  checklistQueries.addChecklistSelection(body)
    .then(checklistSelection => {
      res.json({ checklistSelection });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
