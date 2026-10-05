const input = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const result = document.getElementById("result");
const ingredients = document.getElementById("ingredients");
const suggestions = document.getElementById("suggestions");
const guessHistory = document.getElementById("guessHistory");
const originHint = document.getElementById("originHint");
const methodHint = document.getElementById("methodHint");
const scoreDisplay = document.getElementById("scoreDisplay");
const skipButton = document.getElementById("skipButton");
const giveUpButton = document.getElementById("giveUpButton");
const originDisplay = document.getElementById("originDisplay");
const methodDisplay = document.getElementById("methodDisplay");

const dishes = [
    {
        name: "Μουσακάς",
        ingredients: [
            "Κιμάς",
            "Μελιτζάνα",
            "Κανέλα",
            "Πατάτα",
            "Μπεσαμέλ"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },

    {
        name: "Παστίτσιο",
        ingredients: [
            "Κιμάς",
            "Φρυγανιά",
            "Τυρί",
            "Μπεσαμέλ",
            "Μακαρόνια"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },

    {
        name: "Παπουτσάκια",
        ingredients: [
            "Κιμάς",
            "Κανέλα",
            "Τομάτα",
            "Μελιτζάνα",
            "Μπεσαμέλ"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Καρμπονάρα",
        ingredients: [
            "Μπέικον",
            "Τυρί",
            "Σκόρδο",
            "Αβγό",
            "Μακαρόνια"
        ],
        origin: "Ιταλία",
        method: "Εστία"
    },
    {
        name: "Γιουβαρλάκια",
        ingredients: [
            "Κιμάς",
            "Αβγό",
            "Λεμόνι",
            "Ρύζι",
            "Νερό"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Γιουβέτσι",
        ingredients: [
            "Μοσχάρι",
            "Τομάτα",
            "Κρεμμύδι",
            "Κανέλα",
            "Κριθαράκι"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Μπολονέζ",
        ingredients: [
            "Κιμάς",
            "Κρεμμύδι",
            "Τομάτα",
            "Γάλα",
            "Μακαρόνια"
        ],
        origin: "Ιταλία",
        method: "Εστία"
    },
    {
        name: "Κοτόπουλο με πατάτες",
        ingredients: [
            "Πατάτα",
            "Λεμόνι",
            "Μουστάρδα",
            "Λάδι",
            "Κοτόπουλο"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Φασολάδα",
        ingredients: [
            "Τομάτα",
            "Σέλινο",
            "Νερό",
            "Κρεμμύδι",
            "Φασόλια"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Φακές",
        ingredients: [
            "Δάφνη",
            "Νερό",
            "Τομάτα",
            "Σκόρδο",
            "Φακές"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Ρεβυθάδα",
        ingredients: [
            "Δάφνη",
            "Καρότο",
            "Λεμόνι",
            "Κρεμμύδι",
            "Ρεβύθια"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Χούμους",
        ingredients: [
            "Λεμόνι",
            "Ταχίνι",
            "Σκόρδο",
            "Κύμινο",
            "Ρεβύθια"
        ],
        origin: "Μέση Ανατολή",
        method: "Κρύο/Σαλάτα"
    },
    {
        name: "Μπριάμ",
        ingredients: [
            "Μελιτζάνα",
            "Τομάτα",
            "Πατάτα",
            "Κολοκυθάκι",
            "Πιπεριά"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Τουρλού",
        ingredients: [
            "Μελιτζάνα",
            "Τομάτα",
            "Πατάτα",
            "Κολοκυθάκι",
            "Πιπεριά"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Κοτόσουπα",
        ingredients: [
            "Αβγό",
            "Ρύζι",
            "Λεμόνι",
            "Κοτόπουλο",
            "Νερό"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Τηγανιά Κοτόπουλο",
        ingredients: [
            "Μουστάρδα",
            "Κρεμμύδι",
            "Λεμόνι",
            "Κοτόπουλο",
            "Πιπεριά"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Γεμιστά",
        ingredients: [
            "Τομάτα",
            "Κιμάς",
            "Μαϊντανός",
            "Πιπεριά",
            "Ρύζι"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Κολοκυθάκια Γεμιστά",
        ingredients: [
            "Ρύζι",
            "Κιμάς",
            "Λεμόνι",
            "Αβγό",
            "Κολοκυθάκι"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Μπακαλιάρος Σκορδαλιά",
        ingredients: [
            "Πατάτα",
            "Σκόρδο",
            "Λεμόνι",
            "Μπύρα",
            "Μπακαλιάρος"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Κολοκυθοκεφτέδες",
        ingredients: [
            "Αβγό",
            "Άνιθος",
            "Κολοκυθάκι",
            "Φέτα",
            "Αλεύρι"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Ριζότο Μανιταριών",
        ingredients: [
            "Ρύζι",
            "Βούτυρο",
            "Τυρί",
            "Μανιτάρια",
            "Κρεμμύδι"
        ],
        origin: "Ιταλία",
        method: "Εστία"
    },
    {
        name: "Κοτόπουλο Αλά Κρεμ",
        ingredients: [
            "Μανιτάρια",
            "Κρεμμύδι",
            "Κρέμα Γάλακτος",
            "Σκόρδο",
            "Κοτόπουλο"
        ],
        origin: "Γαλλία",
        method: "Εστία"
    },
    {
        name: "Μακαρόνια Ναπολιτάνα",
        ingredients: [
            "Τομάτα",
            "Κρεμμύδι",
            "Μακαρόνια",
            "Βασιλικός",
            "Σκόρδο"
        ],
        origin: "Ιταλία",
        method: "Εστία"
    },
    {
        name: "Ιμάμ Μπαϊλντί",
        ingredients: [
            "Μελιτζάνα",
            "Κρεμμύδι",
            "Τομάτα",
            "Σκόρδο",
            "Φέτα"
        ],
        origin: "Ελλάδα",
        method: "Φούρνος"
    },
    {
        name: "Σπανακόρυζο",
        ingredients: [
            "Ρύζι",
            "Κρεμμύδι",
            "Λεμόνι",
            "Σκόρδο",
            "Σπανάκι"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Πατατοσαλάτα",
        ingredients: [
            "Πατάτα",
            "Κρεμμύδι",
            "Μαϊντανός",
            "Μαγιονέζα",
            "Φρέσκο Κρεμμύδι"
        ],
        origin: "Ελλάδα",
        method: "Κρύο/Σαλάτα"
    },
    {
        name: "Φαλάφελ",
        ingredients: [
            "Ρεβύθια",
            "Σκόρδο",
            "Κύμινο",
            "Λεμόνι",
            "Αλεύρι"
        ],
        origin: "Μέση Ανατολή",
        method: "Εστία"
    },
    {
        name: "Σπετζοφάι",
        ingredients: [
            "Τομάτα",
            "Πιπεριά",
            "Μπούκοβο",
            "Σκόρδο",
            "Λουκάνικο"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Γαριδομακαρονάδα",
        ingredients: [
            "Τομάτα",
            "Βασιλικός",
            "Σκόρδο",
            "Μακαρόνια",
            "Γαρίδες"
        ],
        origin: "Ιταλία",
        method: "Εστία"
    },
    {
        name: "Μακαρόνια με πέστο",
        ingredients: [
            "Τυρί",
            "Σκόρδο",
            "Μακαρόνια",
            "Βασιλικός",
            "Κουκουνάρι"
        ],
        origin: "Ιταλία",
        method: "Εστία"
    },
    {
        name: "Μακαρόνια Ογκρατέν",
        ingredients: [
            "Τυρί",
            "Μακαρόνια",
            "Μοσχοκάρυδο",
            "Μπεσαμέλ",
            "Ζαμπόν"
        ],
        origin: "Γαλλία",
        method: "Φούρνος"
    },
    {
        name: "Σνίτσελ Κοτόπουλο",
        ingredients: [
            "Κοτόπουλο",
            "Αβγό",
            "Αλεύρι",
            "Λάδι",
            "Φρυγανιά"
        ],
        origin: "Γερμανία",
        method: "Εστία"
    },
    {
        name: "Σνίτσελ Χοιρινό",
        ingredients: [
            "Αβγό",
            "Αλεύρι",
            "Χοιρινό",
            "Λάδι",
            "Φρυγανιά"
        ],
        origin: "Γερμανία",
        method: "Εστία"
    },
    {
        name: "Χοιρινή Τηγανιά",
        ingredients: [
            "Κρεμμύδι",
            "Χοιρινό",
            "Λεμόνι",
            "Σκόρδο",
            "Λάδι"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Χοιρινό Πρασοσέλινο",
        ingredients: [
            "Κρεμμύδι",
            "Χοιρινό",
            "Σέλινο",
            "Σκόρδο",
            "Πράσο"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Χοιρινό Λεμονάτο",
        ingredients: [
            "Κρεμμύδι",
            "Χοιρινό",
            "Λεμόνι",
            "Πατάτες",
            "Ρίγανη"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Πατάτες Γιαχνί",
        ingredients: [
            "Τομάτα",
            "Δάφνη",
            "Κρεμμύδι",
            "Πατάτα",
            "Σκόρδο"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    },
    {
        name: "Μπατζίνα",
        ingredients: [
            "Φέτα",
            "Αλεύρι",
            "Γάλα",
            "Κολοκύθα",
            "Λάδι"
        ],
        origin: "Τρίκαλα",
        method: "Φούρνος"
    },
    {
        name: "Κρεατόσουπα",
        ingredients: [
            "Καρότο",
            "Μοσχάρι",
            "Πατάτα",
            "Σέλινο",
            "Νερό"
        ],
        origin: "Ελλάδα",
        method: "Εστία"
    }



];

const randomIndex = Math.floor(Math.random() * dishes.length);
const dish = dishes[randomIndex];

// State του παιχνιδιού
let currentIngredient = 0;
let gameOver = false;
let selectedDish = null;
let score = 0;
let originHintUsed = false;
let methodHintUsed = false;
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

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}



function countCommonIngredients(dish1, dish2) {
    let common = 0;

    for (let i = 0; i < dish1.ingredients.length; i++) {
        if (dish2.ingredients.includes(dish1.ingredients[i])) {
            common++;
        }
    }

    return common;
}

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
    const common = countCommonIngredients(guessedDish, dish);
    let indicator;

    if (guessedDish.name === dish.name) {
        indicator = "🟩";
    } else if (common >= 3) {
        indicator = "🟧";
    } else if (common === 2) {
        indicator = "🟨";
    } else {
        indicator = "⬛";
        
    }


    // Καθαρίζουμε για το επόμενο guess
    input.value = "";
    selectedDish = null;
    suggestions.innerHTML = "";

    // Ελέγχουμε το guess
    if (guessedDish.name === dish.name) {

        result.textContent = `🟩 ${dish.name}`;
        endGame();

    } else {


        if (guesses.includes(guessedDish.name)) {
            result.textContent = "⚠️ Έχεις ήδη μαντέψει αυτό το πιάτο.";
            return;
        }

        result.textContent = "❌ Λάθος!";
        score++;
        updateScore();

        guesses.push(guessedDish.name);

        const historyItem = document.createElement("p");

        historyItem.textContent = indicator + " " + guessedDish.name;

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

    originHint.disabled = true;
    methodHint.disabled = true;
    skipButton.disabled = true;
    giveUpButton.disabled = true;
}


// Click στο κουμπί
button.addEventListener("click", makeGuess);


// Enter στο input
input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        makeGuess();
    }
});

originHint.addEventListener("click", function () {

    if (originHintUsed === false) {
        originHintUsed = true;
        score++;
        updateScore();

        originDisplay.textContent = `🌍 ${dish.origin}`;
    }

});

methodHint.addEventListener("click", function () {

    if (methodHintUsed === false) {
        methodHintUsed = true;
        score++;
        updateScore();

        methodDisplay.textContent = `🍳 ${dish.method}`;
    }

});

skipButton.addEventListener("click", function () {

    if (gameOver) {
        return;
    }

    currentIngredient++;

    if (currentIngredient < dish.ingredients.length) {
        score++;
        updateScore();
        showIngredients();
    }
});

giveUpButton.addEventListener("click", function () {

    if (gameOver) {
        return;
    }

    result.textContent = `🏳️ Η απάντηση ήταν: ${dish.name}`;
    endGame();
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