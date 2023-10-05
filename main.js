const questions = [
    {
        question: 'Utepils på Torgallmenningen bør bli et fast tilbud',
        enig: {
            MDG: 2, 
            A: 0, 
            H: 2,
            FRP: 2,
            V: 2
        },
        uenig: {
            H: 0, 
            MDG: 0, 
            A: 2,
            FRP: 0,
            V: 0
        },
        litt_enig: {
            MDG: 1, 
            A: 0, 
            H: 1,
            FRP: 1,
            V: 1
        },
        litt_uenig: {
            H: 0, 
            MDG: 0, 
            A: 1,
            FRP: 0,
            V: 0
        }
    },
    {
        question: 'Ungdomsskoleelever i Bergen skal få gratis skolemåltider',
        enig: {
            MDG: 2, 
            A: 2, 
            H: 0,
            FRP: 0,
            V: 0
        },
        uenig: {
            H: 2, 
            MDG: 0, 
            A: 0,
            FRP: 2,
            V: 1
        },
        litt_enig: {
            MDG: 1, 
            A: 1, 
            H: 0,
            FRP: 0,
            V: 0
        },
        litt_uenig: {
            H: 1, 
            MDG: 0, 
            A: 0,
            FRP: 1,
            V: 2
        }
    },
    {
        question: 'Mer areal i Bergen kommune må bli satt av til å bygge boliger',
        enig: {
            MDG: 0, 
            A: 1, 
            H: 2,
            FRP: 2,
            V: 0
        },
        uenig: {
            H: 0, 
            MDG: 2, 
            A: 0,
            FRP: 0,
            V: 1
        },
        litt_enig: {
            MDG: 0, 
            A: 2, 
            H: 0,
            FRP: 0,
            V: 0
        },
        litt_uenig: {
            H: 0, 
            MDG: 1, 
            A: 0,
            FRP: 0,
            V: 2
        }
    },
    {
        question: 'Det er ikke greit å øke bompengene mer',
        enig: {
            MDG: 0, 
            A: 2, 
            H: 2,
            FRP: 2,
            V: 0
        },
        uenig: {
            H: 0, 
            MDG: 2, 
            A: 0,
            FRP: 0,
            V: 1
        },
        litt_enig: {
            MDG: 0, 
            A: 1, 
            H: 1,
            FRP: 1,
            V: 0
        },
        litt_uenig: {
            H: 1, 
            MDG: 1, 
            A: 0,
            FRP: 0,
            V: 2
        }
    },
    {
        question: 'Det skal ikke få komme cruiseskip til Bergen',
        enig: {
            MDG: 2, 
            A: 0, 
            H: 0,
            FRP: 0,
            V: 1
        },
        uenig: {
            H: 2, 
            MDG: 0, 
            A: 2,
            FRP: 2,
            V: 0
        },
        litt_enig: {
            MDG: 1, 
            A: 0, 
            H: 0,
            FRP: 0,
            V: 2
        },
        litt_uenig: {
            H: 1, 
            MDG: 0, 
            A: 1,
            FRP: 1,
            V: 0
        }
    },
    {
        question: 'Private selskaper må få drive eldre- og rusomsorg i Bergen',
        enig: {
            MDG: 0, 
            A: 0, 
            H: 2,
            FRP: 2,
            V: 2
        },
        uenig: {
            H: 0, 
            MDG: 0, 
            A: 2,
            FRP: 0,
            V: 0
        },
        litt_enig: {
            MDG: 0, 
            A: 0, 
            H: 1,
            FRP: 1,
            V: 1
        },
        litt_uenig: {
            H: 0, 
            MDG: 2, 
            A: 0,
            FRP: 0,
            V: 0
        }
    },
    {
        question: 'Bergen må bruke penger på å gi fastlegene færre pasienter og bedre arbeidsvilkår',
        enig: {
            MDG: 2, 
            A: 2, 
            H: 0,
            FRP: 0,
            V: 0
        },
        uenig: {
            H: 0, 
            MDG: 0, 
            A: 0,
            FRP: 0,
            V: 0
        },
        litt_enig: {
            MDG: 1, 
            A: 1, 
            H: 2,
            FRP: 2,
            V: 2
        },
        litt_uenig: {
            H: 0, 
            MDG: 0, 
            A: 0,
            FRP: 0,
            V: 0
        }
    },
    {
        question: 'Bergen må prioritere å få tilbudet «Rask psykisk helsehjelp» på plass i alle bydelene',
        enig: {
            MDG: 2, 
            A: 2, 
            H: 2,
            FRP: 2,
            V: 0
        },
        uenig: {
            H: 0, 
            MDG: 0, 
            A: 0,
            FRP: 0,
            V: 0
        },
        litt_enig: {
            MDG: 1, 
            A: 1, 
            H: 1,
            FRP: 1,
            V: 2
        },
        litt_uenig: {
            H: 0, 
            MDG: 0, 
            A: 0,
            FRP: 0,
            V: 0
        }
    },
    {
        question: 'Norsk politi må ha lov å ransake deg for å finne ut om du har narkotika til eget bruk',
        enig: {
            MDG: 0, 
            A: 1, 
            H: 0,
            FRP: 2,
            V: 0
        },
        uenig: {
            H: 2, 
            MDG: 2, 
            A: 0,
            FRP: 0,
            V: 2
        },
        litt_enig: {
            MDG: 0, 
            A: 2, 
            H: 0,
            FRP: 1,
            V: 0
        },
        litt_uenig: {
            H: 1, 
            MDG: 1, 
            A: 0,
            FRP: 1,
            V: 1
        }
    },
    {
        question: 'Vi kan prøve ut regulert salg av cannabis i Norge',
        enig: {
            MDG: 2, 
            A: 0, 
            H: 0,
            FRP: 0,
            V: 2
        },
        uenig: {
            H: 2, 
            MDG: 0, 
            A: 2,
            FRP: 2,
            V: 0
        },
        litt_enig: {
            MDG: 1, 
            A: 0, 
            H: 0,
            FRP: 0,
            V: 1
        },
        litt_uenig: {
            H: 1, 
            MDG: 0, 
            A: 2,
            FRP: 1,
            V: 0
        }
    }
];

const partyScores = {
    MDG: 0,
    A: 0,
    H: 0,
    FRP: 0,
    V: 0
}

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

    

