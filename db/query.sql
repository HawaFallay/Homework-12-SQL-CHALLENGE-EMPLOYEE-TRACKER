SELECT employees.id, employees.first_name, employees.last_name, roles.employee_title 
AS title, departments.dept_name 
AS department, roles.salary, CONCAT(e2.first_name, " ", e2.last_name) 
AS manager  

FROM employees LEFT JOIN employees e2 ON e2.id = employees.manager_id
               LEFT JOIN roles ON employees.role_id = roles.id
               LEFT JOIN departments ON roles.department_id = departments.id
