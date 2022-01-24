'user strict';
function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = "";
    this.Salary = Salary;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}
function netSalary(nsal) {
    return nsal * (7.5 / 100);
}
//////////////
Employee.prototype.render = function () {
    document.write(`<p>    the employee    ${this.FullName}    will added    </p>`);
}

/////////////
const somth = new Employee(null, " ", ["Administration", "Marketing", "Development", "Finance"],
    ["Junior", "Mid-Senior", "Senior"], " ", 0);

var Min = [1500, 1000, 500];
var Max = [2000, 1500, 1000];
var NSal;

for (let i = 0; i <= 2; i++) {
    NSal = getRandom(Min[i], Max[i]);
    console.log(netSalary(NSal));
}

emp1 =new Employee(1000,"Ghazi Samer","Administration","Senior");
emp2 = new Employee(1001,"Lana Ali","Finance","Senior");
emp3 =new Employee(1002,"Tamara Ayoub","Marketing","Senior");
emp4 =new Employee(1003,"Safi Walid","Administration","Mid-Senior");
emp5 =new Employee(1004,"Omar Zaid","Development","Senior");
emp6 =new Employee(1005,"Rana Saleh","Development","Junior");
emp7 =new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();
