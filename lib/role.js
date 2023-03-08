class Role {
    constructor(title, salary, deptId) {
        this.title = title;
        this.salary = salary;
        this.deptId = deptId;;
    }

    getRole() {
        return this.title;
    }

    getSalary() {
        return this.salary;
    }

    getDeptId() {
        return this.deptId;
    }
}

module.exports = Role;