document.getElementById("deathClockForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const birthdayInput = document.getElementById("birthday").value;
  if (!birthdayInput) return;

  const birthday = new Date(birthdayInput);
  const lifeExpectancyYears = 80;
  const deathDate = new Date(birthday.getFullYear() + lifeExpectancyYears, birthday.getMonth(), birthday.getDate());
  const today = new Date();
  
  const daysLeft = Math.ceil((deathDate - today) / (1000 * 60 * 60 * 24));

  // Randomly generate a cause of death
  const causesOfDeath = [
    "an asteroid collision",
    "a zombie apocalypse",
    "spontaneous combustion",
    "being eaten by a giant mutant squirrel",
    "falling into a black hole",
    "a mysterious curse",
    "alien abduction gone wrong",
    "a shark attack in the desert",
    "accidentally summoning a demon while cooking",
    "laughing too hard at a joke"
  ];
  const randomCause = causesOfDeath[Math.floor(Math.random() * causesOfDeath.length)];

  // Display results
  const resultDiv = document.getElementById("result");
  document.getElementById("daysLeft").textContent = `You have approximately ${daysLeft} days left to live.`;
  document.getElementById("causeOfDeath").textContent = `Cause of death: ${randomCause}.`;
  resultDiv.classList.remove("hidden");
});
