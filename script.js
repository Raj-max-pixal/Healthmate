// HealthMate App Logic

// STATE
let waterIntake = 0;
const waterGoal = 2000;
let streakCount = 3;
let quizScore = 0;
let selectedSymptoms = [];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Search Listener
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value.toLowerCase());
            }
        });
    }
});

// SEARCH LOGIC
function handleSearch(query) {
    if (!query) return;

    // SYMPTOMS
    if (query.includes('headache') || query.includes('fever') || query.includes('cold') || query.includes('cough') || query.includes('pain')) {
        navigateTo('symptoms');
        // Auto-select based on query
        if (query.includes('headache')) toggleSymptom(document.querySelector('.symptom-btn:nth-child(1)'), 'Headache');
        if (query.includes('fever')) toggleSymptom(document.querySelector('.symptom-btn:nth-child(2)'), 'Fever');

        analyzeSymptoms(); // Auto-analyze
    }
    // MENTAL
    else if (query.includes('stress') || query.includes('sad') || query.includes('anxiety') || query.includes('work') || query.includes('happy')) {
        navigateTo('mental');
        // Auto-fill and analyze
        const input = document.getElementById('mental-input');
        input.value = "I am feeling " + query;
        analyzeMental();
    }
    // FEATURES
    else if (query.includes('water') || query.includes('drink')) {
        navigateTo('water');
    }
    else if (query.includes('sleep') || query.includes('tired')) {
        navigateTo('sleep');
    }
    else if (query.includes('rewards') || query.includes('tree')) {
        navigateTo('rewards');
    }
    else {
        alert("Feature not found. Try 'Headache', 'Stress', or 'Water'.");
    }
}

// NAVIGATION
function navigateTo(viewId) {
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.style.display = 'none';
    });

    // Simple mapping for ease
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);
    }
}

// HELPLINE
function openHelpline() {
    window.open("https://www.google.com/maps/search/hospitals+near+me", "_blank");
}

// --- NEW FEATURES ---

// SYMPTOM SCAN
function toggleSymptom(btn, symptom) {
    btn.classList.toggle('selected');
    if (selectedSymptoms.includes(symptom)) {
        selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
    } else {
        selectedSymptoms.push(symptom);
    }
}

function analyzeSymptoms() {
    const resultDiv = document.getElementById('symptom-result');
    resultDiv.classList.remove('hidden');

    if (selectedSymptoms.length === 0) {
        resultDiv.innerHTML = " Please select symptoms.";
        return;
    }

    let advise = "Rest and hydration recommended.";
    if (selectedSymptoms.includes('Fever') && selectedSymptoms.includes('Cough')) {
        advise = "⚠️ Possible viral infection. Monitor temperature. Consult doctor if > 102°F.";
    } else if (selectedSymptoms.includes('Headache')) {
        advise = "💊 Take a rest. Reduce screen time. Stay hydrated.";
    }

    resultDiv.innerHTML = `<strong>Diagnosis:</strong><br>${advise}`;
}

// MENTAL HEALTH AI
function analyzeMental() {
    const input = document.getElementById('mental-input').value.toLowerCase();
    const resultDiv = document.getElementById('mental-result');
    resultDiv.classList.remove('hidden');

    let response = "I hear you. Maintaining balance is hard.";

    if (input.includes('stress') || input.includes('work')) {
        response = "It seems you're under pressure. 🧠 **AI Tip:** Try the 'Box Breathing' technique: Inhale 4s, Hold 4s, Exhale 4s.";
    } else if (input.includes('tired') || input.includes('sleep')) {
        response = "Your energy seems low. 🌙 **AI Tip:** Ensure you get 7-8 hours of sleep. Avoid caffeine after 4 PM.";
    } else if (input.includes('anxious') || input.includes('worry')) {
        response = "Anxiety can be overwhelming. 🧘 **AI Tip:** Ground yourself. Name 5 things you see, 4 you feel, 3 you hear.";
    }

    resultDiv.innerHTML = response;
}

// LIFESTYLE SCORE
let quizAnswers = {};
function setQuiz(qIndex, val, btn) {
    quizAnswers[qIndex] = val;
    // Visual feedback
    btn.parentNode.querySelectorAll('button').forEach(b => b.style.background = '#ddd');
    btn.style.background = '#C8E6C9';
}

function calculateLifestyle() {
    const resultDiv = document.getElementById('lifestyle-result');
    resultDiv.classList.remove('hidden');

    // Simple sum
    const total = Object.values(quizAnswers).reduce((a, b) => a + b, 0);
    const score = Math.round((total / 3) * 100);

    let msg = "";
    if (score === 100) msg = "🌟 Excellent! You are living a healthy life.";
    else if (score > 50) msg = "👍 Good, but room for improvement.";
    else msg = "⚠️ Time to focus on your health.";

    resultDiv.innerHTML = `<h3>Score: ${score}/100</h3><p>${msg}</p>`;
}


// --- EXISTING FEATURES (Simplified for new UI) ---

function addWater(amount) {
    waterIntake += amount;
    if (waterIntake > waterGoal) waterIntake = waterGoal;

    document.getElementById('water-amount').innerText = (waterIntake / 1000) + 'L';
    document.getElementById('dash-water').innerText = (waterIntake / 1000);

    // Update circle
    const circle = document.getElementById('water-progress');
    const deg = (waterIntake / waterGoal) * 360;
    circle.style.background = `conic-gradient(#03A9F4 ${deg}deg, #e0e0e0 0deg)`;
}

function logSleep() {
    const hours = document.getElementById('sleep-hours').value;
    document.getElementById('dash-sleep').innerText = hours;
    alert("Sleep logged!");
}

function revealScratchCard() {
    document.getElementById('scratch-card').classList.add('revealed');
}

// Init
document.getElementById('streak-count').innerText = streakCount;
addWater(0); // init UI