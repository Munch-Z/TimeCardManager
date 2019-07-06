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

let newEmployee = database.push();

newEmployee.set({
    test: "did this work?",
    test2: "lets find out"
})

const employeeBody = document.getElementById('employees__list');

const submitBtn = document.getElementById('employeeForm__submit');

function getData() {
    const employeeBody = document.getElementById('employees__list');
    const name = document.getElementById('employeeForm__name').value;
    const role = document.getElementById('employeeForm__role').value;
    const hireDate = document.getElementById('employeeForm__date').value;
    const payRate = document.getElementById('employeeForm__rate').value;

    let tableRow = document.createElement('tr');

    tableRow.innerHTML = `<td scope="col">${name}</td><td scope="col">${role}</td><td scope="col">${hireDate}</td><td scope="col">${payRate}</td><td scope="col">${totalPayed}</td>`

    employeeBody.appendChild(tableRow);
    newEmployee.set({
        test: "did this work?",
        test2: "lets find out"
    })
}

submitBtn.addEventListener('click', getData);
