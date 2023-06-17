var employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  function PrintDeveloperbyMap() {

    const developers = employees
      .filter(employee => employee.profession === "developer")
      .map(employee => employee.name);
  
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    const developers = [];
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        developers.push(employee.name);
      }
    });
  
    console.log(developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
  
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    const filteredEmployees = employees.filter(employee => employee.profession === "admin");
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 5, name: "jane", age: "22", profession: "designer" },
      { id: 6, name: "peter", age: "25", profession: "developer" },
      { id: 7, name: "marie", age: "23", profession: "manager" }
    ];
  
    employees = employees.concat(newArray);
    console.log(employees);
  }
  