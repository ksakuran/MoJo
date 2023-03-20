-- -- Drop and recreate moods table
DROP TABLE IF EXISTS moods CASCADE;
CREATE TABLE moods (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  color VARCHAR(255)
)