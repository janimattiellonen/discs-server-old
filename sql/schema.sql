CREATE TABLE `disc` (
  `id` INT (11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `type` VARCHAR (32) NOT NULL,
  `manufacturer` VARCHAR (128) NOT NULL,
  `color` VARCHAR (48) DEFAULT NULL,
  `material` VARCHAR (128) DEFAULT NULL,
  `speed` DECIMAL (10, 1) DEFAULT 0,
  `glide` DECIMAL (10, 1) DEFAULT 0,
  `stability` DECIMAL (10, 1) DEFAULT 0,
  `fade` DECIMAL (10, 1) DEFAULT 0,
  `weight` INT (3) DEFAULT 0,
  `image_url` VARCHAR (255) DEFAULT NULL,
  `is_missing` TINYINT (1) DEFAULT 0,
  `missing_description` TEXT DEFAULT NULL,
  `is_sold` TINYINT (1) DEFAULT 0,
  `is_broken` TINYINT (1) DEFAULT 0,
  `hole_in_one_at` DATETIME DEFAULT NULL,
  `is_collection_item` TINYINT (1) DEFAULT 0,
  `sold_at` DATETIME DEFAULT NULL,
  `additional` TEXT DEFAULT NULL,
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54784 DEFAULT CHARSET=utf8;



INSERT INTO disc (
  name,
  type,
  manufacturer,
  color,
  material,
  speed,
  glide,
  stability,
  fade,
  weight
) VALUES (
  'Mako3',
  'midrange',
  'innova',
  'black and yellow',
  'star',
  5,
  5,
  0,
  0,
  175
),
(
  'Teebird',
  'fairwayDriver',
  'innova',
  'black and yellow',
  'star',
  7,
  5,
  2,
  0,
  167
),
(
  'Teebird',
  'fairwayDriver',
  'innova',
  'black and yellow',
  'star',
  7,
  5,
  2,
  0,
  167
);