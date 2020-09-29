function calcGPA() {
    let grades = document.getElementsByClassName("grade");
    let credits = document.getElementsByClassName("credits");
    let valid = true;
    let inputted = true;

    let gpa = 0;
    let totalCredits = 0;
    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        grade = grade.toFixed(2);
        let credit = 0;
        if (credits[i].value === "") {
            credit = -1.00;
        } 
        else{
            credit = Math.floor(credits[i].value);
        }
        
        if (grade != -1.00 && credit == -1.00 || grade == -1.00 && credit != -1.00) {
            console.log("error");
             inputted = false;
        }
        
        if (grade != -1.00 && credit != NaN && credit > 0) {
            let numerator = grade * credit;
            gpa += numerator;
            totalCredits += parseInt(credit);
        }
        else{
            console.log("error");
            valid = false;
        }
    }

    gpa /= totalCredits;
    gpa = gpa.toFixed(2);
    if (valid && inputted) {
        document.getElementById("gpa").innerHTML = `Your GPA is <strong>${gpa}</strong>`;
    }
    else if (!inputted) {
        document.getElementById("gpa").innerHTML = "<strong>Error</strong>, please make sure both grade and credits are correctly inputted.";
    }
    else {
        document.getElementById("gpa").innerHTML = "<strong>Error</strong>, invalid value inputted, make sure for each grade selected, credits with a value greater than 0 is also inputted.";
    }
}

let numClasses = 0;
let numSemesters = 0;

window.onload = function initialize() {
    addSemester();
}

function addClass() {
    numClasses++;
    let lastClass = document.getElementsByClassName("extraClass");

    lastClass[lastClass.length - 1].innerHTML += '<tr class="newClass">' +
        '<td><input class="course" type="text" placeholder="Course Name"></td>' +
        '<td>' +
            '<select class="grade" name="grade">' +
                '<option value="-1.0">--</option>' +
                '<option value="4.0">A+</option>' +
                '<option value="4.0">A</option>' +
                '<option value="3.7">A-</option>' +
                '<option value="3.3">B+</option>' +
                '<option value="3.0">B</option>' +
                '<option value="2.7">B-</option>' +
                '<option value="2.3">C+</option>' +
                '<option value="2.0">C</option>' +
                '<option value="1.7">C-</option>' +
                '<option value="1.3">D+</option>' +
                '<option value="1.0">D</option>' +
                '<option value="0.7">D-</option>' +
                '<option value="0.0">F</option>' +
            '</select>' +
        '</td>' +
        '<td><input type="text" class="credits" name="credits" maxlength = "3"></td>' +
        '</tr>';
}

function deleteClass() {
    if (numClasses > 1){
        numClasses--;
        table = document.getElementsByClassName("newClass");
        table[numClasses].remove();
    }
}

function addSemester() {
    numSemesters++;
    document.getElementById("form").innerHTML += '<tbody class="newSemester"></tbody>' +
    `<tr><td><strong>Semester ${numSemesters}</strong></td></tr>` +
    '<tbody class="extraClass"></tbody>' +
    '<tbody class="buttons"></tbody>';
    for (let i = 0; i < 4; i++) {
        addClass();
    }
    buttons = document.getElementsByClassName("buttons")
    buttons[buttons.length - 1].innerHTML += '<tr>' +
        '<td>' +
        '<button type="button" class="exClass" onclick="addClass()">Add Another Class</button> ' +
        '<button class="delClass" onclick="deleteClass()">Delete Class</button>' +
        '</td>' +
    '</tr>'
}

function deleteSemester() {
    if (numSemesters > 1){
        numSemesters--;
        let semesters = document.getElementsByClassName("newSemester");
        console.log(semesters);
        semesters[numSemesters].remove();
    }
}