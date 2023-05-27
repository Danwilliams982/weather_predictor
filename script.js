const beginnings = [
    "This morning is ",
    "This afternoon is ",
    "Tomorrow is ",
    "The night is "
  ];
  
  const middles = [
    "looking hot, ",
    "looking like it might be chilly, ",
    "showing signs of rain, ",
    "going to be stormy, "
  ];
  
  const endings = [
    "make sure you dress appropriately.",
    "be sure to stay safe.",
    "plan accordingly.",
    "maybe stay indoors!"
  ];
  
  function generateMessage() {
    const randomBeginning = getRandomElement(beginnings);
    const randomMiddle = getRandomElement(middles);
    const randomEnding = getRandomElement(endings);
  
    const message = randomBeginning + randomMiddle + randomEnding;
    document.getElementById("message").textContent = message;
  }
  
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  document.getElementById("generate-button").addEventListener("click", generateMessage);