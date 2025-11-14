let ammountRecipe = [100, 15, 12.5, 0.25, 150, 37.5];
let ingredientsRecipe = [
  "g Möhren",
  "g Frischer Ingwer",
  "g Butter",
  "EL Zucker",
  "ml Gemühsebrühe",
  "ml Kokosmilch",
];

function calulateCarrotSoup() {
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

  let CarrotSoupReference = document.getElementById("ingredientsListCarrotSoup");

  CarrotSoupReference.innerHTML = "";

  const roundIndices = [0, 1, 4];

  for (let i = 0; i < ammountRecipe.length; i++) {
    let newAmmount = ammountRecipe[i] * portions;
    let formattedAmmount;

    if (roundIndices.includes(i)) {
      formattedAmmount = Math.round(newAmmount);
    } else {
      formattedAmmount = newAmmount.toFixed(2);
    }

    CarrotSoupReference.innerHTML += `<li>${newAmmount} ${ingredientsRecipe[i]}</li>`;
  }

  CarrotSoupReference.innerHTML += `<li>Salz und Pfeffer</li>`;
}
