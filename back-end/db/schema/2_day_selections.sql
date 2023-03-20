-- -- Drop and recreate day_selections table
DROP TABLE IF EXISTS day_selections CASCADE;
CREATE TABLE day_selections (
  id SERIAL PRIMARY KEY NOT NULL,
  weather_description VARCHAR(255),
  weather_icon VARCHAR(255),
  created_date DATE NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE 
)