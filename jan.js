/* Basis-Arrays Möhrensuppe */
// Basis-Mengen für 1 Portion
let ammountBrühe = [100, 15, 12.50, 0.25, 150, 37.5];
let zutatenBrühe = ['g Möhren', 'g Frischer Ingwer', 'g Butter', 'EL Zucker', 'ml Gemühsebrühe', 'ml Kokosmilch'];

/* Die Hauptfunktion: Liest, berechnet und aktualisiert */
function calculate_Möhrensuppe() {
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
    let MöhrenbrüheReference = document.getElementById('zutatenListMöhrenbrühe');
    
    // 3. Liste leeren (für die neuen Einträge)
    MöhrenbrüheReference.innerHTML = '';

    // Index-Liste der Zutaten, die gerundet werden sollen
    // Index 0: 'g Möhren'
    // Index 1: 'g Frischer Ingwer'
    // Index 4: 'ml Gemühsebrühe'
    const roundIndices = [0, 1, 4];

    // 4. Neue Mengen berechnen und HTML-Einträge hinzufügen
    for(let i = 0; i < ammountBrühe.length; i++) {
        // Multipliziere die Basis-Menge mit der gewünschten Portionsanzahl
        let newAmmount = ammountBrühe[i] * portions; 
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
        MöhrenbrüheReference.innerHTML += `<li>${newAmmount} ${zutatenBrühe[i]}</li>`;
    }
    
    // 5. Den letzten Eintrag ohne Mengenangabe wieder hinzufügen
    MöhrenbrüheReference.innerHTML += `<li>Salz und Pfeffer</li>`;

    console.log(`Zutatenliste für ${portions} Portion(en) aktualisiert.`);
}