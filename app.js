'user strict';
function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL =ImageURL ;
    this.Salary = Salary;
}

 getRandom = function(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
function netSalary(nsal) {
    return nsal * (7.5 / 100);
}
// //////////////
// Employee.prototype.render = function () {
//     document.write(`<p>    the employee    ${this.FullName}    will added    </p>`);
// }

/////////////
const somth = new Employee( 0, " ", ["Administration", "Marketing", "Development", "Finance"],
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

// emp1.render();
// emp2.render();
// emp3.render();
// emp4.render();
// emp5.render();
// emp6.render();
// emp7.render();


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                             /* TASK8 */
////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////



 let  EmpEmp =document.getElementById('EmpEmp');
 console.log(EmpEmp);
 let show=document.getElementById('Show');
 console.log(show);

function NewID()
{
   let uniqueID;
    console.log(this.EmployeeID);
  return uniqueID=this.EmployeeID+1;
  }
NewID();




 Employee.prototype.render=function()
{
    let div = createElement('div');
    show.appendChild('div');
    
    let img = createElement('img');
    div.appendChild(img);
    img.textContent=this.ImageURL;
   
    let h3 = createElement('h3');
    div.appendChild(h1);
    h3.textContent=`Name: ${this.fullName} - ID: ${this.EmployeeID}`;

    let p= createElement('p');
    div.appendChild(p);
    p.textContent=`Department: ${this.Department} - Level: ${thos.Level} <br> `;   
} 

function sepa(som)
{
    let a1=[];
    let a2=[];
    let a3=[];
    if (som == this.Department[0])
    {
        a1=som;
    }else if (som == this.Department[1])
    a2=som;
    else if(som == this.Department[2])
    a3=som ;

    console.log(a1);
    console.log(a2);
    console.log(a3);
    
}
function handelSubmit(event){
    event.preventDefault();
    let fullName=event.target.FullName.value;
    let Department=event.target.Department.value;
    let Level=event.target.Level.value;
    let Imageurl=event.target.ImageURL.value;
   //console.log(`${FullName} ${Department} ${Level} ${Imageurl}`);

  let newemp=new Employee(NewID(),fullName,Department,Level,Imageurl);
   newemp.render();

}
EmpEmp.addEventListener('submit', handelSubmit);
