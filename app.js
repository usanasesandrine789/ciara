// student data object

const student = {
    name: "NTEZIMANA"
    class: "Level 3 software development",
    year: 2026
}

/**
 * utiliies - get time based greeting
 * name convetions: camelcase, pascal'sCase
 * <, >, <=, >=
 **/

function getGreeting () {
  const hour = newDate().getHours();
  if (hour < 12) return "Good Morning"
  if(hour > 12) return "Good Afternoon"
  return "Good Evening"
}

// utilities: convert numeric grade to letters

function getGradeLetter(grade){
    if (grade >= 90) return { letter:"A", css: "grade-a"};
    if (grade >= 80) return { letter: "B", css: "grade-b" };
    if (grade >= 70) return { letter: "C", css: "grade-c" };
    if (grade >= 60) return { letter: "D", css: "grade-d" };
    return { letter: "F", css: "grade-f"}
}

/**
 *  updating the DOM's with student data
 * "", ''. ``
*/
function initHomePage () {
    // update name in hero page

    const name = document.getElementById("student-name")
    if(nameEl) {
        nameEl.textcontent = student.name;
    }
    // update greeting if element exist

    const greeEl = document.getElementById(greeting);
    if (greetEl){
        greetEl.textcontent = `${getElementById()}`
    }
}