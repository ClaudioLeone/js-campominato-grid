/* 
   -    L'utente clicca su un bottone per generare una griglia quadrata
   -    Ogni cella ha un numero progressivo da 1 a 100 (inclusi)
   -    La griglia deve essere 10 x 10
   -    Al click su ogni casella:
        -   La casella diventa azzura
        -   In console deve essere riportato il nr appartenente alla casella cliccata
*/

const cellTotNum = 100;
const genGrid = genNumArray(cellTotNum, 1);

//FUNCTIONS

//Genera un array di numeri interi da 1 a 100 disposti sequenzialmente
function genNumArray(totalNum, firstNum) {
    const numArray = [];
    console.log(numArray);
    for (let i = firstNum; i <= totalNum; i++) {
        numArray.push(i);
        // console.log(i);
    }

    return numArray;
  }