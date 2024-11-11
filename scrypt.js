//Al click del bottone Aggiungi Genero 5 random numbers e salvo in array

const addBtn = document.getElementById("add-btn");
const pageNumbersElem = document.getElementById("pageNumbers");
let numbers = [];  //scope piu grande

addBtn.addEventListener("click", function () {
    
    for (let i = 0; i < 5; i++) {
        const randNum = Math.floor(Math.random() * 100) + 1;
        numbers.push(randNum);
    }
    console.log(`numbers:${numbers}`)

    const pageNumbers = numbers.join(", ")
    console.log(`pageNumbers:${pageNumbers}`)

    pageNumbersElem.innerHTML = pageNumbers
})


// al click parte countdown di 30 sec, spariscono numeri e compaiono input

const btnElem = document.getElementById("btn-timer");
const inputNumberElem = document.getElementById("inputNumber")

btnElem.addEventListener("click", function () {
    setTimeout(function () {
        pageNumbersElem.classList.add("d-none");
        inputNumberElem.classList.remove("d-none");
    }, 3 * 1000);
})

//inserire numeri, premo bottone

//prelevare valori dell'input e confrontarli con array di numbers salvata all'inizio
//(.querySelectAll)

const btnCheckElem = document.getElementById("btn-check");

const allInputs = document.querySelectorAll("input"); // array gia creata
// console.log(allInputs);

btnCheckElem.addEventListener("click", function (event) {
    for (let i = 0; i < allInputs.length; i++) {
        const curInput = allInputs[i];
        console.log(curInput.value); //value che e'una property su input and select 
    } 
})

// console.log(`allInputs: ${allInputs}`)

//Stampa alert 