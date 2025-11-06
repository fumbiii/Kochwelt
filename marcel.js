/* Basis-Arrays Wildgulasch */
// Basis-Mengen für 1 Portion
let ammountWildgulasch = [250, 25, 250, 0.5, 0.75, 87, 125, 50, 37, 0.25, 0.25, 0.25, 0.38, 0.38, 0.38];
let zutatenWildgulasch = ['g Wildgulasch', 'g Bacon', 'g Zwiebeln', 'Stück Knoblauchzehen', 'EL Tomatenmark', 'ml Rotwein', 'ml Wildfond', 'g Preiselbeeren', 'g Schmand', 'TL Rosmarin', 'TL Majoran', 'TL Kümmelpulver', 'TL Thymian', 'TL Paprikapulver (Edelsüß)', 'TL Paprikapulver (Rosenscharf)'];

/* Die Hauptfunktion: Liest, berechnet und aktualisiert */
function calculate_Wildgulasch() {
    // 1. Wert der Portionen auslesen
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
    let WildgulaschReference = document.getElementById('zutatenlistWildgulasch');

    // 3. Liste leeren (für die neuen Einträge)
    WildgulaschReference.innerHTML = '';

    // Index-Liste der Zutaten, die gerundet werden sollen
    // Index 0: 'g Möhren'
    // Index 1: 'g Frischer Ingwer'
    // Index 4: 'ml Gemühsebrühe'
    const roundIndices = [0, 1, 2, 5, 6, 7, 8];

    // 4. Neue Mengen berechnen und HTML-Einträge hinzufügen
    for (let i = 0; i < ammountWildgulasch.length; i++) {
        // Multipliziere die Basis-Menge mit der gewünschten Portionsanzahl
        let newAmmount = (ammountWildgulasch[i] * portions);
        let formattedAmmount;

        // Überprüfung, ob der aktuelle Index gerundet werden soll
        if (roundIndices.includes(i)) {
            // Runden auf die nächste ganze Zahl (z.B. 100.5 -> 101, 100.4 -> 100)
            formattedAmmount = Math.round(newAmmount);
        } else {
            // Standardformatierung für alle anderen Zutaten (2 Dezimalstellen)
            formattedAmmount = newAmmount.toFixed(2);
        }

        // Füge den neuen Listeneintrag hinzu
        WildgulaschReference.innerHTML += `<li>${newAmmount} ${zutatenWildgulasch[i]}</li>`;
    }

    // 5. Den letzten Eintrag ohne Mengenangabe wieder hinzufügen
    WildgulaschReference.innerHTML += `<li>Salz, Pfeffer (Schwarz)</li>`;

    console.log(`Zutatenliste für ${portions} Portion(en) aktualisiert.`);
}