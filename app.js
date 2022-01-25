'user strict';
function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = "";
    this.Salary = Salary;
}

 getRandom = function(min, max) {
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
emp2 =new Employee(1001,"Lana Ali","Finance","Senior");
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


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                             /* TASK8 */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function NewDigits()
{
 var emp8= emp1 =new Employee(1007,);
 emp9.render();
 var emp9= emp1 =new Employee(1008,);
 emp9.render();
 var emp10= emp1 =new Employee(1009,);
 emp10.render();
 var emp11= emp1 =new Employee(1010,);
 emp11.render();
 
}
let  EmpEmp =document.getElementById('EmpEmp');
let show=document.getElementById('Show');


function handelSubmit(event){
    event.preventDefault();
    let fullName=Employee.taraget.FullName.value;
    let Department=Employee.taraget.Department.value;
    let Level=Employee.taraget.Level.value;
    let Imageurl=Employee.taraget.ImageURL.value;
   // console.log(`${FullName} ${Department} ${Level} ${Imageurl}`);

   let newemp=new Employee(fullName,Department,Level,Imageurl);
   newemp.render();
}
Employee.prototype.render=function()
{
    let div = createElement('div');
    show.appendChild('div');
    let img = createElement('img');
    div.appendChild(img);
    let h1 = createElement('h1');
    div.appendChild(h1);
    h1.textContent(this.FullName);
    let p= createElement('p');
    div.appendChild(p);
}
EmpEmp.addEventListener('submit', handelSubmit);