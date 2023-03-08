const iquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { default: inquirer } = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fatiyeye12',
    database: 'employee_db'
});

console.log("connected to the employee_db database");
connection.connect(function(err) {
    if(err) throw err;
})

mainPrompt();
function mainPrompt() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'departments',
            message: "Where should we start?",
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'Delete Employee', 'View All Roles', 'Add Role', 'Delete Role', 'View All Departments', 'Add Department', 'Delete Department', 'quit']
        }
    ])
    .then((response) => {
        if (response.departments === "quit") {
            console.log("Bye!");
        } else if (response.departments === "View All Departments") {
            viewAllDept();
        } else if (response.departments === "View All Roles") {
            viewAllRoles();
        } else if (response.departments === "View All Employees") {
            viewAllEmployees();
        } else if (response.departments === "Add Department") {
            addDepartment();
        } else if (response.departments === "Add Role") {
            addRole();
        } else if (response.departments === "Add Employee") {
            addEmployee();
        } else if (response.departments === "Update Employee Role") {
            updateEmployeeRole();
        } else if (response.departments === "Delete Employee") {
            deleteEmployee();
        } else if (response.departments === "Delete Role") {
            deleteRole();
        } else if (response.departments === "Delete Department") {
            deleteDept();
        }
});
}

