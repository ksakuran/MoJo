-- Drop and recreate checklist_selections table
DROP TABLE IF EXISTS checklist_selections CASCADE;
CREATE TABLE checklist_selections (
  id SERIAL PRIMARY KEY NOT NULL,  
  rating SMALL INT DEFAULT 1,
  created_date DATE NOT NULL,  
  day_selection_id INTEGER REFERENCES day_selections(id) ON DELETE CASCADE,
  user_checklist_item_id INTEGER REFERENCES user_checklist_items(id) ON DELETE CASCADE
)