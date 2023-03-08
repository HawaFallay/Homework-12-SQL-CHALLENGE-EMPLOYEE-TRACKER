INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (employee_title, department_id, salary)
VALUES ("Sales Lead", 1, 100000),
       ("Salesperson", 1, 80000),
       ("Lead Engineer", 2, 150000),
       ("Software Engineer", 2, 120000),
       ("Account Manager", 3, 160000),
       ("Accountant", 3, 125000),
       ("Legal Team Lead", 4, 250000),
       ("Lawyer", 4, 19000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Michele", "Pfeifer", 1, null),
       ("Beyonce", "Knowles", 2, 1),
       ("Cindy", "Crawford", 3, null),
       ("Hulk", "Hogan", 4, 3),
       ("Bobby", "Brown", 5, null),
       ("Candy", "Apple", 6, 5),
       ("Forrest", "Gump", 7, null),
       ("Kenya", "Moore", 8, 7);
       