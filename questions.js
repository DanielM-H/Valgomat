// constants.js
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
};
