const form = document.getElementById('grades-form');
const mathInput = document.getElementById('math-grade');
const englishInput = document.getElementById('english-grade');
const tableBody = document.querySelector('#grades-table tbody');
const mathAvgCell = document.getElementById('math-avg');
const englishAvgCell = document.getElementById('english-avg');
const overallAvgCell = document.getElementById('overall-avg');
var studentId = 0;

var grades = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);
    grades.push({ math: mathGrade, english: englishGrade });
    studentId++;

    const row = document.createElement('tr');
    const student = document.createElement('td');
    const mathCell = document.createElement('td');
    const englishCell = document.createElement('td');
    const avgCell = document.createElement('td');

    student.textContent = studentId;
    mathCell.textContent = mathGrade;
    englishCell.textContent = englishGrade;
    avgCell.textContent = ((mathGrade + englishGrade) / 2).toFixed(2);

    row.appendChild(student);
    row.appendChild(mathCell);
    row.appendChild(englishCell);
    row.appendChild(avgCell);
    tableBody.appendChild(row);
    updateAverages();

    mathInput.value = '';
    englishInput.value = '';
});

function updateAverages() {
    var totalMath = 0;
    var totalEnglish = 0;

    grades.forEach(grade => {
        totalMath += grade.math;
        totalEnglish += grade.english;
    });

    const mathAvg = (totalMath / grades.length).toFixed(2);
    const englishAvg = (totalEnglish / grades.length).toFixed(2);
    const overallAvg = ((totalMath + totalEnglish) / (grades.length * 2)).toFixed(2);

    mathAvgCell.textContent = mathAvg;
    englishAvgCell.textContent = englishAvg;
    overallAvgCell.textContent = overallAvg;
}
