const input = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const result = document.getElementById("result");
const ingredients = document.getElementById("ingredients");
const suggestions = document.getElementById("suggestions");
const guessHistory = document.getElementById("guessHistory");

const dishes = [
    {
        name: "Μουσακάς",
        ingredients: [
            "Κιμάς",
            "Μελιτζάνα",
            "Κανέλα",
            "Πατάτα",
            "Μπεσαμέλ"
        ]
    },

    {
        name: "Παστίτσιο",
        ingredients: [
            "Κιμάς",
            "Φρυγανιά",
            "Τυρί",
            "Μπεσαμέλ",
            "Μακαρόνια"
        ]
    },

    {
        name: "Παπουτσάκια",
        ingredients: [
            "Κιμάς",
            "Κανέλα",
            "Τομάτα",
            "Μελιτζάνα",
            "Μπεσαμέλ"
        ]
    },
    {
        name: "Καρμπονάρα",
        ingredients: [
            "Μπέικον",
            "Τυρί",
            "Σκόρδο",
            "Αβγό",
            "Μακαρόνια"
        ]
    },
    {
        name: "Γιουβαρλάκια",
        ingredients: [
            "Κιμάς",
            "Αβγό",
            "Λεμόνι",
            "Ρύζι",
            "Νερό"
        ]
    },
    {
        name: "Γιουβέτσι",
        ingredients: [
            "Μοσχάρι",
            "Τομάτα",
            "Κρεμμύδι",
            "Κανέλα",
            "Κριθαράκι"
        ]
    },
    {
        name: "Μπολονέζ",
        ingredients: [
            "Κιμάς",
            "Κρεμμύδι",
            "Τομάτα",
            "Γάλα",
            "Μακαρόνια"
        ]
    }
];

const randomIndex = Math.floor(Math.random() * dishes.length);
const dish = dishes[randomIndex];

// State του παιχνιδιού
let currentIngredient = 0;
let gameOver = false;
let selectedDish = null;
const guesses = [];

function showIngredients() {
    ingredients.innerHTML = "";

    for (let i = 0; i < dish.ingredients.length; i++) {

        const clue = document.createElement("p");

        if (i <= currentIngredient) {
            clue.textContent = dish.ingredients[i];
        } else {
            clue.textContent = "???";
        }

        ingredients.appendChild(clue);
    }
}

showIngredients();


function makeGuess() {

    if (gameOver) {
        return;
    }

    if (selectedDish === null) {
        result.textContent = "⚠️ Επίλεξε ένα πιάτο από τη λίστα.";
        return;
    }

    // Κρατάμε το πιάτο που επέλεξε ο χρήστης
    const guessedDish = selectedDish;

    // Καθαρίζουμε για το επόμενο guess
    input.value = "";
    selectedDish = null;
    suggestions.innerHTML = "";

    // Ελέγχουμε το guess
    if (guessedDish.name === dish.name) {

        result.textContent = "🟩 Σωστό!";
        endGame();

    } else {

        result.textContent = "❌ Λάθος!";

        if (guesses.includes(guessedDish.name)) {
            result.textContent = "⚠️ Έχεις ήδη μαντέψει αυτό το πιάτο.";
            return;
        }

        guesses.push(guessedDish.name);

        const historyItem = document.createElement("p");

        historyItem.textContent = guessedDish.name;

        guessHistory.appendChild(historyItem);

        currentIngredient++;

        if (currentIngredient < dish.ingredients.length) {

            showIngredients();

        } else {

            result.textContent =
                "💀 Έχασες! Η απάντηση ήταν: " + dish.name;

            endGame();
        }
    }
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function endGame() {
    gameOver = true;

    input.disabled = true;
    button.disabled = true;
}


// Click στο κουμπί
button.addEventListener("click", makeGuess);


// Enter στο input
input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        makeGuess();
    }
});

input.addEventListener("input", function () {

    selectedDish = null;

    const search = normalizeText(input.value);

    suggestions.innerHTML = "";

    if (search === "") {
        return;
    }

    for (let i = 0; i < dishes.length; i++) {

        const dishName = normalizeText(dishes[i].name);

        if (dishName.includes(search)) {

            const suggestion = document.createElement("p");

            suggestion.textContent = dishes[i].name;

            suggestion.addEventListener("click", function () {
                input.value = dishes[i].name;
                selectedDish = dishes[i];
                suggestions.innerHTML = "";
            });

            suggestions.appendChild(suggestion);
        }
    }
});