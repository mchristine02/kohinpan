CREATE TABLE IF NOT EXISTS `user` (
  `id` INT  AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`name`, `email`, `password`, `created_at`) VALUES
('John Doe', 'johndoe@gmail.com', 'johndoe123', '2023-10-01 12:00:00'),
('Jane Smith', 'janesmith@gmail.com', 'janesmith123', '2023-10-02 12:00:00');

SELECT * FROM user;

-- Example of a valid INSERT statement
INSERT INTO `user` (`id`, `name`, `password`, `email`, `created_at`)
VALUES
(NULL, 'Example Name', 'examplepassword', 'exampleemail@example.com', '2023-10-03 12:00:00');