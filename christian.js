let amountRecipe = [250, 150, 2, 1, 3, 5, 2, 1];
let ingredientsRecipe = [
  "ml Milch",
  "g Mehl",
  "EL Zucker",
  "Pck. Vanillezucker",
  "Eier",
  "g Butter zum Ausbacken",
  "g Salz",
  " Handvoll Puderzucker zum Bestreuen",
];

function calculateShreddedPancake() {
  let portions = parseFloat(document.getElementById("input-portion").value);

  if (portions < 1 || isNaN(portions)) {
    portions = 1;

    document.getElementById("input-portion").value = 1;
  }

  let ShreddedPancakeReference = document.getElementById(
    "PortionsListShreddedPancake"
  );

  ShreddedPancakeReference.innerHTML = "";

  const roundIndices = [0, 1, 2, 3, 5, 6, 7];

  for (let i = 0; i < amountRecipe.length; i++) {
    let newAmmount = amountRecipe[i] * portions;
    let formattedAmmount;

    if (roundIndices.includes(i)) {
      formattedAmmount = Math.round(newAmmount);
    } else {
      formattedAmmount = Math.ceil(newAmmount);
    }

    ShreddedPancakeReference.innerHTML += `<li>${formattedAmmount} ${ingredientsRecipe[i]}</li>`;
  }

  ShreddedPancakeReference.innerHTML += `<li>Apfelmus oder Johannisbeeren zum Servieren</li>`;
}
