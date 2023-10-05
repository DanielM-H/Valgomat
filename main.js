const questionT = document.getElementById('question');
const btnNext = document.getElementById('btnNext');
const rbAnswer = document.getElementsByName('answer');
const inputForm = document.getElementById('valgomatForm');

btnNext.addEventListener('click', nextQuestion);

let qidx = 0; // Hvilken spørsmål er vi på nå (begynner på 0)
questionT.innerHTML = questions[qidx].question; // Skriver ut det første spørsmålet til HTML

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked'); // henter hvilken radioknapp som er valgt
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value); // regner ut resultatet
        qidx++; // øker spørsmåls-ID med 1
        if (qidx < questions.length) {
            radioChecked.checked = false;
            questionT.innerHTML = questions[qidx].question; // Skriver ut neste spørsmål til HTML
        }
        else { 
            inputForm.style.display = 'none'; // Skjuler skjemaet
            showResult(); 
        }
    }
    else {
        alert("Du må velge et svaralternativ!");
    }
}

// Funksjon som regner ut resultatet, får inn spørsmåls-ID og hvilket svar som er valgt (enig/uenig)
function calculateResult(qidx, chosen) {
    console.log("Spørsmåls-ID: " + qidx + ", valgt: " + chosen);

    let partyChoices = questions[qidx][chosen]; // Henter ut partiene og poengene for det valgte svaret
    console.log("partyChoices: ");
    console.log(partyChoices);

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party];
    }

    console.log("partyScore: ");
    console.log(partyScores);
}

function showResult() {
    // Konverter objektet til et array av nøkkel-verdi-par
    let entries = Object.entries(partyScores);

    // Sorter arrayet etter verdiene i stigende rekkefølge
    entries.sort((a, b) => b[1] - a[1]);

    // Konverter arrayet tilbake til et objekt
    let sortedPartyScores = Object.fromEntries(entries);

    console.log("Sortert etter poengsum: ");
    console.log(sortedPartyScores);

    // Skriv ut resultatet til HTML
    const resultBox = document.getElementById("result");
    for (let party in sortedPartyScores) {
        resultBox.innerHTML += party + ": " + sortedPartyScores[party] + "<br>";
    }

    // Display the "Ditt resultat:" element
    const resultHeader = document.querySelector('.result-header');
    resultHeader.style.display = 'block';
}

const btnBack = document.getElementById('btnBack');
btnBack.addEventListener('click', previousQuestion);

function previousQuestion() {
    qidx--;
    if (qidx >= 0) {
        questionT.innerHTML = questions[qidx].question;
    } else {
        qidx = 0; // Reset to prevent going below the first question
    }
}
