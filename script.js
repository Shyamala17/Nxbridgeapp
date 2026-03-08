// ===== NourishX Core App Script =====

// Load different screens dynamically
function loadScreen(screen) {
  const appContent = document.getElementById('appContent');

  if (screen === 'home') {
    appContent.innerHTML = `
      <h2>Welcome to NourishX</h2>
      <p>Empowering kitchens, workers, and families globally.</p>
    `;
  }

  if (screen === 'recipes') {
    appContent.innerHTML = `
      <h2>Smart Recipes</h2>
      <p>Discover healthy, tech-powered cooking ideas.</p>
      <button onclick="showResult('win')">Try Recipe</button>
    `;
  }

  if (screen === 'dashboard') {
    appContent.innerHTML = `
      <h2>Dashboard</h2>
      <p>Calories tracked: 1200 | Steps: 5,000</p>
      <button onclick="showResult('draw')">Check Progress</button>
    `;
  }

  if (screen === 'community') {
    appContent.innerHTML = `
      <h2>Community</h2>
      <p>Share and empower kitchens globally.</p>
    `;
  }
}

// Show result screen (like win/draw)
function showResult(type) {
  const resultScreen = document.getElementById('resultScreen');
  const message = document.getElementById('resultMessage');

  if (type === 'win') {
    message.innerText = "🎉 Goal Achieved!";
  } else {
    message.innerText = "🤝 Keep Going!";
  }

  resultScreen.style.display = 'block';
}

// Start new plan (reset screen)
function startNewPlan() {
  document.getElementById('resultScreen').style.display = 'none';
  loadScreen('home');
}
