const db = require('../connection');
const defaultChecklistItems = require('../defaultChecklistItems');

//retrieve checklist items for current user based on status
const getChecklistItemsByUserId = (userId, isActive) => {
  return db.query(`
  SELECT * 
  FROM user_checklist_items 
  WHERE user_id = $1 and active = $2
  ORDER BY updated_date_time desc;
`, [userId, isActive])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

//create new custom checklist item for current user
const addCustomChecklistItem = (checklistItemDesc, userId) => {
  const sql = `
  INSERT INTO user_checklist_items
  (checklist_item_description, user_id)
  VALUES
  ($1,$2)
  RETURNING *;
  `;

  return db.query(sql, [checklistItemDesc, userId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};


//create default checklist items for current user
const addChecklistItem = (userId) => {
  const params = [];
  let count = 1;

  //set up initial sql statement
  let sql = `
  INSERT INTO user_checklist_items
  (checklist_item_description, user_id)
  VALUES`;

  //add default values
  defaultChecklistItems.forEach(item => {
    sql += `($${count++},$${count++}),`;
    params.push(item);
    params.push(userId);
  });

  sql = sql.slice(0, -1);
  sql += "RETURNING *;";

  return db.query(sql, params)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

//update checklist item status for current user
const updateChecklistItemStatus = (body) => {
  const { isActive, itemId, userId } = body;
  const query = `
  UPDATE user_checklist_items
  SET active = $1, updated_date_time = NOW()
  WHERE id = $2 and user_id = $3
  RETURNING *;
  `;
  const param = [isActive, itemId, userId];

  return db.query(query, param)
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return err;
    });
};

//retrieve selected day checklist items for current user
const getSelectedChecklistItemsByUserId = (daySelectionId) => {
  return db.query(`
  SELECT * 
  FROM checklist_selections 
  WHERE day_selection_id = $1;
`, [daySelectionId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

//create new checklist selection for current user
const addChecklistSelection = (body) => {
  const { daySelectionId, checklistItemId, createdDate } = body;
  const sql = `
  INSERT INTO checklist_selections
  (day_selection_id, user_checklist_item_id,created_date)
  VALUES
  ($1,$2,$3)
  RETURNING *;
  `;

  return db.query(sql, [daySelectionId, checklistItemId, createdDate])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

//remove checklist selection for current user
const deselectChecklistSelection = (body) => {
  const { daySelectionId, checklistItemId } = body;
  const sql = `
  DELETE FROM checklist_selections
  WHERE day_selection_id = $1
  AND user_checklist_item_id = $2 
  RETURNING *;
  `;

  return db.query(sql, [daySelectionId, checklistItemId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};


module.exports = {
  getChecklistItemsByUserId,
  getSelectedChecklistItemsByUserId,
  addCustomChecklistItem,
  addChecklistItem,
  updateChecklistItemStatus,
  addChecklistSelection,
  deselectChecklistSelection
};
