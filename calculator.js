/** 
 * calculate the weighted average
 * weighted:each grade is 
 * formula: sum(grade * credits) / sum(credits)
 */

function calculateweightedAverage (subjectlist) {
    if (subjectlist.length === 0) return 0;

    const totalweighted = subjectlist.reduce(function(SubmitEvent, s) {
        return sum + (s.grade * s.credits);
    }, 0);
    const totalcredits = subjectlist.reduce(function(sum, s) {
        return sum + s.credits
    }, 0);
    return (totalweighted / totalcredits).toFixed(2);
    
}

//comvert percentage to gpa

function calculateGpa (average){
const avg = parsefloat(everage);
if(avg >= 90) return 4.0;
    if (avg >= 85) return 3.7;
    if (avg >= 80) return 3.3;
    if (avg >= 75) return 3.0;
    if (avg >= 70) return 2.7;
    if (avg >= 65) return 2.3;
    if (avg >= 60) return 2.0;
    return 0.0;

}

// render results to DOM 


function renderCalculator() {
    // Get calculated values
    const average = calculateWeightedAverage(subjectlist);
    const gpa = calculateGPA(average);
    const gradeInfo = getGradeLetter(average);

    // Calculate total credits
    const totalCredits = subjectlist.reduce(function (sum, s) {
        return sum + s.credits;
    }, 0);

    // Update display cards
    document.getElementById("averageGrade").textContent =
        average.toFixed(1) + "%";

    document.getElementById("gpaValue").textContent =
        gpa.toFixed(2);

    document.getElementById("gradeLetter").textContent =
        gradeInfo.letter;

    document.getElementById("totalCredits").textContent =
        totalCredits;

    // Change grade letter color
    document.getElementById("gradeLetter").style.color =
        gradeInfo.color;

    // Animate progress bar
    const progressBar = document.getElementById("progressBar");

    progressBar.style.width = "0%";

    setTimeout(function () {
        progressBar.style.width = average + "%";
    }, 100);

    // Build results table
    const tableBody = document.getElementById("resultsTable");

    tableBody.innerHTML = "";

    subjectlist.forEach(function (subject) {
        const row = `
            <tr>
                <td>${subject.name}</td>
                <td>${subject.grade}%</td>
                <td>${subject.credits}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

// Run automatically when page loads
window.onload = renderCalculator;