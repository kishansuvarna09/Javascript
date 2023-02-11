const DEVELOPER = 1;
const TESTER = 2;
function Developer(name) {
  this.name = name;
  this.type = 'Developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'Tester';
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case DEVELOPER:
        return new Developer(name);
      case TESTER:
        return new Tester(name);
    }
  };
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('Patrick', DEVELOPER));
employees.push(employeeFactory.create('John', TESTER));
employees.push(employeeFactory.create('Jamie', DEVELOPER));
employees.push(employeeFactory.create('Taylor', DEVELOPER));
employees.push(employeeFactory.create('Tim', TESTER));

employees.forEach((emp) => {
  say.call(emp);
});
