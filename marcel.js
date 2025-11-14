let ammountRecipe = [
  250, 25, 250, 0.5, 0.75, 87, 125, 50, 37, 0.25, 0.25, 0.25, 0.38, 0.38, 0.38,
];
let ingredientsRecipe = [
  "g Wildschweingulasch",
  "g Bacon (gewürfelt)",
  "g Zwiebel",
  "Stück Knoblauchzehe(n)",
  "EL Tomatenmark",
  "ml Rotwein",
  "ml Wildfond oder Fleischbrühe",
  "g Preiselbeeren",
  "g Schmand",
  "TL Rosmarin",
  "TL Majoran",
  "TL Kümmelpulver",
  "TL Thymian",
  "TL Paprikapulver (Edelsüß)",
  "TL Paprikapulver (Rosenscharf)",
];

function calculateWildGoulash() {
  let portions = parseFloat(document.getElementById("input-portion").value);

  const maxPortions = 10;

  if (portions < 1 || isNaN(portions)) {
    portions = 1;
    document.getElementById("input-portion").value = 1;
  }

  if (portions > maxPortions) { 
      portions = maxPortions;
      document.getElementById("input-portion").value = maxPortions;
  }

  let WildGoulashReference = document.getElementById("ingredientsListWildGoulash");

  WildGoulashReference.innerHTML = "";

  const roundIndices = [0, 1, 2, 5, 6, 7, 8];

  for (let i = 0; i < ammountRecipe.length; i++) {
    let newAmmount = ammountRecipe[i] * portions;

    if (roundIndices.includes(i)) {
      formattedAmmount = Math.round(newAmmount);
    } else {
      formattedAmmount = newAmmount.toFixed(2);
    }

    WildGoulashReference.innerHTML += `<li>${newAmmount} ${ingredientsRecipe[i]}</li>`;
  }

  WildGoulashReference.innerHTML += `<li>Salz, Pfeffer (Schwarz)</li>`;
}
