// Target your items
  const items = document.querySelectorAll('.bonzi');

  items.forEach(item => {
    // Generates a random number between -45 and +45
    const degrees = Math.floor(Math.random() * 41) - 20;
    
    // Applies styling inline across all modern browsers
    item.style.transform = `rotate(${degrees}deg)`;
  });
