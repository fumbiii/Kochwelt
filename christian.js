/*Basis-Arrays Kaiserschmarren*/
//Basis-Mengen für 1 Portion
let amountSchmarren = [250, 150, 2, 1, 3, 5, 2, 1];
let zutatenSchmarren = ['ml Milch', 'g Mehl', 'EL Zucker', 'Pck. Vanillezucker', 'Eier', 'g Butter zum Ausbacken', 'g Salz', ' Handvoll Puderzucker zum Bestreuen'];

/*Die Hauptfunktion: Liest, berechnet und aktulisiert */
function calculate_Kaiserschmarren() {
    // 1. Wert der Portion auslesen
    // parseFloat stellt sicher, dass wir mit einer Zahl rechnen können
    let portions = parseFloat(document.getElementById('input-portion').value);

    // 2. Referenz auf die Zutatenliste holen
    let KaiserschmarrenReference = document.getElementById('zutatenListKaiserschmarren');

    // 3. Liste leeren (für die neuen Einträge)
    KaiserschmarrenReference.innerHTML = '';

    // 4. Neue Mengen berechnen und HTML-Einträge hinzufügen
    for(let i = 0; i < amountSchmarren.length; i++) {
        //Mulitpliziere die Basis-Menge mit der gewünschten Portionszahl
        let newAmmount = (amountSchmarren[i] * portions).toFixed(2);

        //Füge den neien Listeneintrag hinzu
        KaiserschmarrenReference.innerHTML += `<li>${newAmmount} ${zutatenSchmarren[i]}</li>`;
    }

    // 5. Den letzten Eintrag ohne Mengenangabe wieder hinzufügen
    KaiserschmarrenReference.innerHTML += `<li>Apfelmus oder Johannisbeeren zum Servieren</li>`;

    console.log(`Zutatenliste für ${portions} Portion(en) aktualisiert`);

}