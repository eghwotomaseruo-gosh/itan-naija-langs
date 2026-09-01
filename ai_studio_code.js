/* ... (Keep all your Patterns, Courses, and Data at the top) ... */

// ADD THIS at the very end of your existing init function in app.js:
async function init() {
  if(!getToken()){ 
    showAuthScreen(); 
    document.getElementById("loading-overlay").style.display = "none"; // Hide loader
    return; 
  }
  try {
    await fetchProgress();
    renderHome();
    showScreen("home");
  } catch(e) {
    showAuthScreen("Could not load your progress.");
  } finally {
    document.getElementById("loading-overlay").style.display = "none"; // Hide loader
  }
}

// Ensure resetQuestionUI includes the sentence-wrap
function resetQuestionUI() {
  document.getElementById("options-grid").classList.remove("hidden");
  document.getElementById("options-grid").innerHTML = "";
  document.getElementById("type-wrap").classList.add("hidden");
  document.getElementById("match-wrap").classList.add("hidden");
  document.getElementById("sentence-wrap").classList.add("hidden"); // Added this
  document.getElementById("speaker-btn").classList.add("hidden");
  const feedback = document.getElementById("feedback");
  feedback.classList.add("hidden");
  const checkBtn = document.getElementById("check-btn");
  checkBtn.disabled = true;
  checkBtn.textContent = "Check";
}

/* ... (Keep the rest of your file as is) ... */