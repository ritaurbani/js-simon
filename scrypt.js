//Genero 5 random numbers e salvo in array

let numbers = [];

for (let i=0; i<5; i++){
    const randNum = Math.floor(Math.random()*100) + 1;
    numbers.push(randNum);
} console.log(numbers)

//Imposto timer di 30 sec dopo i quali i numeri disappear



//dopo i 30 sec compaiono input -(impostati in d-none => d-block)
const btnElem = document.getElementById("btn-timer");
btnElem.addEventListener("click", function () {
    setTimeout(function () {
        inputNumber.classList.remove("d-none");
    }, 30000);
})


//inserire numeri, premo bottone


//prelevare valori dell'input e confrontarli con array di numbers salvata all'inizio
//(.querySelectAll)

const formElement = document.getElementById("my-form"); 
const btnSubmitElem = document.getElementById("btn-submit");

const allInputs = document.querySelectorAll("input"); // array
console.log(allInputs);

formElement.addEventListener("submit", function (event) {
for (let i = 0; i < allInputs.length; i++) {
    const curInput = allInputs[i];
    console.log(curInput.value);
}

});


//Stampa alert 