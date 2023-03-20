
DROP TABLE IF EXISTS journals CASCADE;
CREATE TABLE journals (
  id SERIAL PRIMARY KEY NOT NULL,
  body TEXT, 
  day_selection_id INTEGER REFERENCES day_selections(id) ON DELETE CASCADE
)