let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);

    if (name === "" || empId === "" || isNaN(salary)) {
        alert("Please fill all fields properly");
        return;
    }
    let employee = {
        name: name,
        id: empId,
        salary: salary,
    };
    employees.push(employee);
    alert("Employee Added Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
}
function displayEmployees() {
    let output = "<h3>All Employees</h3>";
    employees.forEach(emp => {
        output += `
            Name: ${emp.name} |
            ID: ${emp.id} |
            Salary: ₹${emp.salary}<br>
        `;
    });
    document.getElementById("output").innerHTML = output;
}
function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "<h3>No employee records available</h3>";
        return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;
    document.getElementById("output").innerHTML =
        "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}
function countSalary() {
    let sal = Number(prompt("Enter Salary:"));

    let count = employees.filter(emp => emp.salary === sal).length;

    document.getElementById("output").innerHTML =
        "<h3>Employees with Salary " + sal + ": " + count + "</h3>";
}