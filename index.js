const navToggle = document.querySelector('[aria-controls="site-navigation"]');
navToggle.addEventListener("click", () => {
  navigationOpen = navToggle.getAttribute("aria-expanded");

  if (navigationOpen === "true") {
    navToggle.setAttribute("aria-expanded", "false");
  } else {
    navToggle.setAttribute("aria-expanded", "true");
  }
});

const seasonFilter = document.querySelector("#season-filter");
const edibleFilter = document.querySelector("#edible-filter");
const mushroomCards = Array.from(
  document.querySelectorAll(".know-your-mushrooms-section .card"),
);

let currentFilters = {
  edible: "all",
  season: "all",
};

function filterCards(currentFilters) {
  const edibleFilter = currentFilters.edible;
  const seasonFilter = currentFilters.season;

  mushroomCards.forEach(card => {
    const edibleTag = card.querySelector("[data-edible]").dataset.edible;
    const seasonTag = card.querySelector("[data-season]").dataset.season;

    const edibleMatch = (edibleFilter === "all") || (edibleTag === (edibleFilter === "edible"? "true": "false"))
    const seasonMatch = (seasonFilter === "all") || (seasonFilter === seasonTag)

    card.hidden = !(edibleMatch && seasonMatch)
  })
}

function handleEdibleFilterChange(event) {
  currentFilters.edible = event.target.value;
  filterCards(currentFilters);
}

function handleSeasonFilterChange(event) {
  currentFilters.season = event.target.value;
  filterCards(currentFilters);
}

seasonFilter.addEventListener("change", handleSeasonFilterChange);
edibleFilter.addEventListener("change", handleEdibleFilterChange);
