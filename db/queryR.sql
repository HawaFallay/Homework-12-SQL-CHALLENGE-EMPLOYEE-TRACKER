SELECT roles.id, roles.employee_title, departments.dept_name AS department, roles.salary 

FROM roles

LEFT JOIN departments ON roles.department_id = departments.id