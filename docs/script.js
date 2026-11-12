// Sample initial data
let students = [
    { id: 1, name: "Alice Smith", email: "alice@example.com", course: "Computer Science" },
    { id: 2, name: "Bob Jones", email: "bob@example.com", course: "Mathematics" }
];

// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

// Render students table on page load
function renderStudents() {
    studentTableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td><button class="btn-danger" onclick="deleteStudent(${student.id})">Delete</button></td>
        `;

        studentTableBody.appendChild(row);
    });
}

// Handle form submission to add a new student
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name: name,
        email: email,
        course: course
    };

    students.push(newStudent);
    renderStudents();

    // Clear form inputs
    studentForm.reset();
});

// Delete student by ID
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    renderStudents();
}

// Initial render call
renderStudents();