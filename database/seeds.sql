USE employee_db;

INSERT INTO departments(name)
VALUES("Development"),
      ("Customer Service"),
      ("Misc");

INSERT INTO roles(department, salary, role)
VALUES(1, 100000, "Senior Developer"),
      (1, 60000, "Junior Developer"),
      (1, 55000, "Graphic Design"),
      (2, 40000, "Tech Support"),
      (2, 35000, "Front Desk"),
      (3, 0, "Intern"),
      (3, 30000, "Secretary");

INSERT INTO employees(role, firstName, lastName, manager)
VALUES (1, "Barry", "Allen", "Henry Allen"),
       (2, "Clark", "Kent", "Martha Kent"),
       (3, "Bruce", "Wayne", "Martha Wayne"),
       (4, "Lex", "Luthor", "Lionel Luthor"),
       (5, "Wade", "Wilson", "Charles Henry Wilson");