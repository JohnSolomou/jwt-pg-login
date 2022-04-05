CREATE DATABASE jwt_pg;

CREATE TABLE users(
  user_id uuid PRIMARY KEY Default uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
)

-- insert fake users 
INSERT INTO users(user_name, user_email, user_password) VALUES ('john','john69@gmail.com', 'johnjohn69');