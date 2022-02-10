'user strict';


var Min = [1500, 1000, 500];
var Max = [2000, 1500, 1000];
let Show = document.getElementById('Show');
let EmpEmp = document.getElementById('EmpEmp');
let glob = [];

function Employee(FullName, Department, Level) {
    this.EmployeeID = getRandomid();
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = `./assets/${this.FullName}.jpg`;
    this.Salary = getRandom(Level) ;
}

getRandom = function (Level) {
    let NSal;
    if (Level == "Senior")
        NSal = Math.floor(Math.random() * (2000 - 1500) + 1500);
    if (Level == "Mid-Senior")
        NSal = Math.floor(Math.random() * (1500 - 1000) + 1000);
    if (Level == "Junior")
        NSal = Math.floor(Math.random() * (1000 - 500) + 500);
        return NSal- netSalary(NSal);

}

function netSalary(nsal) {
    return nsal * (7.5 / 100);
}

function getRandomid() {
    return Math.floor(Math.random() * (1000 - 9999) + 1000);

}


// let emp = [];
// let id = [1000, 1001, 1002, 1003, 1004, 1005, 1006];
// let fname = ["Ghazi Samer", "Lana Ali", "Tamara Ayoub", "Safi Walid", "Omar Zaid", "Rana Saleh", "Hadi Ahmad",];
// let depa = ["Administration", "Finance", "Marketing", "Administration", "Development", "Development", "Finance"];
// let lev = ["Senior", "Senior", "Senior", "Mid-Senior", "Senior", "Junior", "Mid-Senior"];
// let img = ["Ghazi Samer.jpg", "Lana Ali.jpg", "Lana Ali.jpg", "Tamara Ayoub.jpg", "Safi Walid.jpg", "Omar Zaid.jpg", "Rana Saleh.jpg", "Hadi Ahmad.jpg"];
// for (let i = 0; i < 7; i++) {
//     emp[i] = new Employee(id[i], fname[i], depa[i], lev[i], img);
// }

Employee.prototype.render = function () {// this . somth 
    let div3 = document.createElement('div');
    Show.appendChild(div3);
div3.setAttribute('class', 'card');
    let div = document.createElement('div');
    div3.appendChild(div);

    let div2 = document.createElement('div');
    div3.appendChild(div2);




    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', this.ImageURL);
    img.setAttribute('alt', this.FullName);
    img.setAttribute('id', "imgurl");

    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeID}`;

    let p = document.createElement('p');
    div2.appendChild(p);
    p.textContent = `Department: ${this.Department} - Level: ${this.Level}  `;
    
    let p1 = document.createElement('p');
    div2.appendChild(p1);
    p1.textContent = `Salary: ${this.Salary}`;

    console.log(`div: ${div}  h: ${h3}  p: ${p}`);

}

emp1 = new Employee( "Ghazi Samer", "Administration", "Senior");
emp2 = new Employee( "Lana Ali", "Finance", "Senior");
emp3 = new Employee( "Tamara Ayoub", "Marketing", "Senior");
emp4 = new Employee( "Safi Walid", "Administration", "Mid-Senior");
emp5 = new Employee( "Omar Zaid", "Development", "Senior");
emp6 = new Employee("Rana Saleh", "Development", "Junior");
emp7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior");

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();


console.log(EmpEmp);
console.log(Show);


function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.name.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    // let Imageurl = event.target.imageurl.value;
    console.log(`${fullName} ${Department} ${Level}`);

    let newemp = new Employee( fullName, Department, Level);
    newemp.render();
        glob.push(newemp);

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



EmpEmp.addEventListener('submit', handelSubmit);
