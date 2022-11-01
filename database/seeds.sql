USE employee_db;

INSERT INTO departments(name)
VALUES("Development"),
      ("Customer Service"),
      ("Misc"),
      ("Management");

INSERT INTO roles(title, salary, department)
VALUES("Senior Developer", 100000, 1),
      ("Junior Developer", 60000, 1),
      ("Graphic Design", 55000, 1),
      ("Tech Support", 40000, 2),
      ("Front Desk", 35000, 2),
      ("Intern", 0, 3),
      ("Secretary", 30000, 3),
      ("Logistics Lead", 120000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager)
VALUES ("Tony", "Stark", 1, 6),
       ("Steve", "Rogers", 3, 6),
       ("Natasha", "Romanoff", 5, 6),
       ("Clint", "Barton", 7, 6),
       ("Bruce", "Banner", 1, 6),
       ("Nick", "Fury", 8, NULL);