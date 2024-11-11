//Genero 5 random numbers e salvo in array

let numbers = [];

for (let i=0; i<5; i++){
    const randNum = Math.floor(Math.random()*100) + 1;
    numbers.push(randNum);
} console.log(numbers)

//Imposto timer di 30 sec dopo i quali i numeri disappear


//dopo i 30 sec compaiono input -(impostati in d-none => d-block)

//inserire numeri, premo bottone

//prelevare valori dell'input e confrontarli con array di numbers salvata all'inizio
//(.querySelectAll)

//Stampa alert 