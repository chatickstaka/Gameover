// Populate Day and Year Dropdowns
const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");

// Populate days (1-31)
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

// Populate years (1920 to current year)
const currentYear = new Date().getFullYear();
for (let i = currentYear - 105; i <= currentYear; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  yearSelect.appendChild(option);
}

// Handle form submission
document.getElementById("deathClockForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const birthday = new Date(year, month, day);
  const lifeExpectancyYears = 80;
  const deathDate = new Date(birthday.getFullYear() + lifeExpectancyYears, birthday.getMonth(), birthday.getDate());
  const today = new Date();

  const daysLeft = Math.ceil((deathDate - today) / (1000 * 60 * 60 * 24));

  // Gruesome causes of death
  const causesOfDeath = [
    "being devoured alive by a pack of rabid wolves",
    "falling into an industrial meat grinder",
    "getting crushed by a falling grand piano",
    "being trapped in a burning building with no escape",
    "getting swallowed whole by a giant snake",
    "accidentally drinking a highly toxic chemical",
    "freezing to death on a snowy mountaintop",
    "falling victim to a deranged axe murderer",
    "drowning in quicksand while exploring a jungle",
    "being struck by lightning—twice in a row"
  ];
  const randomCause = causesOfDeath[Math.floor(Math.random() * causesOfDeath.length)];

  // Display results
  const resultDiv = document.getElementById("result");
  document.getElementById("daysLeft").textContent = `You have approximately ${daysLeft} days left to live.`;
  document.getElementById("causeOfDeath").textContent = `Cause of death: ${randomCause}.`;
  resultDiv.classList.remove("hidden");
});
