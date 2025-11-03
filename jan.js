/* Array Möhrensuppe */
let ammountBrühe = [100, 15, 12.50, 0.25, 150, 37.5]
let zutatenBrühe = ['g Möhren', 'g Frischer Ingwer', 'g Butter', 'EL Zucker', 'ml Gemühsebrühe', 'ml Kokosmilch']

let portions = 0;

/* Funktion Möhrensuppe */
function calculate_Möhrensuppe() {
    console.log('calculate recipe');
    portions = document.getElementById('input-portion').value;
    console.log('Portionen: ', portions);
}

function calculateMöhrenbrühe() {
    let MöhrenbrüheReference = document.getElementById('zutatenListMöhrenbrühe');
    MöhrenbrüheReference.innerHTML = '';
    for(let i = 0; i < ammountBrühe.length; i++) {
        MöhrenbrüheReference.innerHTML += `<li>${ammountBrühe[i] * portions} ${zutatenBrühe[i]}</li>`;
    }
}