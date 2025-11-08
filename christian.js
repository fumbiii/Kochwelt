/*Basis-Arrays Kaiserschmarren*/
//Basis-Mengen für 1 Portion
let amountSchmarren = [250, 150, 2, 1, 3, 5, 2, 1];
let zutatenSchmarren = ['ml Milch', 'g Mehl', 'EL Zucker', 'Pck. Vanillezucker', 'Eier', 'g Butter zum Ausbacken', 'g Salz', ' Handvoll Puderzucker zum Bestreuen'];

/*Die Hauptfunktion: Liest, berechnet und aktulisiert */
function calculate_Kaiserschmarren() {
    // 1. Wert der Portion auslesen
    // parseFloat stellt sicher, dass wir mit einer Zahl rechnen können
    let portions = parseFloat(document.getElementById('input-portion').value);

    // VALIDIERUNG: Prüfen, ob der Wert negativ oder Null ist (oder NaN)
    if (portions < 1 || isNaN(portions)) {
        // Setze die Portionen auf den Mindestwert 1
        portions = 1; 
        
        // Optional: Den Wert im Input-Feld korrigieren, damit der Benutzer es sieht
        document.getElementById('input-portion').value = 1; 
    }

    // 2. Referenz auf die Zutatenliste holen
    let KaiserschmarrenReference = document.getElementById('zutatenListKaiserschmarren');

    // 3. Liste leeren (für die neuen Einträge)
    KaiserschmarrenReference.innerHTML = '';

    // Index-Liste der Zutaten, die gerundet werden sollen
    // Runden für alle Zutaten außer 'Eier' (Index 4)
    const roundIndices = [0, 1, 2, 3, 5, 6, 7];

    // 4. Neue Mengen berechnen und HTML-Einträge hinzufügen
    for(let i = 0; i < amountSchmarren.length; i++) {
        //Mulitpliziere die Basis-Menge mit der gewünschten Portionszahl
        let newAmmount = amountSchmarren[i] * portions;
        let formattedAmmount;

        // Überprüfung, ob der aktuelle Index gerundet werden soll
        if (roundIndices.includes(i)) {
            // Runden auf die nächste ganze Zahl für Mengenangaben
            formattedAmmount = Math.round(newAmmount);
        } else {
            // Für Eier: Aufrunden auf die nächste ganze Zahl (z.B. 1.1 -> 2)
            // da wir keine halben Eier verwenden können
            formattedAmmount = Math.ceil(newAmmount);
        }

        //Füge den neien Listeneintrag hinzu
        KaiserschmarrenReference.innerHTML += `<li>${formattedAmmount} ${zutatenSchmarren[i]}</li>`;
    }

    // 5. Den letzten Eintrag ohne Mengenangabe wieder hinzufügen
    KaiserschmarrenReference.innerHTML += `<li>Apfelmus oder Johannisbeeren zum Servieren</li>`;

    console.log(`Zutatenliste für ${portions} Portion(en) aktualisiert`);
}