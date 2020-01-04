const chiefSalary = 150000;
const leadSalary = 130000;
const seniorSalary = 110000;
const middleSalary = 90000;
const architectSalary = 70000;
const juniorSalary = 50000;

class Employee {
    constructor(id) {
        this.id = id;

        if (id < 100) {
            this.salary = chiefSalary;
            this.position = "Рук. направления";
            this.salaryBySecond = (this.salary / 20 / 8 / 60 / 60);
        } else if (id < 200) {
            this.salary = leadSalary;
            this.position = "Рук. группы";
            this.salaryBySecond = (this.salary / 20 / 8 / 60 / 60);
        } else if (id < 300) {
            this.salary = seniorSalary;
            this.position = "Senior";
            this.salaryBySecond = (this.salary / 20 / 8 / 60 / 60);
        }else if (id < 400) {
            this.salary = middleSalary;
            this.position = "Middle";
            this.salaryBySecond = (this.salary / 20 / 8 / 60 / 60);
        }else if (id < 500) {
            this.salary = architectSalary;
            this.position = "Архитектор";
            this.salaryBySecond = (this.salary / 20 / 8 / 60 / 60);
        }else if (id < 600) {
            this.salary = juniorSalary;
            this.position = "Junior";
            this.salaryBySecond = (this.salary / 20 / 8 / 60 / 60);
        }
    }
}