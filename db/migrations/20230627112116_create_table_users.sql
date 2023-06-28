-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(50) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)

-- migrate:down
DROP TABLE users
