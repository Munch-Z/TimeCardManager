// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyBPNVKUzNYJnb1AhPUv5O9P0OvuTGGCIoc',
    authDomain: 'in-class-06072019.firebaseapp.com',
    databaseURL: 'https://in-class-06072019.firebaseio.com',
    projectId: 'in-class-06072019',
    storageBucket: '',
    messagingSenderId: '1045843382384',
    appId: '1:1045843382384:web:f34fb5614215dc26',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const submitBtn = document.getElementById('employeeForm__submit');

database.ref().on('child_added', function(snapshot){
    value = snapshot.val();
    
    const employeeBody = document.getElementById('employees__list');    
    const tableRow = document.createElement('tr');

    const momentHired = moment(value.hireDate, 'MM/DD/YYYY');
    const currentDay = moment();

    const monthsWorked = currentDay.diff(momentHired, 'months');

    tableRow.innerHTML = `
    <td scope="col">${value.name}</td>
    <td scope="col">${value.role}</td>
    <td scope="col">${value.hireDate}</td>
    <td scope="col">${monthsWorked}</td>
    <td scope="col">${value.payRate}</td>
    <td scope="col">${parseInt(value.payRate) * monthsWorked}</td>`

    employeeBody.appendChild(tableRow);
    
})

function getData() {
    const name = document.getElementById('employeeForm__name').value;
    const role = document.getElementById('employeeForm__role').value;
    const hireDate = document.getElementById('employeeForm__date').value;
    const payRate = document.getElementById('employeeForm__rate').value;
    
    const newEmployee = database.ref().push();
    
    newEmployee.set({
        name: name,
        role: role,
        hireDate: hireDate,
        payRate: payRate
    })
}

submitBtn.addEventListener('click', (e) =>{
    getData();
});
