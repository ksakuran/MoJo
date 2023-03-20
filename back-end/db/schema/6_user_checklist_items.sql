-- Drop and recreate user_checklist_items table
DROP TABLE IF EXISTS user_checklist_items CASCADE;
CREATE TABLE user_checklist_items (
  
  id SERIAL PRIMARY KEY NOT NULL,
  checklist_item_description VARCHAR(255) NOT NULL,
  active BOOLEAN DEFAULT true,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)