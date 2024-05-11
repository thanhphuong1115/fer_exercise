//Practice 1
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];
// find first teenager
function findFirstTeenager(people) {
  for (let person of people) {
    if (person.age >= 10 && person.age <= 20) {
      return person;
    }
  }
  return null;
}
// find all teenager
const firstTeenager = findFirstTeenager(people);
if (firstTeenager) {
  console.log("First teenager:", firstTeenager);
} else {
  console.log("No teenager found");
}

function findAllTeenagers(people) {
  const teenagers = [];
  for (const person of people) {
    if (person.age >= 10 && person.age <= 20) {
      teenagers.push(person);
    }
  }
  return teenagers;
}
// check every person is teenager
const allTeenagers = findAllTeenagers(people);
console.log("All teenagers:", allTeenagers);

function isEveryTeenager(people) {
  for (const person of people) {
    if (person.age < 10 || person.age > 20) {
      return false;
    }
  }
  return true;
}

const everyTeenagersCheck = isEveryTeenager(people);
console.log("Every person is a teenager:", everyTeenagersCheck);

 // check any person is teenager
 function isAnyTeenager(people){
  for(const person of people){
    if(person.age >=10 && person.age<=20){
      return true;
    }
  }return false;
 }

 const anyTeenagersCheck = isAnyTeenager(people);
 console.log("Any person is a teenager:", anyTeenagersCheck);

 //Practice 2
 var array = [1, 2, 3, 4]
const sum = array.reduce((accumulator, current)=> accumulator + current, 0 );
console.log(sum);
const mul = array.reduce((accumulator, current)=> accumulator * current, 1 );
console.log(mul);

// Practice 3
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
//print the name of each company using forEach
 companies.forEach(company =>
  console.log(company.name)
  );
// print the name of each company that started after 1987
companies.filter(company => company.start > 1987).forEach(company => 
  console.log(company.name));
// •	Get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name,
// the category, the start and the end in paragraphs elements
console.log("The companies that have category Retail");

const retailCompanies = companies.filter(company => company.category === "Retail").map(company => {
  console.log(company);
  company.start++;
  const div = document.createElement("div");
  div.innerHTML = `
  <tr>
      <td>${company.name}</td>
      <td>${company.start}</td>
      <td>${company.end}</td>
    </tr>
  `;
  return div;
});

retailCompanies.forEach(companyDiv => {
  document.body.appendChild(companyDiv);
});
//•	Sort the companies based on their end date in ascending order
companies.sort((company1, company2) => company1.end - company2.end);
console.log(companies);
//•	Sort the ages array in descending order
ages.sort((age1, age2) => age2 - age1);
console.log(ages);
//•	Print the sum if you add all the ages using reduce
const ageSum = ages.reduce((acc, cur)=> acc + cur, 0 );
console.log(ageSum);
//•	Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS
const newCompany ={  name: "Company One", category: "Finance", start: 1981, end: 2004,print(){
  console.log(this.name)
}
}
newCompany.print();
//•	Create a function that takes an unknown number of arguments that are numbers and return their sum;
function sumNum(...number){
  return number.reduce((acc1,cur1) => acc1 + cur1, 0); 
}
console.log(sumNum(3,2,4));
//•	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, it should add its values to the array that will be returned by the function
function add(...args) {
  const addArray = [];

  args.forEach(arg => {
    if (Array.isArray(arg)) {
      addArray.push(...arg); 
    } else {
      addArray.push(arg);
    }
  });

  return addArray;
}

const combined = add(1, 2, [3, 4], 5);
console.log(combined); 
//•	Destructuring the property street in a variable named street from the object person
  const{ name, address:{street}} = person;
  console.log(name);
  console.log(street);
  //•	Write a function that every time you call it, it returns a number that increments starting from 0
  function numberIncrease(){
    let count = 0;
    return () => count++;
  }
  console.log("Count");
  const nextCount = numberIncrease();
  console.log(nextCount());
  console.log(nextCount());
  console.log(nextCount());
  //•	Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object
  function getQueryParams(url) {
    const queryParams = {};
    const queryString = url.split("?")[1];
    if (queryString) {
      const params = queryString.split("&");
      params.forEach(param => {
        const [key, value] = param.split("=");
        queryParams[key] = value;
      });
    }
    return queryParams;
  }
  const url = "https://example.com/page?name=John&age=30";
  console.log(getQueryParams(url));
  //Practice 4
  class Shape {
    constructor(color){
      this.color=color;
    }
    getArea() {
      throw new Error('getArea() method must be implement')
    }
  }
  class Rectangle extends Shape{
    constructor(length, width, color){
      super(color);
      this.width=width;
      this.length=length;
    }
    toString(){
      return `Rectangle - color: ${this.color}, length: ${this.lenght}, width: ${this.width}, Area: ${this.getArea()}`;
    }
    getArea() {
      return this.length * this.width;
  }
}
  class Triangle extends Shape {
    constructor(base, height, color) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  
    toString() {
      return `Triangle - Color: ${this.color}, Base: ${this.base}, Height: ${this.height}, Area: ${this.getArea()}`;
    }
  }
  const rectangle = new Rectangle(8, 10, "green");
  console.log(rectangle.toString());
  
  const triangle = new Triangle(3, 6, "black");
  console.log(triangle.toString());