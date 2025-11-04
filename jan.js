/* Basis-Arrays Möhrensuppe */
// Basis-Mengen für 1 Portion
let ammountBrühe = [100, 15, 12.50, 0.25, 150, 37.5];
let zutatenBrühe = ['g Möhren', 'g Frischer Ingwer', 'g Butter', 'EL Zucker', 'ml Gemühsebrühe', 'ml Kokosmilch'];

/* Die Hauptfunktion: Liest, berechnet und aktualisiert */
function calculate_Möhrensuppe() {
    // 1. Wert der Portionen auslesen
    // parseFloat stellt sicher, dass wir mit einer Zahl rechnen können
    let portions = parseFloat(document.getElementById('input-portion').value);
    
    // 2. Referenz auf die Zutatenliste holen
    let MöhrenbrüheReference = document.getElementById('zutatenListMöhrenbrühe');
    
    // 3. Liste leeren (für die neuen Einträge)
    MöhrenbrüheReference.innerHTML = ''; 

    // 4. Neue Mengen berechnen und HTML-Einträge hinzufügen
    for(let i = 0; i < ammountBrühe.length; i++) {
        // Multipliziere die Basis-Menge mit der gewünschten Portionsanzahl
        let newAmmount = (ammountBrühe[i] * portions).toFixed(2); 

        // Füge den neuen Listeneintrag hinzu
        MöhrenbrüheReference.innerHTML += `<li>${newAmmount} ${zutatenBrühe[i]}</li>`;
    }
    
    // 5. Den letzten Eintrag ohne Mengenangabe wieder hinzufügen
    MöhrenbrüheReference.innerHTML += `<li>Salz und Pfeffer</li>`;

    console.log(`Zutatenliste für ${portions} Portion(en) aktualisiert.`);
}