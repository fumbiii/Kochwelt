/* Basis-Arrays Wildgulasch */
// Basis-Mengen für 1 Portion
let ammountWildgulasch = [0.250, 0.025, 0.250, 0.5, 0.75, 0.087, 0.125, 0.050, 0.037, 0.25, 0.25, 0.25, 0.38, 0.38, 0.38];
let zutatenWildgulasch = ['kg Wildgulasch', 'kg Bacon', 'kg Zwiebeln', 'Knoblauchzehen', 'EL Tomatenmark', 'L Rotwein', 'L Wildfond', 'kg Preiselbeeren', 'kg Schmand', 'TL Rosmarin', 'TL Majoran', 'TL Kümmelpulver', 'TL Thymian', 'TL Paprikapulver (Edelsüß)', 'TL Paprikapulver (Rosenscharf)'];

/* Die Hauptfunktion: Liest, berechnet und aktualisiert */
function calculate_Wildgulasch() {
    // 1. Wert der Portionen auslesen
    // parseFloat stellt sicher, dass wir mit einer Zahl rechnen können
    let portions = parseFloat(document.getElementById('amount').value);

    // 2. Referenz auf die Zutatenliste holen
    let WildgulaschReference = document.getElementById('zutatenlisteWildgulasch');

    // 3. Liste leeren (für die neuen Einträge)
    WildgulaschReference.innerHTML = '';

    // 4. Neue Mengen berechnen und HTML-Einträge hinzufügen
    for (let i = 0; i < ammountWildgulasch.length; i++) {
        // Multipliziere die Basis-Menge mit der gewünschten Portionsanzahl
        let newAmmount = (ammountWildgulasch[i] * portions).toFixed(2);

        // Füge den neuen Listeneintrag hinzu
        WildgulaschReference.innerHTML += `<li>${newAmmount} ${zutatenWildgulasch[i]}</li>`;
    }

    // 5. Den letzten Eintrag ohne Mengenangabe wieder hinzufügen
    WildgulaschReference.innerHTML += `<li>Salz und Pfeffer</li>`;

    console.log(`Zutatenliste für ${portions} Portion(en) aktualisiert.`);
}