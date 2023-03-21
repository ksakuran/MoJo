-- -- Drop and recreate mood_selections table
DROP TABLE IF EXISTS mood_selections CASCADE;
CREATE TABLE mood_selections (
  id SERIAL PRIMARY KEY NOT NULL,
  created_date TIMESTAMP DEFAULT NOW(),
  mood_id INTEGER REFERENCES moods(id) ON DELETE CASCADE,
  day_selection_id INTEGER REFERENCES day_selections(id) ON DELETE CASCADE,
  rating SMALLINT DEFAULT 1
)