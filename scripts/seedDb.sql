USE neat_drinks_db;

-- User Types
INSERT INTO `neat_drinks_db`.`UserTypes` (`display_name`, `active`, `createdAt`, `updatedAt`) VALUES ('Corporate', 'Y', CURRENT_DATE(), CURRENT_DATE());
INSERT INTO `neat_drinks_db`.`UserTypes` (`display_name`, `active`, `createdAt`, `updatedAt`) VALUES ('Personal', 'Y', CURRENT_DATE(), CURRENT_DATE());

-- Users
INSERT INTO `neat_drinks_db`.`Users` (`email`, `password`, `address`, `city`, `state`, `zip`, `display_name`, `Website`, `tag_line`, `createdAt`, `updatedAt`, `UserTypeId`) VALUES ('JohnDoe@test.com', 'Test123!', '123', 'Yellow Brick Rd', 'PA', '12345', 'John Doe', NULL, 'John - Tag Line', sysdate(), sysdate(), '2');
INSERT INTO `neat_drinks_db`.`Users` (`email`, `password`, `address`, `city`, `state`, `zip`, `display_name`, `Website`, `tag_line`, `createdAt`, `updatedAt`, `UserTypeId`) VALUES ('janeDoe@test.com', 'Test123!', '123', 'Yellow Brick Rd', 'PA', '12345', 'Jane Doe', NULL,  'Jane - Tag Line', sysdate(), sysdate(), '2');
INSERT INTO `neat_drinks_db`.`Users` (`email`, `password`, `address`, `city`, `state`, `zip`, `display_name`, `Website`, `tag_line`, `createdAt`, `updatedAt`, `UserTypeId`) VALUES ('DrinksInc@Test.com', 'Test123!', '321', 'Yellow Brick Rd', 'PA', '12345', 'Drinks Inc.', 'www.google.com', 'Drink Inc. - Tag Line',  sysdate(), sysdate(), '1');

-- Drinks
INSERT INTO `neat_drinks_db`.`Drinks` (`dislpay_name`, `ingredient_Detail`, `instruction`, `rating`, `createdAt`, `updatedAt`, `UserId`) VALUES ('Rum & Coke', 'ingredient Detial', 'Instructions', '50', sysdate(), sysdate(), '3');
INSERT INTO `neat_drinks_db`.`Drinks` (`dislpay_name`, `ingredient_Detail`, `instruction`, `rating`, `createdAt`, `updatedAt`, `UserId`) VALUES ('Manhattan', 'ingredient Detial', 'Instructions', '75', sysdate(), sysdate(), '3');
INSERT INTO `neat_drinks_db`.`Drinks` (`dislpay_name`, `ingredient_Detail`, `instruction`, `rating`, `createdAt`, `updatedAt`, `UserId`) VALUES ('Mojito', 'ingredient Detial', 'Instructions', '90', sysdate(), sysdate(), '3');
INSERT INTO `neat_drinks_db`.`Drinks` (`dislpay_name`, `ingredient_Detail`, `instruction`, `rating`, `createdAt`, `updatedAt`, `UserId`) VALUES ('Gin & Tonic', 'ingredient Detial', 'Instructions', '35', sysdate(), sysdate(), '3');
INSERT INTO `neat_drinks_db`.`Drinks` (`dislpay_name`, `ingredient_Detail`, `instruction`, `rating`, `createdAt`, `updatedAt`, `UserId`) VALUES ('Martini', 'ingredient Detial', 'Instructions', '45', sysdate(), sysdate(), '3');

-- Ingredients
INSERT INTO `neat_drinks_db`.`Ingredients` (`display_name`, `active`,`createdAt`,`updatedAt`) VALUES ('Lemon', 'Y', sysdate(), sysdate());
INSERT INTO `neat_drinks_db`.`Ingredients` (`display_name`, `active`,`createdAt`,`updatedAt`) VALUES ('Lime', 'Y', sysdate(), sysdate());
INSERT INTO `neat_drinks_db`.`Ingredients` (`display_name`, `active`,`createdAt`,`updatedAt`) VALUES ('Coca-Cola', 'Y', sysdate(), sysdate());
INSERT INTO `neat_drinks_db`.`Ingredients` (`display_name`, `active`,`createdAt`,`updatedAt`) VALUES ('Pineapple', 'Y', sysdate(), sysdate());
INSERT INTO `neat_drinks_db`.`Ingredients` (`display_name`, `active`,`createdAt`,`updatedAt`) VALUES ('Simple Syrup', 'Y', sysdate(), sysdate());

-- Drink_User_Rating
INSERT INTO `neat_drinks_db`.`Drink_User_Ratings` (`Rating`, `Review`, `createdAt`, `updatedAt`, `DrinkId`, `UserId`) VALUES ('100', 'Jane Review - Martini', sysdate(), Sysdate(), '5', '2');
INSERT INTO `neat_drinks_db`.`Drink_User_Ratings` (`Rating`, `Review`, `createdAt`, `updatedAt`, `DrinkId`, `UserId`) VALUES ('100', 'John Review - Manhattan', sysdate(), Sysdate(), '2', '1');
INSERT INTO `neat_drinks_db`.`Drink_User_Ratings` (`Rating`, `Review`, `createdAt`, `updatedAt`, `DrinkId`, `UserId`) VALUES ('50', 'Jane Review - Manhattan', sysdate(), sysdate(), '2', '2');
INSERT INTO `neat_drinks_db`.`Drink_User_Ratings` (`Rating`, `Review`, `createdAt`, `updatedAt`, `DrinkId`, `UserId`) VALUES ('50', 'John Review - Martini', sysdate(), sysdate(), '5', '1');

-- Drink_Ingredient
INSERT INTO `neat_drinks_db`.`Drink_Ingredient` (`createdAt`, `updatedAt`, `DrinkId`, `IngredientId`) VALUES (sysdate(), sysdate(),'1', '2');
INSERT INTO `neat_drinks_db`.`Drink_Ingredient` (`createdAt`, `updatedAt`, `DrinkId`, `IngredientId`) VALUES (sysdate(), sysdate(),'1', '3');