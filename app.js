'user strict';

function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
}

//  getRandom = function(min, max) {
//     return Math.floor(Math.random() * (max-min)) + min;
// }
// function netSalary(nsal) {
//     return nsal * (7.5 / 100);
// }
// //////////////
// Employee.prototype.render = function () {
//     document.write(`<p>    the employee    ${this.FullName}    will added    </p>`);
// }

// ///////////
// const somth = new Employee( 0, " ", ["Administration", "Marketing", "Development", "Finance"],
//     ["Junior", "Mid-Senior", "Senior"], " ", 0);

// var Min = [1500, 1000, 500];
// var Max = [2000, 1500, 1000];
// var NSal;

// for (let i = 0; i <= 2; i++) {
//     NSal = getRandom(Min[i], Max[i]);
//     console.log(netSalary(NSal));
// }
let Show = document.getElementById('Show');
function newID() {
    let uniqueID;

    // 
    uniqueID = Math.random();
    console.log(uniqueID);
    return uniqueID = Math.random();

}

Employee.prototype.render = function () {

    let div = document.createElement('div');
    Show.appendChild(div);

    let img = document.createElement('img');
    div.appendChild(img);
    img.textContent = this.ImageURL;

    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeID}`;

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = `Department: ${this.Department} - Level: ${this.Level} <br> `;

    console.log(`div: ${div} img: ${img}  h: ${h3}  p: ${p}`);
}
emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
emp2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
emp4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
emp5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
emp6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
emp7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* TASK8 */
////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////



let EmpEmp = document.getElementById('EmpEmp');
console.log(EmpEmp);
console.log(Show);

function NewID() {
    let uniqueID;
    // console.log(this.EmployeeID);
    return uniqueID = this.EmployeeID + 1;
}


let glob=[];

function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.name.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let Imageurl = event.target.iImageurl.value;
    console.log(`${fullName} ${Department} ${Level} ${Imageurl}`);

    let newemp = new Employee(newID(), fullName, Department, Level, Imageurl);
    newemp.render();

    let globobj={name:fullName,dep:Department,level:Level}
    glob.push(globobj);

    let jsonArr = toJSON();

    saveToLocalS(jsonArr);

   

}


function readFromLocalS() {
    let jsonArr = localStorage.getItem('EmpEmp');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}
    function toJSON() {
        let jsonArray = JSON.stringify(glob);
        return jsonArray;
    }

    function saveToLocalS(jsonArray) {
        localStorage.setItem('EmpEmp', jsonArray)
    }
function sepa(som) {
    let a1 = [];
    let a2 = [];
    let a3 = [];
    if (som == this.Department[0]) {
        a1 = som;
    } else if (som == this.Department[1])
        a2 = som;
    else if (som == this.Department[2])
        a3 = som;

    console.log(a1);
    console.log(a2);
    console.log(a3);

}

EmpEmp.addEventListener('submit', handelSubmit);
