// render all subject cards into subject-container

function rendersubject (list) {
    const container = document.getElementById(subject-container)
    container.innerHTML=""; // cl;ear all existing content

    if (list.length === 0) {
        container.innerHTML = `<p class="empty-msg>No subjects found.</p>`;
        return;
    }
    list.forEach(function(subject) {
        constgetGradeInfo = getGradeLetter(subject.grade); //form app.js

        // create the cards element
        const card = document.createElement("article");
        card.className = "subject-card";
        card.className.id = subject.id;
        
        //build our inner HTML

        card.innerHTML = `
        <div class="card-header">
        <h3>${subject.name}</h3>
        <span class="badge">${subject.code}</span>
        </div>
         <div class="card-body">
         <div class="grade-badge ${getGradeInfo.css}">
        ${subject.grade}% - ${getGradeInfo.letter}
        </div>
        <p class="credits">credits:${subject.credits}</p>
          <p class="description">${subject.description}</p>
     </div>
     
     container.appendChild(card);
        
    });
}`
    // run when dom is ready

    document.addEventListener("DOMcontentLoaded", function(){

    })